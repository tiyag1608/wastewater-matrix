import React, { useState, useMemo } from 'react'
import { pipelineGraph } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import StatusIndicator from '../ui/StatusIndicator.jsx'
import { Cpu, HelpCircle, Network, ArrowRight } from 'lucide-react'

/* ==========================================================================
   ALGORITHM DESIGN: GRAPH ADJACENCY LIST RECONSTRUCTION
   - An adjacency list map is built dynamically from the pipeline graph edges:
     `adjacencyList[node.id] = [connected neighbor node ids]`
   - Direct connections are located instantly by scanning nodes:
     `edge.from === selectedNode || edge.to === selectedNode`
   - Yields high-performance highlighted glows on adjacent pipeline vectors.
   ========================================================================== */

function PipeMapHub() {
  const [selectedNode, setSelectedNode] = useState('NODE-INLET')
  const [hoveredEdge, setHoveredEdge] = useState(null)
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 })

  // 1. Build Adjacency List Map
  const adjacencyList = useMemo(() => {
    const list = {}
    pipelineGraph.nodes.forEach(node => {
      list[node.id] = []
    })

    pipelineGraph.edges.forEach(edge => {
      // Directed flow: from -> to
      if (list[edge.from]) {
        list[edge.from].push({
          to: edge.to,
          distance: edge.distance,
          elevation: edge.elevation,
          diameter: edge.diameter,
          type: edge.type
        })
      }
    })
    return list
  }, [])

  // 2. Calculate Graph Statistics
  const graphStats = useMemo(() => {
    const totalNodes = pipelineGraph.nodes.length
    const totalEdges = pipelineGraph.edges.length
    const gravityLines = pipelineGraph.edges.filter(e => e.type === 'gravity').length
    const pressurizedLines = pipelineGraph.edges.filter(e => e.type === 'pressurized').length
    return { totalNodes, totalEdges, gravityLines, pressurizedLines }
  }, [])

  // Details for currently selected node
  const selectedNodeObj = useMemo(() => {
    return pipelineGraph.nodes.find(n => n.id === selectedNode)
  }, [selectedNode])

  // Get list of direct neighbors for selected node
  const neighbors = useMemo(() => {
    if (!selectedNode) return []
    // Get direct outgoing neighbors
    const outgoing = adjacencyList[selectedNode] || []
    
    // Get incoming neighbors as well
    const incoming = pipelineGraph.edges
      .filter(e => e.to === selectedNode)
      .map(e => ({
        to: e.from,
        distance: e.distance,
        elevation: -e.elevation, // inverted elevation direction
        diameter: e.diameter,
        type: e.type,
        isIncoming: true
      }))

    return [...incoming, ...outgoing.map(o => ({ ...o, isIncoming: false }))]
  }, [adjacencyList, selectedNode])

  // Node type colors
  const getNodeColor = (type) => {
    switch (type) {
      case 'source':
        return '#3b82f6' // Blue
      case 'treatment':
        return 'var(--accent-purple)' // Purple
      case 'junction':
        return 'var(--accent-cyan)' // Cyan
      case 'outlet':
      default:
        return 'var(--accent-green)' // Green
    }
  }

  // Handle Edge Mouse Hover Tooltip coordinates
  const handleEdgeMouseMove = (e, edge) => {
    // Offset relative to the SVG container coordinates
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left + 15
    const y = e.clientY - rect.top + 15
    setTooltipPos({ x, y })
    setHoveredEdge(edge)
  }

  return (
    <>
      <style>{`
        .pipe-map-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .pipe-map-layout {
            flex-direction: column;
          }
        }

        /* Stats Bar */
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

        /* SVG Map Container */
        .svg-map-frame {
          position: relative;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-5);
          overflow: hidden;
          /* SCADA grid background pattern */
          background-image: 
            linear-gradient(rgba(30, 58, 95, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 95, 0.08) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .svg-container {
          width: 100%;
          min-width: 960px;
          height: 320px;
        }

        /* Glow effects for active pipelines */
        .glowing-edge {
          stroke: var(--accent-cyan) !important;
          stroke-width: 3.5px !important;
          filter: drop-shadow(0 0 5px var(--accent-cyan));
        }

        /* Hover Edge tooltip */
        .edge-tooltip {
          position: absolute;
          background-color: var(--bg-secondary);
          border: 1px solid var(--accent-cyan);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 10px;
          pointer-events: none;
          z-index: 10;
          box-shadow: var(--shadow-glow-cyan);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* Legend Container */
        .map-legend {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          margin-top: var(--space-4);
          padding-top: var(--space-3);
          border-top: 1px solid var(--border-color);
        }

        .legend-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--text-secondary);
        }

        .legend-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .legend-line {
          width: 30px;
          height: 2px;
        }

        /* Details sidebar */
        .node-details-sidebar {
          position: sticky;
          top: var(--header-height);
          flex: 1.2;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .neighbors-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          margin-top: var(--space-2);
        }

        .neighbor-row {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
      `}</style>

      <div className="scada-overflow-layout animate-slide-in">
        {/* Main Pipe Map (Left Side) */}
        <div style={{ flex: 3, width: '100%' }}>
          {/* Graph Stats */}
          <div className="scada-stats-bar">
            <span>NODES: <span className="text-cyan">{graphStats.totalNodes}</span></span>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <span>CONNECTIONS: <span className="text-cyan">{graphStats.totalEdges}</span></span>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <span>GRAVITY LINES: <span className="text-green">{graphStats.gravityLines}</span></span>
            <span style={{ color: 'var(--border-color)' }}>|</span>
            <span>PRESSURIZED LINES: <span className="text-yellow">{graphStats.pressurizedLines}</span></span>
          </div>

          {/* SVG Map Canvas */}
          <div className="svg-map-frame">
            {hoveredEdge && (
              <div 
                className="edge-tooltip"
                style={{ left: `${tooltipPos.x}px`, top: `${tooltipPos.y}px` }}
              >
                <span style={{ fontWeight: '800', color: 'var(--accent-cyan)' }}>CONDUIT AUDIT</span>
                <span>Distance: {hoveredEdge.distance}m</span>
                <span>Slope Elev: {hoveredEdge.elevation}m</span>
                <span>Diameter: Ø {hoveredEdge.diameter}mm</span>
                <span>Mode: {hoveredEdge.type.toUpperCase()}</span>
              </div>
            )}

            <svg viewBox="0 0 1020 300" className="svg-container">
              {/* Render Pipelines (Edges) */}
              {pipelineGraph.edges.map((edge, idx) => {
                const fromNode = pipelineGraph.nodes.find(n => n.id === edge.from)
                const toNode = pipelineGraph.nodes.find(n => n.id === edge.to)
                if (!fromNode || !toNode) return null

                // Determine if this pipe connects directly to selectedNode (glow)
                const isAdjacent = edge.from === selectedNode || edge.to === selectedNode

                return (
                  <line
                    key={`edge-${idx}`}
                    x1={fromNode.x}
                    y1={fromNode.y}
                    x2={toNode.x}
                    y2={toNode.y}
                    stroke={isAdjacent ? 'var(--accent-cyan)' : 'rgba(30, 58, 95, 0.4)'}
                    strokeWidth={isAdjacent ? '3.5' : '2'}
                    strokeDasharray={edge.type === 'gravity' ? '5,5' : 'none'}
                    className={isAdjacent ? 'glowing-edge' : ''}
                    style={{ transition: 'stroke 0.25s, stroke-width 0.25s', cursor: 'help' }}
                    onMouseMove={(e) => handleEdgeMouseMove(e, edge)}
                    onMouseLeave={() => setHoveredEdge(null)}
                  />
                )
              })}

              {/* Render Flow Direction Arrows */}
              {pipelineGraph.edges.map((edge, idx) => {
                const fromNode = pipelineGraph.nodes.find(n => n.id === edge.from)
                const toNode = pipelineGraph.nodes.find(n => n.id === edge.to)
                if (!fromNode || !toNode) return null

                const dx = toNode.x - fromNode.x
                const dy = toNode.y - fromNode.y
                const len = Math.sqrt(dx*dx + dy*dy)
                // Position arrow near middle of line
                const midX = fromNode.x + dx * 0.5
                const midY = fromNode.y + dy * 0.5
                const angle = Math.atan2(dy, dx) * (180 / Math.PI)

                return (
                  <polygon
                    key={`arrow-${idx}`}
                    points="0,-4 8,0 0,4"
                    fill={edge.from === selectedNode || edge.to === selectedNode ? 'var(--accent-cyan)' : 'var(--text-muted)'}
                    transform={`translate(${midX}, ${midY}) rotate(${angle})`}
                  />
                )
              })}

              {/* Render Station Hubs (Nodes) */}
              {pipelineGraph.nodes.map(node => {
                const isSelected = node.id === selectedNode
                const color = getNodeColor(node.type)

                return (
                  <g 
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => setSelectedNode(node.id)}
                    style={{ cursor: 'pointer' }}
                  >
                    {/* Glowing outer pulse for selected */}
                    {isSelected && (
                      <circle
                        r="34"
                        fill="none"
                        stroke="var(--accent-cyan)"
                        strokeWidth="1.5"
                        opacity="0.3"
                        style={{ animation: 'pulse-glow 1.5s infinite ease-in-out', '--status-color': 'var(--accent-cyan)' }}
                      />
                    )}
                    {/* Main Node circle */}
                    <circle
                      r={isSelected ? 28 : 20}
                      fill={color}
                      stroke={isSelected ? '#ffffff' : 'var(--bg-secondary)'}
                      strokeWidth={isSelected ? '3' : '1.5'}
                      style={{ transition: 'all 0.25s' }}
                    />
                    {/* Node Text Label inside or below circle */}
                    <text
                      y={isSelected ? '42' : '32'}
                      fill={isSelected ? 'var(--accent-cyan)' : 'var(--text-primary)'}
                      fontSize="9px"
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontFamily="var(--font-display)"
                      textAnchor="middle"
                    >
                      {node.name}
                    </text>
                    <text
                      y="4"
                      fill="#0a0e17"
                      fontSize="9px"
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

            {/* Map Legend */}
            <div className="map-legend">
              <div className="legend-group">
                <div className="legend-circle" style={{ backgroundColor: '#3b82f6' }} />
                <span>Source</span>
              </div>
              <div className="legend-group">
                <div className="legend-circle" style={{ backgroundColor: 'var(--accent-purple)' }} />
                <span>Treatment</span>
              </div>
              <div className="legend-group">
                <div className="legend-circle" style={{ backgroundColor: 'var(--accent-cyan)' }} />
                <span>Junction</span>
              </div>
              <div className="legend-group">
                <div className="legend-circle" style={{ backgroundColor: 'var(--accent-green)' }} />
                <span>Outlet</span>
              </div>
              <div className="legend-group">
                <div className="legend-line" style={{ borderTop: '2px dashed var(--accent-cyan)' }} />
                <span>Gravity Conduit</span>
              </div>
              <div className="legend-group">
                <div className="legend-line" style={{ borderTop: '2px solid var(--border-color)', backgroundColor: 'var(--accent-yellow)', height: '2px' }} />
                <span>Pressurized Line</span>
              </div>
            </div>
          </div>
        </div>

        {/* Node Details Sidebar Panel (Right Side) */}
        {selectedNodeObj && (
          <div className="node-details-sidebar">
            <Card title="Node Telemetry" icon={<Network size={14} />} glowColor="cyan">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                  <h3 style={{ fontSize: '15px', color: 'var(--text-primary)' }}>
                    {selectedNodeObj.name}
                  </h3>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '6px', alignItems: 'center' }}>
                    <Badge label={selectedNodeObj.type} variant="info" />
                    <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)' }}>
                      {selectedNodeObj.id}
                    </span>
                  </div>
                </div>

                {/* Status indicator */}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Operating Status</span>
                  <StatusIndicator status="online" label="ACTIVE" size="sm" />
                </div>

                {/* Flow directions */}
                <div>
                  <span style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', fontFamily: 'var(--font-display)' }}>
                    Pipeline Connections ({neighbors.length})
                  </span>
                  
                  <div className="neighbors-list">
                    {neighbors.map((neighbor, idx) => (
                      <div key={idx} className="neighbor-row">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <ArrowRight 
                            size={12} 
                            style={{ 
                              color: neighbor.isIncoming ? 'var(--text-muted)' : 'var(--accent-cyan)',
                              transform: neighbor.isIncoming ? 'rotate(180deg)' : 'none'
                            }} 
                          />
                          <span style={{ fontWeight: '600' }}>
                            {neighbor.to.replace('NODE-', '')}
                          </span>
                        </div>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '10px', fontFamily: 'var(--font-mono)' }}>
                          <span style={{ color: 'var(--text-muted)' }}>{neighbor.distance}m</span>
                          <Badge label={neighbor.type} variant={neighbor.type === 'gravity' ? 'active' : 'warning'} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>
    </>
  )
}

export default PipeMapHub
