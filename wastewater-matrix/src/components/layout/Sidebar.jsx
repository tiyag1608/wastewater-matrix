import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const menuItems = [
    { path: '/console/search', label: 'Chemical Search', icon: '🔍' },
    { path: '/console/valve-control', label: 'Valve Control', icon: '🔧' },
    { path: '/console/sample-queue', label: 'Sample Queue', icon: '🧪' },
    { path: '/console/sensor-check', label: 'Sensor Checker', icon: '📡' },
    { path: '/console/overflow', label: 'Overflow Sorter', icon: '⚠️' },
    { path: '/console/pipe-map', label: 'Pipe Map Hub', icon: '🗺️' },
    { path: '/console/gravity', label: 'Gravity Planner', icon: '🌊' },
    { path: '/console/balancer', label: 'Chem Balancer', icon: '⚗️' },
  ]

  return (
    <>
      <style>{`
        .scada-sidebar {
          position: fixed;
          top: 0;
          bottom: 0;
          left: 0;
          width: 240px;
          background-color: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          z-index: 100;
          box-shadow: 1px 0 3px rgba(0, 0, 0, 0.02);
        }

        .scada-sidebar-header {
          padding: var(--space-5) var(--space-4);
          border-bottom: 1px solid var(--border-color);
          text-align: center;
        }

        .scada-sidebar-logo {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 900;
          color: var(--accent-cyan);
          letter-spacing: 0.08em;
          margin-bottom: var(--space-1);
        }

        .scada-sidebar-sub {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .scada-sidebar-nav {
          flex: 1;
          padding: var(--space-3) var(--space-2);
          display: flex;
          flex-direction: column;
          gap: var(--space-1);
          overflow-y: auto;
        }

        .scada-nav-item {
          display: flex;
          align-items: center;
          gap: var(--space-3);
          padding: 10px var(--space-4);
          color: var(--text-secondary);
          text-decoration: none;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-left: 3px solid transparent;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .scada-nav-item:hover {
          color: var(--accent-cyan);
          background-color: rgba(0, 212, 255, 0.03);
          border-left-color: var(--border-color);
        }

        .scada-nav-item.active {
          color: var(--accent-cyan);
          background-color: rgba(2, 132, 199, 0.05);
          border-left-color: var(--accent-cyan);
        }

        .scada-nav-icon {
          font-size: 14px;
        }

        .scada-sidebar-footer {
          padding: var(--space-4);
          border-top: 1px solid var(--border-color);
          background-color: var(--bg-primary);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .status-indicator-row {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: var(--accent-green);
        }

        .status-text {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-green);
          letter-spacing: 0.05em;
        }

        .time-display {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--text-secondary);
        }
      `}</style>

      <aside className="scada-sidebar">
        <div className="scada-sidebar-header">
          <div className="scada-sidebar-logo">WASTEWATER MATRIX</div>
          <div className="scada-sidebar-sub">City Control System v2.4</div>
        </div>

        <nav className="scada-sidebar-nav">
          <NavLink 
            to="/console" 
            end 
            className={({ isActive }) => `scada-nav-item${isActive ? ' active' : ''}`}
          >
            <span className="scada-nav-icon">📊</span>
            <span>Dashboard Home</span>
          </NavLink>
          {menuItems.map((item) => (
            <NavLink 
              key={item.path} 
              to={item.path} 
              className={({ isActive }) => `scada-nav-item${isActive ? ' active' : ''}`}
            >
              <span className="scada-nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="scada-sidebar-footer">
          <div className="status-indicator-row">
            <div className="status-dot" />
            <span className="status-text">SYSTEM ONLINE</span>
          </div>
          <div className="time-display">
            {time.toLocaleDateString()} {time.toLocaleTimeString()}
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
