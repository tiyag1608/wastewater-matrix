import React, { useState, useMemo } from 'react'
import { pumpStations } from '../../data/mockData.js'
import useHistory from '../../hooks/useHistory.js'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import Badge from '../ui/Badge.jsx'
import { RotateCcw, ShieldAlert, Trash2, Clock, AlertTriangle, ShieldCheck } from 'lucide-react'
import { useToast } from '../ui/Toast.jsx'

/* ==========================================================================
   ALGORITHM DESIGN: LIFO STACK UNDO TRANSACTION CONTROLLER
   - Local state `valveStates` maps pump station IDs to current valve states.
   - useHistory hook acts as LIFO stack of changes.
   - Pushing an action registers { valveId, valveName, oldState, newState, timestamp }.
   - Undoing pops the top LIFO action and restores valveStates[popped.valveId] = popped.oldState.
   ========================================================================== */

// Helper to determine initial valve state from station status
const getInitialState = (status) => {
  if (status === 'NOMINAL') return 'OPEN'
  if (status === 'WARNING') return 'PARTIAL'
  return 'CLOSED' // CRITICAL or default is CLOSED for safety
}

function ValveControl() {
  // Initialize valve states from 12 pump stations
  const [valveStates, setValveStates] = useState(() => {
    const states = {}
    pumpStations.forEach(station => {
      states[station.id] = getInitialState(station.status)
    })
    return states
  })

  // Track the last changed timestamp for each valve
  const [changeTimes, setChangeTimes] = useState(() => {
    const times = {}
    pumpStations.forEach(station => {
      times[station.id] = station.lastUpdated
    })
    return times
  })

  // Use the stack-based useHistory hook (initialize with null as base stack element)
  const { 
    push, 
    undo: popHistory, 
    canUndo, 
    history, 
    clearHistory 
  } = useHistory(null)

  const { showToast } = useToast()

  // Handle manual valve state adjustments
  const handleStateChange = (stationId, stationName, newState) => {
    const oldState = valveStates[stationId]
    if (oldState === newState) return // No change

    // 1. Update active states
    setValveStates(prev => ({
      ...prev,
      [stationId]: newState
    }))

    const now = new Date().toISOString()
    setChangeTimes(prev => ({
      ...prev,
      [stationId]: now
    }))

    // 2. Push LIFO transaction change details onto history stack
    push({
      valveId: stationId,
      valveName: stationName,
      oldState,
      newState,
      timestamp: now,
      operator: "OPR-001"
    })

    showToast(`Valve [${stationName}] set to ${newState}`, 'success')
  }

  // Handle LIFO undo popped trigger
  const handleUndo = () => {
    const popped = popHistory()
    if (!popped) return

    // Revert valve state to historical value
    setValveStates(prev => ({
      ...prev,
      [popped.valveId]: popped.oldState
    }))

    // Revert change time
    setChangeTimes(prev => ({
      ...prev,
      [popped.valveId]: popped.timestamp
    }))

    showToast(`Undone: [${popped.valveName}] reverted to ${popped.oldState}`, 'warning')
  }

  const handleClearHistory = () => {
    clearHistory(null)
    showToast("System History stack purged successfully", 'info')
  }

  // Filter out the initial null item to obtain actual history changes
  const activeHistoryEntries = useMemo(() => {
    return history.filter(item => item !== null).reverse() // Show newest on top
  }, [history])

  // Helpers for styling
  const getStateColor = (state) => {
    if (state === 'OPEN') return 'var(--accent-green)'
    if (state === 'CLOSED') return 'var(--accent-red)'
    return 'var(--accent-yellow)' // PARTIAL
  }

  const getStateGlowColor = (state) => {
    if (state === 'OPEN') return 'green'
    if (state === 'CLOSED') return 'red'
    return 'yellow'
  }

  // Check if a change time is older than simulated 5 minutes (for stale warning)
  const isTimeStale = (isoString) => {
    if (!isoString) return false
    const timeDiff = Date.now() - new Date(isoString).getTime()
    return timeDiff > 5 * 60 * 1000
  }

  return (
    <>
      <style>{`
        .scada-valve-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-valve-layout {
            flex-direction: column;
          }
        }

        /* Valve grid card styling */
        .valve-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-4);
        }

        .valve-card-body {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .valve-state-display {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-2) var(--space-3);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .valve-state-val {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 13px;
        }

        .valve-time-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          color: var(--text-secondary);
        }

        .valve-stale-warning {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--accent-yellow);
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .valve-btn-group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-2);
        }

        /* History side panel styling */
        .valve-history-panel {
          position: sticky;
          top: var(--header-height);
          flex: 1.2;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .history-controls {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding-bottom: var(--space-3);
          border-bottom: 1px solid var(--border-color);
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          max-height: 50vh;
          overflow-y: auto;
          padding-right: 4px;
        }

        .history-row {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-2) var(--space-3);
          font-family: var(--font-mono);
          font-size: 11px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all var(--transition-fast);
        }

        .history-row.newest {
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-glow-cyan);
          background-color: rgba(0, 212, 255, 0.02);
        }

        .history-meta {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 9px;
        }

        .history-flow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2px;
        }

        /* Toast notifications */
        .scada-toast-banner {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background-color: var(--bg-card);
          border: 1px solid var(--accent-cyan);
          border-radius: var(--radius-sm);
          padding: var(--space-3) var(--space-5);
          box-shadow: var(--shadow-glow-cyan);
          z-index: 200;
          display: flex;
          align-items: center;
          gap: var(--space-3);
          animation: slideUp var(--transition-fast) forwards;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .scada-toast-banner.undo {
          border-color: var(--accent-yellow);
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.25);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>



      <div className="scada-valve-layout animate-slide-in">
        {/* Interactive Valves Grid */}
        <div style={{ flex: 3 }}>
          <div className="valve-grid">
            {pumpStations.map(station => {
              const currentState = valveStates[station.id]
              const lastChanged = changeTimes[station.id]
              const isStale = isTimeStale(lastChanged)

              return (
                <Card
                  key={station.id}
                  title={station.name}
                  subtitle={station.sector}
                  glowColor={getStateGlowColor(currentState)}
                  style={{ borderTop: `3px solid ${getStateColor(currentState)}` }}
                >
                  <div className="valve-card-body">
                    <div className="valve-state-display">
                      <span style={{ fontSize: '10px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
                        Control Valve State
                      </span>
                      <span className="valve-state-val" style={{ color: getStateColor(currentState) }}>
                        {currentState}
                      </span>
                    </div>

                    <div className="valve-time-row">
                      <span className="font-mono">ID: {station.id}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={10} /> {new Date(lastChanged).toLocaleTimeString()}
                      </span>
                    </div>

                    {/* Stale warn indicator */}
                    {isStale && (
                      <div className="valve-stale-warning">
                        <AlertTriangle size={12} />
                        <span>STALE telemetry &gt;5m</span>
                      </div>
                    )}

                    {/* Dosing triggers */}
                    <div className="valve-btn-group">
                      <Button
                        variant={currentState === 'OPEN' ? 'success' : 'ghost'}
                        size="sm"
                        onClick={() => handleStateChange(station.id, station.name, 'OPEN')}
                      >
                        OPEN
                      </Button>
                      <Button
                        variant={currentState === 'PARTIAL' ? 'primary' : 'ghost'}
                        size="sm"
                        onClick={() => handleStateChange(station.id, station.name, 'PARTIAL')}
                      >
                        PART
                      </Button>
                      <Button
                        variant={currentState === 'CLOSED' ? 'danger' : 'ghost'}
                        size="sm"
                        onClick={() => handleStateChange(station.id, station.name, 'CLOSED')}
                      >
                        CLOSE
                      </Button>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* History Side Panel */}
        <div className="valve-history-panel">
          <Card title="Undo Stack Ledger" icon={<RotateCcw size={14} />}>
            <div className="history-controls">
              <Button
                variant="primary"
                onClick={handleUndo}
                disabled={!canUndo}
                style={{ width: '100%', padding: '12px var(--space-4)', fontSize: '13px' }}
              >
                <RotateCcw size={16} /> Undo Last Action
              </Button>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px' }}>
                <span className="font-mono" style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                  Stack Depth: {activeHistoryEntries.length} changes
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClearHistory}
                  disabled={activeHistoryEntries.length === 0}
                  style={{ borderColor: 'rgba(255, 77, 77, 0.4)', color: 'var(--accent-red)' }}
                >
                  <Trash2 size={12} /> Purge
                </Button>
              </div>
            </div>

            <div className="history-list">
              {activeHistoryEntries.length > 0 ? (
                activeHistoryEntries.slice(0, 10).map((log, idx) => (
                  <div key={idx} className={`history-row ${idx === 0 ? 'newest' : ''}`}>
                    <div className="history-meta">
                      <span>{log.operator}</span>
                      <span>{new Date(log.timestamp).toLocaleTimeString()}</span>
                    </div>
                    <div style={{ fontWeight: '700', color: 'var(--text-primary)', textTransform: 'uppercase', fontSize: '10px' }}>
                      {log.valveName}
                    </div>
                    <div className="history-flow">
                      <span style={{ color: 'var(--text-muted)' }}>{log.oldState}</span>
                      <span style={{ color: 'var(--text-secondary)' }}>→</span>
                      <span style={{ color: getStateColor(log.newState), fontWeight: '800' }}>{log.newState}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '40px var(--space-4)', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={28} style={{ color: 'var(--accent-green)', marginBottom: '12px' }} />
                  <p style={{ fontSize: '12px' }}>History Stack Nominal</p>
                  <p style={{ fontSize: '10px', marginTop: '4px' }}>All transactions committed.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

const styles = {}

export default ValveControl
