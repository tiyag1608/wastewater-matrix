import React, { useState, useMemo, useEffect } from 'react'
import { pumpStations } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import StatusIndicator from '../ui/StatusIndicator.jsx'
import { ShieldAlert, ShieldCheck, Cpu, RefreshCw, Truck, Play, Flame, Clock } from 'lucide-react'
import { useToast } from '../ui/Toast.jsx'

/* ==========================================================================
   ALGORITHM DESIGN: MAX-HEAP OVERFLOW RISK EXTRACTOR
   - The station registry is auto-sorted using sort filters.
   - Sorting by `overflowPercent` descending simulates a Max-Heap priority extraction:
     `stations.sort((a, b) => b.overflowPercent - a.overflowPercent)`
   - Keeps nodes under risk of dilation prioritised at Rank #1 and #2.
   - Re-sort triggers reactively upon volume adjustments (Simulate pings).
   ========================================================================== */

function OverflowSorter() {
  const [stations, setStations] = useState(pumpStations)
  const [sortKey, setSortKey] = useState('risk') // 'risk' | 'volume' | 'name' | 'sector'
  const [sortOrder, setSortOrder] = useState('desc') // 'desc' | 'asc'
  const [changedStations, setChangedStations] = useState({}) // Tracks which stations shifted
  const { showToast } = useToast()

  // Sorting logic based on sortKey
  const sortedStations = useMemo(() => {
    const cloned = [...stations]
    cloned.sort((a, b) => {
      let comparison = 0
      if (sortKey === 'risk') {
        comparison = a.overflowPercent - b.overflowPercent
      } else if (sortKey === 'volume') {
        comparison = a.currentVolume - b.currentVolume
      } else if (sortKey === 'name') {
        comparison = a.name.localeCompare(b.name)
      } else if (sortKey === 'sector') {
        comparison = a.sector.localeCompare(b.sector)
      }

      return sortOrder === 'desc' ? -comparison : comparison
    })
    return cloned
  }, [stations, sortKey, sortOrder])

  // Summary Metrics calculations
  const stats = useMemo(() => {
    let critical = 0
    let warning = 0
    let normal = 0

    stations.forEach(s => {
      const fill = s.overflowPercent
      if (fill >= 95) critical++
      else if (fill >= 80) warning++
      else normal++
    })

    return { critical, warning, normal }
  }, [stations])

  // Alert list for stations above 80%
  const alertStations = useMemo(() => {
    return stations.filter(s => s.overflowPercent >= 80)
  }, [stations])

  // Simulate volume fluctuations (pumping loop)
  const handleSimulate = () => {
    const changes = {}
    const updated = stations.map(station => {
      // Delta range: ±5% to ±15%
      const percentDelta = (Math.random() * 10 + 5) * (Math.random() > 0.4 ? 1 : -1)
      const currentPercent = station.overflowPercent
      let nextPercent = Math.max(0, Math.min(100, currentPercent + percentDelta))
      
      const nextVolume = Math.floor((nextPercent / 100) * station.maxCapacity)
      nextPercent = Number(((nextVolume / station.maxCapacity) * 100).toFixed(1))

      // Log the delta direction
      changes[station.id] = percentDelta > 0 ? 'up' : 'down'

      return {
        ...station,
        currentVolume: nextVolume,
        overflowPercent: nextPercent,
        status: nextPercent >= 85 ? 'CRITICAL' : nextPercent >= 60 ? 'WARNING' : 'NOMINAL',
        lastUpdated: new Date().toISOString()
      }
    })

    setChangedStations(changes)
    setStations(updated)

    // Clear changes animation highlight after 1.5 seconds
    setTimeout(() => {
      setChangedStations({})
    }, 1500)

    showToast("Telemetry parameters randomized. Sorter re-executed.", 'success')
  }

  const handleDispatchCrew = (stationName, fill) => {
    showToast(`Crew dispatched to [${stationName}] (Level: ${fill}%)`, 'info')
  }

  // Get bar color based on percentage
  const getBarColor = (fill) => {
    if (fill < 60) return 'var(--accent-green)'
    if (fill < 80) return 'var(--accent-yellow)'
    if (fill < 95) return '#ff9900' // orange
    return 'var(--accent-red)'
  }

  return (
    <>
      <style>{`
        .scada-overflow-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-overflow-layout {
            flex-direction: column;
          }
        }

        /* Stats Row */
        .scada-stats-bar {
          display: flex;
          gap: var(--space-4);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px var(--space-4);
          font-family: var(--font-mono);
          font-size: 11px;
          margin-bottom: var(--space-4);
        }

        /* Sort Bar */
        .sort-action-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          margin-bottom: var(--space-4);
        }

        .sort-btn-group {
          display: flex;
          gap: var(--space-2);
          background-color: var(--bg-primary);
          padding: 2px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .sort-btn-option {
          background: none;
          border: none;
          padding: 6px 12px;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .sort-btn-option.active {
          background-color: var(--accent-cyan);
          color: var(--bg-primary);
        }

        /* Sorter cards list */
        .sorter-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .station-rank-card {
          border-left: 3px solid var(--border-color) !important;
          transition: all var(--transition-normal);
        }

        /* Rank Danger styling */
        .station-rank-card.rank-1,
        .station-rank-card.rank-2 {
          border-left-color: var(--accent-red) !important;
        }

        .station-rank-card.rank-1 {
          transform: scale(1.01);
          border-width: 1px 1px 1px 3px !important;
          background-color: rgba(255, 77, 77, 0.02) !important;
        }

        /* Simulation changed animation highlights */
        .station-rank-card.changed-up {
          background-color: rgba(255, 215, 0, 0.08) !important;
          border-color: var(--accent-yellow) !important;
        }
        .station-rank-card.changed-down {
          background-color: rgba(0, 255, 136, 0.08) !important;
          border-color: var(--accent-green) !important;
        }

        /* Card internals */
        .station-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .rank-lbl-badge {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
        }

        .rank-danger-badge {
          border-color: var(--accent-red);
          color: var(--accent-red);
          text-shadow: 0 0 5px rgba(255, 77, 77, 0.3);
        }

        /* Progress bars styling */
        .scada-progress-bar-bg {
          width: 100%;
          height: 8px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin: var(--space-2) 0;
        }

        .scada-progress-bar-fill {
          height: 100%;
          transition: width 0.4s ease-out;
        }

        /* Pulsing style for critical cards */
        .critical-pulse-card {
          animation: critical-pulse 2s infinite alternate;
          border-color: var(--accent-red) !important;
        }

        @keyframes critical-pulse {
          0% { box-shadow: 0 0 4px rgba(255, 77, 77, 0.1); }
          100% { box-shadow: 0 0 15px rgba(255, 77, 77, 0.35); }
        }

        /* Alarm side panel */
        .alarm-sidebar-panel {
          position: sticky;
          top: var(--header-height);
          flex: 1.2;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .alarm-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          max-height: 50vh;
          overflow-y: auto;
        }

        .alarm-row {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-3);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
      `}</style>



      <div className="scada-overflow-layout animate-slide-in">
        {/* Main content list (Left side) */}
        <div style={{ flex: 3, width: '100%' }}>
          {/* Summary stats bar */}
          <div className="scada-stats-bar">
            <span>🔴 CRITICAL (&gt;95%): <span className="text-red">{stats.critical}</span></span>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <span>🟡 WARNING (80-95%): <span className="text-yellow">{stats.warning}</span></span>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <span>🟢 NORMAL: <span className="text-green">{stats.normal}</span></span>
          </div>

          {/* Sorter Sort Bar */}
          <div className="sort-action-bar">
            <div className="sort-btn-group">
              <button 
                className={`sort-btn-option ${sortKey === 'risk' ? 'active' : ''}`}
                onClick={() => { setSortKey('risk'); setSortOrder('desc') }}
              >
                Risk % ▼
              </button>
              <button 
                className={`sort-btn-option ${sortKey === 'volume' ? 'active' : ''}`}
                onClick={() => { setSortKey('volume'); setSortOrder('desc') }}
              >
                Volume
              </button>
              <button 
                className={`sort-btn-option ${sortKey === 'name' ? 'active' : ''}`}
                onClick={() => { setSortKey('name'); setSortOrder('asc') }}
              >
                Name
              </button>
              <button 
                className={`sort-btn-option ${sortKey === 'sector' ? 'active' : ''}`}
                onClick={() => { setSortKey('sector'); setSortOrder('asc') }}
              >
                Sector
              </button>
            </div>

            <Button variant="ghost" onClick={handleSimulate} style={{ borderColor: 'var(--accent-purple)', color: 'var(--accent-purple)' }}>
              <RefreshCw size={14} /> Simulate Pumping Jitter
            </Button>
          </div>

          {/* Sorter cards list */}
          <div className="sorter-list">
            {sortedStations.map((station, idx) => {
              const rank = idx + 1
              const fill = station.overflowPercent
              const isDangerRank = rank <= 2
              const isCritical = fill >= 95
              const barColor = getBarColor(fill)

              // Check delta updates animation status
              const changeDir = changedStations[station.id]
              let changeClass = ''
              if (changeDir === 'up') changeClass = 'changed-up'
              else if (changeDir === 'down') changeClass = 'changed-down'

              return (
                <div 
                  key={station.id} 
                  className={`station-rank-card rank-${rank} ${isCritical ? 'critical-pulse-card' : ''} ${changeClass}`}
                >
                  <Card style={{ margin: 0, padding: 'var(--space-3) var(--space-4)' }}>
                    <div className="valve-card-body">
                      {/* Card Header row */}
                      <div className="station-header-row">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div className={`rank-lbl-badge ${isDangerRank ? 'rank-danger-badge' : ''}`}>
                            #{rank}
                          </div>
                          <div>
                            <span style={{ fontWeight: '700', fontSize: '13px', color: 'var(--text-primary)', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
                              {station.name}
                            </span>
                            <div style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                              LOC: {station.sector} • Ref ID: {station.id}
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {isCritical && <Badge label="CRITICAL ALERT" variant="danger" />}
                          <Badge label={station.status} variant={fill >= 80 ? 'danger' : fill >= 60 ? 'warning' : 'active'} />
                        </div>
                      </div>

                      {/* Bar indicator */}
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', fontWeight: '700', fontFamily: 'var(--font-mono)' }}>
                          <span style={{ color: 'var(--text-secondary)' }}>
                            {(station.currentVolume / 1000).toFixed(0)} / {(station.maxCapacity / 1000).toFixed(0)} kL
                          </span>
                          <span style={{ color: barColor }}>{fill.toFixed(1)}%</span>
                        </div>

                        <div className="scada-progress-bar-bg">
                          <div 
                            className="scada-progress-bar-fill"
                            style={{ 
                              width: `${Math.min(fill, 100)}%`, 
                              backgroundColor: barColor,
                              boxShadow: `0 0 8px ${barColor}30`
                            }}
                          />
                        </div>
                      </div>

                      {/* Card Footer row */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '10px', color: 'var(--text-muted)' }}>
                        <span className="font-mono">Cap: {(station.maxCapacity).toLocaleString()} L</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={10} /> {new Date(station.lastUpdated).toLocaleTimeString()}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>

        {/* Alert sidebar panel (Right side) */}
        <div className="alarm-sidebar-panel">
          <Card title="Station Alerts" icon={<ShieldAlert size={14} />} glowColor="red">
            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', marginBottom: '12px' }}>
              ⚠️ {alertStations.length} stations require attention
            </div>

            <div className="alarm-list">
              {alertStations.length > 0 ? (
                alertStations.map(station => (
                  <div key={station.id} className="alarm-row" style={{ borderLeft: '2px solid var(--accent-red)' }}>
                    <div style={{ display: 'flex', justifySelf: 'start', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                      <span style={{ fontWeight: '700', fontSize: '11px', textTransform: 'uppercase' }}>
                        {station.name}
                      </span>
                      <span className="font-mono" style={{ color: 'var(--accent-red)', fontWeight: '800' }}>
                        {station.overflowPercent}%
                      </span>
                    </div>
                    <Button 
                      variant="danger" 
                      size="sm" 
                      onClick={() => handleDispatchCrew(station.name, station.overflowPercent)}
                      style={{ fontSize: '9px', padding: '4px var(--space-2)' }}
                    >
                      <Truck size={12} /> Dispatch Crew
                    </Button>
                  </div>
                ))
              ) : (
                <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)' }}>
                  <ShieldCheck size={24} style={{ color: 'var(--accent-green)', marginBottom: '8px' }} />
                  <p style={{ fontSize: '11px' }}>All station levels nominal.</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default OverflowSorter
