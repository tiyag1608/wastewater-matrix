import React, { useState, useMemo } from 'react'
import { pipelineGraph } from '../../data/mockData.js'
import { buildAdjacencyList } from '../../utils/graphUtils.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import StatusIndicator from '../ui/StatusIndicator.jsx'
import { Compass, Navigation, RefreshCw, AlertTriangle, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useToast } from '../ui/Toast.jsx'

/* ==========================================================================
   ALGORITHM DESIGN: BREADTH-FIRST SEARCH (BFS) PATH PLANNER
   - An adjacency list is constructed from graph nodes and edges.
   - A BFS queue is initialized with: `queue = [[startId, [startId]]]`
   - While the queue is not empty, dequeue [node, path].
   - If node === end, the shortest unweighted route path is returned.
   - Otherwise, iterate through neighbors, pushing unvisited elements to queue.
   - Consecutive path nodes are matched to highlight SVG lines.
   ========================================================================== */

const bfsPathfind = (adjList, start, end) => {
  const queue = [[start, [start]]]
  const visited = new Set([start])

  while (queue.length > 0) {
    const [current, path] = queue.shift()
    if (current === end) {
      return path
    }

    const neighbors = adjList.get(current) || []
    for (const edge of neighbors) {
      if (!visited.has(edge.to)) {
        visited.add(edge.to)
        queue.push([edge.to, [...path, edge.to]])
      }
    }
  }
  return null // No connected path found
}

function GravityPlanner() {
  const [fromNode, setFromNode] = useState('NODE-INLET')
  const [toNode, setToNode] = useState('NODE-OUTLET')
  const [activePath, setActivePath] = useState(null)
  const [pathCalculated, setPathCalculated] = useState(false)
  const { showToast } = useToast()

  // Build Adjacency List once
  const adjList = useMemo(() => {
    return buildAdjacencyList(pipelineGraph.nodes, pipelineGraph.edges)
  }, [])

  const handleFindPath = () => {
    if (fromNode === toNode) {
      showToast("Origin and destination stations cannot be the same node.", "warning")
      return
    }

    const path = bfsPathfind(adjList, fromNode, toNode)
    setActivePath(path)
    setPathCalculated(true)
  }

  const handleReset = () => {
    setActivePath(null)
    setPathCalculated(false)
    setFromNode('NODE-INLET')
    setToNode('NODE-OUTLET')
  }

  // Calculate detailed metrics for the found path
  const pathMetrics = useMemo(() => {
    if (!activePath || activePath.length <= 1) return null

    let totalDist = 0
    let gravityCount = 0
    let pressurizedCount = 0
    const segments = []

    for (let i = 0; i < activePath.length - 1; i++) {
      const u = activePath[i]
      const v = activePath[i+1]
      
      const edge = pipelineGraph.edges.find(e => e.from === u && e.to === v)
      if (edge) {
        totalDist += edge.distance
        if (edge.type === 'gravity') {
          gravityCount++
        } else {
          pressurizedCount++
        }
        segments.push({
          from: u,
          to: v,
          distance: edge.distance,
          type: edge.type,
          elevation: edge.elevation
        })
      }
    }

    const totalEdges = gravityCount + pressurizedCount
    const gravitySavings = totalEdges > 0 ? ((gravityCount / totalEdges) * 100).toFixed(0) : 0

    return {
      totalDistKm: (totalDist / 1000).toFixed(2), // Distance in km (2 decimal places)
      hops: totalEdges,
      gravitySavings,
      segments
    }
  }, [activePath])

  return (
    <>
      <style>{`
        .scada-planner-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-planner-layout {
            flex-direction: column;
          }
        }

        /* Config Card form */
        .planner-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .planner-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* SVG Map Viewport */
        .svg-planner-viewport {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-5);
          position: relative;
          overflow: hidden;
          background-image: 
            linear-gradient(rgba(30, 58, 95, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 95, 0.08) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .planner-svg {
          width: 100%;
          min-width: 960px;
          height: 300px;
        }

        /* Animated flowing dash offset for path lines */
        .scada-flowing-edge {
          stroke: var(--accent-cyan) !important;
          stroke-width: 4px !important;
          stroke-dasharray: 8, 4;
          animation: scada-flow 1.2s linear infinite;
        }

        @keyframes scada-flow {
          to {
            stroke-dashoffset: -24;
          }
        }

        /* Dimming styling for unselected map elements */
        .dimmed-map-element {
          opacity: 0.25;
          transition: opacity var(--transition-normal);
        }

        /* Pulsing dot highlight on path nodes */
        .path-node-glowing {
          stroke: #ffffff !important;
          stroke-width: 3.5px !important;
          filter: drop-shadow(0 0 8px var(--accent-cyan));
        }

        /* Steps row summary list */
        .path-step-chain {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-2) var(--space-3);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: var(--space-4);
          border-radius: var(--radius-sm);
          margin-top: var(--space-4);
        }

        .step-pill {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-2) var(--space-3);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-label {
          color: var(--text-primary);
        }

        .step-id {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }

        .result-box {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
      `}</style>

      <div className="scada-planner-layout animate-slide-in">
        {/* Planner controls (Left panel) */}
        <div style={{ flex: 1.1, display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', minWidth: '280px' }}>
          <Card title="Flow Planner Terminal" icon={<Compass size={14} />}>
            <div className="planner-form">
              <div className="planner-field">
                <label>Origin Intake Hub</label>
                <select value={fromNode} onChange={(e) => setFromNode(e.target.value)}>
                  {pipelineGraph.nodes.map(node => (
                    <option key={node.id} value={node.id}>{node.name} ({node.id})</option>
                  ))}
                </select>
              </div>

              <div className="planner-field">
                <label>Destination Outfall Hub</label>
                <select value={toNode} onChange={(e) => setToNode(e.target.value)}>
                  {pipelineGraph.nodes.map(node => (
                    <option key={node.id} value={node.id}>{node.name} ({node.id})</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                <Button 
                  variant="primary" 
                  onClick={handleFindPath} 
                  style={{ flex: 1 }}
                  disabled={fromNode === toNode}
                >
                  Find Path
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={handleReset} 
                  style={{ borderColor: 'var(--text-muted)', color: 'var(--text-secondary)' }}
                >
                  Reset
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Visual Map Canvas & Results (Right side) */}
        <div style={{ flex: 3, width: '100%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <Card title="Topological Route Trace">
            <div className="svg-planner-viewport">
              <svg viewBox="0 0 1020 300" className="planner-svg">
                {/* Edges */}
                {pipelineGraph.edges.map((edge, idx) => {
                  const fromNode = pipelineGraph.nodes.find(n => n.id === edge.from)
                  const toNode = pipelineGraph.nodes.find(n => n.id === edge.to)
                  if (!fromNode || !toNode) return null

                  // Check if this edge is consecutive in the path
                  let isOnPath = false
                  if (activePath) {
                    for (let i = 0; i < activePath.length - 1; i++) {
                      if (activePath[i] === edge.from && activePath[i+1] === edge.to) {
                        isOnPath = true
                        break
                      }
                    }
                  }

                  const isDimmed = pathCalculated && !isOnPath
                  const lineClass = isOnPath ? 'scada-flowing-edge' : isDimmed ? 'dimmed-map-element' : ''

                  return (
                    <line
                      key={`edge-${idx}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke={isOnPath ? 'var(--accent-cyan)' : 'rgba(30, 58, 95, 0.4)'}
                      strokeWidth={isOnPath ? '4' : '2'}
                      strokeDasharray={edge.type === 'gravity' ? '5,5' : 'none'}
                      className={lineClass}
                      style={{ transition: 'opacity 0.3s' }}
                    />
                  )
                })}

                {/* Nodes */}
                {pipelineGraph.nodes.map(node => {
                  const isOnPath = activePath && activePath.includes(node.id)
                  const isDimmed = pathCalculated && !isOnPath
                  const nodeClass = isOnPath ? 'path-node-glowing' : isDimmed ? 'dimmed-map-element' : ''

                  let color = '#3b82f6'
                  if (node.type === 'treatment') color = 'var(--accent-purple)'
                  if (node.type === 'junction') color = 'var(--accent-cyan)'
                  if (node.type === 'outlet') color = 'var(--accent-green)'

                  return (
                    <g 
                      key={node.id}
                      transform={`translate(${node.x}, ${node.y})`}
                      className={nodeClass}
                      style={{ transition: 'opacity 0.3s' }}
                    >
                      {/* Glow rings */}
                      {isOnPath && (
                        <circle
                          r="28"
                          fill="none"
                          stroke="var(--accent-cyan)"
                          strokeWidth="2"
                          opacity="0.4"
                          style={{ animation: 'pulse-glow 1.5s infinite ease-in-out', '--status-color': 'var(--accent-cyan)' }}
                        />
                      )}
                      <circle
                        r="18"
                        fill={color}
                        stroke={isOnPath ? '#ffffff' : 'var(--bg-secondary)'}
                        strokeWidth={isOnPath ? '3.5' : '1.5'}
                      />
                      <text
                        y="30"
                        fill={isOnPath ? 'var(--accent-cyan)' : 'var(--text-primary)'}
                        fontSize="9px"
                        fontWeight={isOnPath ? 'bold' : 'normal'}
                        fontFamily="var(--font-display)"
                        textAnchor="middle"
                      >
                        {node.name}
                      </text>
                      <text
                        y="4"
                        fill="#0a0e17"
                        fontSize="8px"
                        fontWeight="900"
                        fontFamily="var(--font-mono)"
                        textAnchor="middle"
                      >
                        {node.id.replace('NODE-', '')}
                      </text>
                    </g>
                  )
                })}
              </svg>
            </div>

            {/* Path Results Panel */}
            {pathCalculated && pathMetrics && (
              <div style={{ marginTop: '20px' }} className="animate-slide-in">
                <div className="results-grid">
                  <div className="result-box">
                    <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>CUMULATIVE LENGTH</span>
                    <span style={{ fontSize: '15px', color: 'var(--accent-cyan)', fontWeight: '800', fontFamily: 'var(--font-mono)' }}>
                      {pathMetrics.totalDistKm} km
                    </span>
                  </div>
                  <div className="result-box">
                    <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>CONDUIT HOPS</span>
                    <span style={{ fontSize: '15px', color: 'var(--text-primary)', fontWeight: '800', fontFamily: 'var(--font-mono)' }}>
                      {pathMetrics.hops} sections
                    </span>
                  </div>
                  <div className="result-box">
                    <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>GRAVITY DRAINAGE SAVINGS</span>
                    <span style={{ fontSize: '15px', color: 'var(--accent-green)', fontWeight: '800', fontFamily: 'var(--font-mono)' }}>
                      {pathMetrics.gravitySavings}% of path
                    </span>
                  </div>
                </div>

                <h4 style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-display)', marginBottom: '8px', textTransform: 'uppercase' }}>
                  Step-by-Step Drainage Ledger
                </h4>
                <div className="path-step-chain">
                  {activePath.map((nodeId, idx) => {
                    const nodeObj = pipelineGraph.nodes.find(n => n.id === nodeId)
                    return (
                      <React.Fragment key={nodeId}>
                        <div className="step-pill">
                          <span className="step-label">{nodeObj ? nodeObj.name : nodeId}</span>
                          <span className="step-id">{nodeId}</span>
                        </div>
                        {idx < activePath.length - 1 && (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ArrowRight size={14} style={{ color: 'var(--accent-cyan)' }} />
                          </div>
                        )}
                      </React.Fragment>
                    )
                  })}
                </div>
              </div>
            )}

            {/* No Path State */}
            {pathCalculated && !activePath && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '36px var(--space-4)', border: '1px dashed var(--border-color)', borderRadius: 'var(--radius-sm)', marginTop: '20px' }}>
                <AlertTriangle size={36} style={{ color: 'var(--accent-red)', marginBottom: '12px' }} />
                <h4 style={{ color: 'var(--accent-red)', fontFamily: 'var(--font-display)' }}>Discharge Path Offline</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '12px', marginTop: '4px', textAlign: 'center', maxWidth: '400px' }}>
                  No connected path found between these stations under current topological configurations.
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  )
}

export default GravityPlanner
