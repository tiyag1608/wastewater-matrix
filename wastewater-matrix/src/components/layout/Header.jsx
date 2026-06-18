import React, { useState, useEffect } from 'react'

function Header({ pageTitle }) {
  // Let's add slight variations to the stats to make them feel "live"
  const [flow, setFlow] = useState(2847)

  useEffect(() => {
    const timer = setInterval(() => {
      // Simulate minor sensor flow jitter
      setFlow(prev => Math.floor(prev + (Math.random() * 6 - 3)))
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <>
      <style>{`
        .scada-header {
          position: fixed;
          top: 0;
          right: 0;
          left: 240px;
          height: var(--header-height);
          background-color: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--space-6);
          z-index: 90;
        }

        @media (max-width: 768px) {
          .scada-header {
            left: 0;
            padding: 0 var(--space-4);
          }
        }

        .scada-header-left {
          display: flex;
          align-items: center;
        }

        .scada-header-title {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 800;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .scada-header-center {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }

        @media (max-width: 992px) {
          .scada-header-center {
            display: none;
          }
        }

        .header-stat-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 4px var(--space-3);
          min-width: 130px;
        }

        .header-stat-label {
          font-family: var(--font-display);
          font-size: 8px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 2px;
        }

        .header-stat-val {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--accent-cyan);
        }

        .scada-header-right {
          display: flex;
          align-items: center;
          gap: var(--space-4);
        }

        .operator-badge {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 800;
          padding: 4px 8px;
          border-radius: var(--radius-sm);
          letter-spacing: 0.05em;
        }

        .alert-ping-container {
          display: flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(255, 77, 77, 0.05);
          border: 1px solid rgba(255, 77, 77, 0.2);
          padding: 4px var(--space-2);
          border-radius: var(--radius-sm);
        }

        .alert-ping-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: var(--accent-red);
          animation: blink 0.8s infinite;
        }

        .alert-ping-text {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 700;
          color: var(--accent-red);
        }
      `}</style>

      <header className="scada-header">
        <div className="scada-header-left">
          <span className="scada-header-title">{pageTitle || 'Dashboard'}</span>
        </div>

        <div className="scada-header-center">
          <div className="header-stat-box">
            <span className="header-stat-label">System Discharge Flow</span>
            <span className="header-stat-val text-cyan">{flow.toLocaleString()} L/s</span>
          </div>
          <div className="header-stat-box">
            <span className="header-stat-label">Active Transceivers</span>
            <span className="header-stat-val text-green">47 / 50</span>
          </div>
          <div className="header-stat-box">
            <span className="header-stat-label">Active Alerts</span>
            <span className="header-stat-val text-red">2 CRITICAL</span>
          </div>
        </div>

        <div className="scada-header-right">
          <div className="alert-ping-container">
            <div className="alert-ping-dot" />
            <span className="alert-ping-text">ALERTS</span>
          </div>
          <span className="operator-badge">OPR-001</span>
        </div>
      </header>
    </>
  )
}

export default Header
