import React, { useState, useMemo, useEffect } from 'react'
import { chemicalsMatching, stationsMatching } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import StatusIndicator from '../ui/StatusIndicator.jsx'
import { Play, RotateCcw, AlertTriangle, ShieldCheck, ShieldAlert, Zap } from 'lucide-react'
import { useToast } from '../ui/Toast.jsx'

/* ==========================================================================
   ALGORITHM DESIGN: GREEDY CHEMICAL FEEDER MATCHING
   - Auto-balancing executes a Greedy Matching heuristic.
   - Reagents are sorted by compatibility counts ascending (fewest options first):
     `clonedChems.sort((a,b) => a.compatibleWith.length - b.compatibleWith.length)`
   - We loop through each reagent and bind it to the first unassigned compatible station.
   - Assignments are rendered sequentially with a 300ms animation delay.
   ========================================================================== */

function ChemicalBalancer() {
  const [assignments, setAssignments] = useState({}) // { chemicalId: stationId }
  const [selectedChemId, setSelectedChemId] = useState(null)
  const [isBalancing, setIsBalancing] = useState(false)
  const [matchScore, setMatchScore] = useState(0)
  const [lastAssignedChemId, setLastAssignedChemId] = useState(null)
  const { showToast } = useToast()

  // Map station IDs to names for compatible tag rendering
  const stationNamesMap = useMemo(() => {
    const map = {}
    stationsMatching.forEach(s => {
      map[s.id] = s.name
    })
    return map
  }, [])

  // Identify assigned chemical for each station
  const stationAssignments = useMemo(() => {
    const map = {}
    Object.keys(assignments).forEach(chemId => {
      const stationId = assignments[chemId]
      if (stationId) {
        map[stationId] = chemId
      }
    })
    return map
  }, [assignments])

  // Get demand level label based on demand value
  const getDemandLevel = (demand) => {
    if (demand > 30) return 'HIGH'
    if (demand > 10) return 'MEDIUM'
    return 'LOW'
  }

  // Greedy matching calculation
  const runGreedyMatching = () => {
    const currentAssignments = {}
    const takenStations = new Set()

    // 1. Sort chemicals by number of compatible stations (fewest options first)
    const sortedChems = [...chemicalsMatching].sort(
      (a, b) => a.compatibleWith.length - b.compatibleWith.length
    )

    const steps = []

    // 2. Greedy loop
    sortedChems.forEach(chem => {
      // Find first unassigned compatible station
      const targetStationId = chem.compatibleWith.find(
        stationId => !takenStations.has(stationId)
      )

      if (targetStationId) {
        currentAssignments[chem.id] = targetStationId
        takenStations.add(targetStationId)
        steps.push({ chemId: chem.id, stationId: targetStationId })
      } else {
        currentAssignments[chem.id] = null // Unmatched
      }
    })

    return { currentAssignments, steps }
  }

  // Auto-Balance click trigger with sequential animation
  const handleAutoBalance = () => {
    if (isBalancing) return

    setIsBalancing(true)
    setAssignments({}) // Reset before animation
    setLastAssignedChemId(null)
    
    const { currentAssignments, steps } = runGreedyMatching()

    let stepIdx = 0
    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        const step = steps[stepIdx]
        setAssignments(prev => ({
          ...prev,
          [step.chemId]: step.stationId
        }))
        setLastAssignedChemId(step.chemId)
        stepIdx++
      } else {
        clearInterval(interval)
        setIsBalancing(false)
        setMatchScore(steps.length)
        setLastAssignedChemId(null)
        showToast(`Greedy balancing complete. Covered ${steps.length}/6 stations.`, 'success')
      }
    }, 300)
  }

  const handleReset = () => {
    setAssignments({})
    setSelectedChemId(null)
    setMatchScore(0)
    showToast("Assignments reset.", 'info')
  }

  // Click handler for manual assignments
  const handleStationClick = (stationId) => {
    if (!selectedChemId) return

    const selectedChem = chemicalsMatching.find(c => c.id === selectedChemId)
    if (!selectedChem) return

    const isCompatible = selectedChem.compatibleWith.includes(stationId)

    if (!isCompatible) {
      showToast(`${selectedChem.name} not compatible with ${stationNamesMap[stationId] || stationId}`, 'error')
      return
    }

    // Check if station is already taken by another chemical, and if so, unassign it
    const updatedAssignments = { ...assignments }
    Object.keys(updatedAssignments).forEach(chemId => {
      if (updatedAssignments[chemId] === stationId) {
        updatedAssignments[chemId] = null
      }
    })

    // Commit assignment
    updatedAssignments[selectedChemId] = stationId
    setAssignments(updatedAssignments)
    setSelectedChemId(null) // Reset selection
    showToast(`Manually matched ${selectedChem.name} to station.`, 'success')
  }

  const handleChemClick = (chemId) => {
    if (isBalancing) return
    setSelectedChemId(prev => prev === chemId ? null : chemId)
  }

  // Calculate matching summaries
  const matchingSummary = useMemo(() => {
    const activeMatchesCount = Object.values(assignments).filter(val => val !== null && val !== undefined).length
    if (activeMatchesCount === 0) return null

    const perfectMatches = activeMatchesCount
    const unassigned = 6 - perfectMatches

    return {
      perfectMatches,
      unassigned
    }
  }, [assignments])

  return (
    <>
      <style>{`
        .scada-balancer-layout {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          width: 100%;
        }

        .balancer-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          margin-bottom: var(--space-2);
        }

        .balancer-grid-container {
          display: flex;
          justify-content: space-between;
          position: relative;
          width: 100%;
        }

        .balancer-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        /* Fixed Heights for aligned row connections */
        .balancer-node-card {
          height: 118px;
          margin: 0 !important;
          transition: all var(--transition-fast);
          border-width: 1px;
          border-style: solid;
          border-color: var(--border-color);
        }

        .chem-card-clickable {
          cursor: pointer;
        }

        .chem-card-clickable:hover {
          border-color: var(--accent-cyan);
        }

        .chem-card-selected {
          border-color: var(--accent-cyan) !important;
          box-shadow: var(--shadow-glow-cyan) !important;
          background-color: rgba(0, 212, 255, 0.04) !important;
        }

        /* Station indicators based on selection compatibility */
        .station-card-compatible {
          border-color: var(--accent-green) !important;
          box-shadow: 0 0 12px rgba(0, 255, 136, 0.25) !important;
          background-color: rgba(0, 255, 136, 0.04) !important;
          cursor: pointer;
        }

        .station-card-incompatible {
          border-color: var(--accent-red) !important;
          background-color: rgba(255, 77, 77, 0.05) !important;
          opacity: 0.6;
          cursor: not-allowed;
        }

        .station-card-clickable {
          cursor: pointer;
        }
        .station-card-clickable:hover {
          border-color: var(--accent-cyan);
        }

        /* SVG lines connector layer absolute overlay */
        .balancer-svg-canvas {
          width: 120px;
          height: 788px; /* 6 cards * 118px + 5 gaps * 16px */
          pointer-events: none;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .balancer-svg-canvas {
            display: none;
          }
          .balancer-grid-container {
            flex-direction: column;
            gap: var(--space-5);
          }
        }

        .connecting-line {
          stroke: var(--border-color);
          stroke-width: 1.5px;
          transition: all 0.3s ease;
        }

        .connecting-line.active-match {
          stroke: var(--accent-green);
          stroke-width: 3px;
          filter: drop-shadow(0 0 4px var(--accent-green));
        }

        .connecting-line.balancing-pulse {
          stroke: var(--accent-cyan);
          stroke-width: 3px;
          stroke-dasharray: 6,3;
          animation: scada-flow 1s linear infinite;
        }

        .compat-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: var(--space-2);
        }

        .summary-stats-box {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px var(--space-4);
          font-family: var(--font-mono);
          font-size: 11px;
          margin-bottom: var(--space-4);
        }
      `}</style>



      <div className="scada-balancer-layout animate-slide-in">
        {/* Balancer Top controls */}
        <div className="balancer-top-bar">
          <div style={{ display: 'flex', gap: '10px' }}>
            <Button variant="primary" onClick={handleAutoBalance} disabled={isBalancing}>
              <Play size={14} /> Auto-Balance
            </Button>
            <Button variant="ghost" onClick={handleReset} style={{ borderColor: 'var(--text-muted)', color: 'var(--text-secondary)' }}>
              <RotateCcw size={14} /> Reset Assignments
            </Button>
          </div>

          {matchingSummary && (
            <div className="summary-stats-box" style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: 'var(--accent-cyan)', fontWeight: '700' }}>
                Match Score: {matchingSummary.perfectMatches}/6 Stations Covered
              </span>
              <span style={{ color: 'var(--border-color)', margin: '0 8px' }}>|</span>
              <span>✅ {matchingSummary.perfectMatches} perfect matches</span>
              <span style={{ color: 'var(--border-color)', margin: '0 8px' }}>|</span>
              <span style={{ color: matchingSummary.unassigned > 0 ? 'var(--accent-yellow)' : 'var(--text-secondary)' }}>
                {matchingSummary.unassigned > 0 
                  ? `⚠️ ${matchingSummary.unassigned} incompatible — manual review needed` 
                  : '🎉 0 incompatible'}
              </span>
            </div>
          )}
        </div>

        {/* Column Headers */}
        <div className="balancer-headers-row" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '12px' }}>
          <h3 style={{ flex: 1, fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em' }}>
            Available Chemicals
          </h3>
          <div style={{ width: '120px' }}></div>
          <h3 style={{ flex: 1, fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', margin: 0, letterSpacing: '0.05em' }}>
            Pump Stations
          </h3>
        </div>

        {/* 3-Column matching canvas grid */}
        <div className="balancer-grid-container">
          {/* LEFT: Available Chemicals */}
          <div className="balancer-column">
            {chemicalsMatching.map((chem, idx) => {
              const assignedStationId = assignments[chem.id]
              const isSelected = selectedChemId === chem.id
              const cardClass = `balancer-node-card chem-card-clickable ${isSelected ? 'chem-card-selected' : ''}`

              return (
                <div 
                  key={chem.id} 
                  className={cardClass}
                  onClick={() => handleChemClick(chem.id)}
                >
                  <Card style={{ margin: 0, height: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', justifySelf: 'start', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: '700', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>{chem.id}</span>
                        {assignedStationId ? (
                          <Badge label={`Assigned: ${assignedStationId}`} variant="active" />
                        ) : (
                          <Badge label="Unassigned" variant="inactive" />
                        )}
                      </div>
                      
                      <h4 style={{ fontSize: '13px', color: 'var(--accent-purple)', margin: '4px 0 2px' }}>{chem.name}</h4>
                      
                      <div className="compat-tags-row">
                        {chem.compatibleWith.map(sid => (
                          <span key={sid} style={{ fontSize: '8px', fontFamily: 'var(--font-mono)', border: '1px solid var(--border-color)', padding: '1px 4px', color: 'var(--text-secondary)' }}>
                            {sid}
                          </span>
                        ))}
                      </div>
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        Flow threshold: {chem.requiredFlow} L/h
                      </span>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>

          {/* CENTER: SVG Connectors overlay */}
          <svg className="balancer-svg-canvas">
            {chemicalsMatching.map((chem, chemIdx) => {
              const assignedStationId = assignments[chem.id]
              if (!assignedStationId) return null

              const stationIdx = stationsMatching.findIndex(s => s.id === assignedStationId)
              if (stationIdx === -1) return null

              // Mathematical Y center coordinates calculation:
              // i * (height 118 + gap 16) + height/2
              const yStart = chemIdx * 134 + 59
              const yEnd = stationIdx * 134 + 59

              const isPulse = isBalancing && chem.id === lastAssignedChemId

              return (
                <line
                  key={`match-line-${chem.id}`}
                  x1="0"
                  y1={yStart}
                  x2="120"
                  y2={yEnd}
                  className={`connecting-line ${isPulse ? 'balancing-pulse' : 'active-match'}`}
                />
              )
            })}
          </svg>

          {/* RIGHT: Pump Stations */}
          <div className="balancer-column">
            {stationsMatching.map((station, idx) => {
              const assignedChemId = stationAssignments[station.id]
              const assignedChem = assignedChemId ? chemicalsMatching.find(c => c.id === assignedChemId) : null
              const demandLevel = getDemandLevel(station.chemicalDemand)

              // Check compatibility context if a chemical is selected
              let compatibilityClass = 'station-card-clickable'
              if (selectedChemId) {
                const selectedChemObj = chemicalsMatching.find(c => c.id === selectedChemId)
                const isCompatible = selectedChemObj.compatibleWith.includes(station.id)
                compatibilityClass = isCompatible ? 'station-card-compatible' : 'station-card-incompatible'
              }

              return (
                <div 
                  key={station.id} 
                  className={`balancer-node-card ${compatibilityClass}`}
                  onClick={() => handleStationClick(station.id)}
                >
                  <Card style={{ margin: 0, height: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', justifySelf: 'start', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: '700', fontSize: '12px', fontFamily: 'var(--font-mono)' }}>{station.id}</span>
                        <Badge label={`Demand: ${demandLevel}`} variant={demandLevel === 'HIGH' ? 'danger' : demandLevel === 'MEDIUM' ? 'warning' : 'info'} />
                      </div>

                      <h4 style={{ fontSize: '13px', color: 'var(--text-primary)', margin: '4px 0 2px' }}>{station.name}</h4>

                      {assignedChem ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--accent-green)', fontWeight: '700' }}>
                          <ShieldCheck size={14} />
                          <span>{assignedChem.name}</span>
                        </div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '11px', color: 'var(--text-muted)' }}>
                          <ShieldAlert size={14} />
                          <span>NONE — needs assignment</span>
                        </div>
                      )}
                      
                      <span style={{ fontSize: '10px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        Flow Demand: {station.chemicalDemand} L/h
                      </span>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChemicalBalancer
