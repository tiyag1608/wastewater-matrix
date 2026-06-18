import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import StatusIndicator from '../ui/StatusIndicator.jsx'
import { 
  Activity, 
  TrendingUp, 
  Wifi, 
  AlertOctagon, 
  AlertTriangle, 
  ListTodo, 
  Search, 
  Sliders, 
  FlaskConical, 
  Radio, 
  Zap, 
  Map, 
  Compass, 
  Flame,
  CheckCircle,
  Clock,
  ExternalLink
} from 'lucide-react'

// Helper to format leading zero
const padZero = (num) => String(num).padStart(2, '0')

// Format digital time (HH:MM:SS)
const formatTime = (date) => {
  return `${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`
}

// Format digital date (DD MMM YYYY)
const formatDate = (date) => {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  return `${padZero(date.getDate())} ${months[date.getMonth()]} ${date.getFullYear()}`
}

function DashboardOverview() {
  const [time, setTime] = useState(new Date())
  const [flowRate, setFlowRate] = useState(2847)
  const logContainerRef = useRef(null)

  // Live clock and flow jitter
  useEffect(() => {
    const clockTimer = setInterval(() => setTime(new Date()), 1000)
    
    const flowTimer = setInterval(() => {
      // Minor SCADA sensor flow rate jitter
      setFlowRate(prev => Math.floor(prev + (Math.random() * 6 - 3)))
    }, 1500)

    return () => {
      clearInterval(clockTimer)
      clearInterval(flowTimer)
    }
  }, [])

  // Alert State: starting with 3 active alerts as required
  const [alerts, setAlerts] = useState([
    { id: 'ALT-01', code: 'PR-OVR-01', desc: 'Pressure overflow in Sector Alpha-1', severity: 'CRITICAL', time: '14:25:00', type: 'critical' },
    { id: 'ALT-02', code: 'CHM-IMB-04', desc: 'Chemical imbalance detected in Tank-4', severity: 'WARNING', time: '14:18:12', type: 'warning' },
    { id: 'ALT-03', code: 'SEN-ERR-23', desc: 'Sensor SEN-2024-023 went offline', severity: 'WARNING', time: '14:10:05', type: 'warning' }
  ])

  // Activity Log State
  const [activityLog, setActivityLog] = useState([
    { id: 1, time: '14:32:15', msg: 'Valve V-07 set to CLOSED by OPR-001', type: 'info' },
    { id: 2, time: '14:28:40', msg: 'Sensor SEN-2024-023 went OFFLINE', type: 'critical' },
    { id: 3, time: '14:25:00', msg: 'CRITICAL ALERT: Pressure overflow in Sector Alpha-1', type: 'critical' },
    { id: 4, time: '14:18:12', msg: 'WARNING ALERT: Chemical imbalance detected in Tank-4', type: 'warning' },
    { id: 5, time: '14:15:00', msg: 'Sample SMP-041 processed successfully', type: 'success' },
    { id: 6, time: '14:10:05', msg: 'Sensor SEN-2024-023 went offline in Sector Epsilon-1', type: 'warning' },
    { id: 7, time: '14:05:00', msg: 'Dosing recipe #4 applied to Valve V-12', type: 'success' },
    { id: 8, time: '13:58:30', msg: 'Max-Heap priority queue resorted. SMP-042 moved to head', type: 'info' },
    { id: 9, time: '13:55:12', msg: 'Gravity drainage path optimization computed successfully', type: 'success' },
    { id: 10, time: '13:50:00', msg: 'Operator session initiated for console OPR-001', type: 'info' }
  ])

  // Auto scroll terminal log to top (most recent logs are prepended, so top is fine. If appended we scroll to bottom)
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = 0
    }
  }, [activityLog])

  // Handle alert acknowledgement
  const handleAcknowledgeAlert = (id) => {
    const alertToAck = alerts.find(a => a.id === id)
    if (!alertToAck) return

    // Remove from alerts
    setAlerts(prev => prev.filter(a => a.id !== id))

    // Prepend to activity log
    const now = new Date()
    const timeStr = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`
    setActivityLog(prev => [
      {
        id: Date.now(),
        time: timeStr,
        msg: `ALERT ACKNOWLEDGED: ${alertToAck.desc} [${alertToAck.id}] by Operator`,
        type: 'success'
      },
      ...prev
    ])
  }

  // Periodic random live SCADA events to make dashboard look completely dynamic
  useEffect(() => {
    const randomEventTimer = setInterval(() => {
      const now = new Date()
      const timeStr = `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`
      
      const events = [
        { msg: 'System check: all pipelines flowing nominal', type: 'info' },
        { msg: 'Temperature sensor on Pump Station 4: 42.5°C (Within threshold)', type: 'info' },
        { msg: 'Daily chemical stock inventory sync complete', type: 'success' },
        { msg: 'Minor telemetry jitter resolved in transceiver TX-502', type: 'info' },
        { msg: 'Backwash cycle completed for filter bed F-3', type: 'success' },
        { msg: 'Telemetry sync with Sector Delta: 12/12 transceivers active', type: 'success' },
        { msg: 'Sensor SEN-2024-012 recalibrated (+0.02 deviation)', type: 'info' },
        { msg: 'Gravity route re-verified. Latency: 4ms', type: 'info' },
        { msg: 'Valve V-02 throttle set to 85% by flow balancer', type: 'info' },
      ]

      const randomEvent = events[Math.floor(Math.random() * events.length)]
      setActivityLog(prev => [
        {
          id: Date.now(),
          time: timeStr,
          msg: randomEvent.msg,
          type: randomEvent.type
        },
        ...prev
      ])
    }, 25000) // Every 25 seconds

    return () => clearInterval(randomEventTimer)
  }, [])

  // Derived system states based on active alerts
  const isSensorAlertActive = alerts.some(a => a.id === 'ALT-03')
  const isChemicalAlertActive = alerts.some(a => a.id === 'ALT-02')
  const isPressureAlertActive = alerts.some(a => a.id === 'ALT-01')

  const sensorsCountText = isSensorAlertActive ? '45/50' : '50/50'
  const sensorsSubText = isSensorAlertActive ? '⚠️ 5 offline' : '✅ All online'
  const activeAlertsCount = alerts.length

  // Details for 8 modules with reactive statuses based on alerts state
  const modules = [
    {
      id: 'chemical-search',
      title: 'Chemical Search',
      icon: <Search size={16} />,
      status: 'OPERATIONAL',
      variant: 'active',
      desc: '47 chemicals indexed',
      path: '/console/search',
      glow: 'cyan'
    },
    {
      id: 'valve-control',
      title: 'Valve Control',
      icon: <Sliders size={16} />,
      status: 'OPERATIONAL',
      variant: 'active',
      desc: '8 Actuators Online',
      path: '/console/valve-control',
      glow: 'yellow'
    },
    {
      id: 'sample-queue',
      title: 'Sample Queue',
      icon: <FlaskConical size={16} />,
      status: 'OPERATIONAL',
      variant: 'active',
      desc: 'Stack depth: 3 | Next: SMP-042',
      path: '/console/sample-queue',
      glow: 'red'
    },
    {
      id: 'sensor-checker',
      title: 'Sensor Checker',
      icon: <Radio size={16} />,
      status: isSensorAlertActive ? 'WARNING' : 'OPERATIONAL',
      variant: isSensorAlertActive ? 'warning' : 'active',
      desc: `${sensorsCountText} Transceivers Active`,
      path: '/console/sensor-check',
      glow: 'green'
    },
    {
      id: 'overflow-sorter',
      title: 'Overflow Sorter',
      icon: <Zap size={16} />,
      status: isPressureAlertActive ? 'CRITICAL' : 'OPERATIONAL',
      variant: isPressureAlertActive ? 'danger' : 'active',
      desc: '12 Stations Monitored',
      path: '/console/overflow',
      glow: 'yellow'
    },
    {
      id: 'pipe-map',
      title: 'Pipe Map Hub',
      icon: <Map size={16} />,
      status: 'OPERATIONAL',
      variant: 'active',
      desc: '10 Nodes Active',
      path: '/console/pipe-map',
      glow: 'cyan'
    },
    {
      id: 'gravity-planner',
      title: 'Gravity Planner',
      icon: <Compass size={16} />,
      status: 'OPERATIONAL',
      variant: 'active',
      desc: 'Dijkstra Route: Active',
      path: '/console/gravity',
      glow: 'green'
    },
    {
      id: 'chemical-balancer',
      title: 'Chem Balancer',
      icon: <Flame size={16} />,
      status: isChemicalAlertActive ? 'WARNING' : 'OPERATIONAL',
      variant: isChemicalAlertActive ? 'warning' : 'active',
      desc: '6 Dosing Recipes',
      path: '/console/balancer',
      glow: 'yellow'
    }
  ]

  return (
    <>
      <style>{`
        /* Title and clock layout */
        .scada-overview-title-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid var(--border-color);
          padding-bottom: var(--space-4);
          margin-bottom: var(--space-4);
        }
        
        @media (max-width: 768px) {
          .scada-overview-title-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-3);
          }
        }
        
        .digital-clock-panel {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 8px var(--space-4);
          text-align: right;
          font-family: var(--font-mono);
          box-shadow: var(--shadow-card);
          min-width: 180px;
        }
        
        .clock-label {
          font-size: 8px;
          color: var(--text-muted);
          letter-spacing: 0.15em;
          font-weight: 700;
          margin-bottom: 2px;
          text-transform: uppercase;
        }
        
        .clock-time {
          font-size: 20px;
          color: var(--accent-cyan);
          font-weight: 700;
          line-height: 1.1;
        }
        
        .clock-date {
          font-size: 10px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        /* Top stat cards styling */
        .stat-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: var(--space-5);
          margin-bottom: var(--space-5);
        }

        .stat-card-title-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-family: var(--font-display);
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-card-num {
          font-family: var(--font-display);
          font-size: 30px;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: var(--space-2) 0;
          color: var(--text-primary);
        }

        .stat-card-subtext {
          font-size: 11px;
          color: var(--text-secondary);
          font-family: var(--font-mono);
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .stat-pulse-red {
          animation: text-pulse-critical 1s infinite ease-in-out;
          color: var(--accent-red);
        }

        @keyframes text-pulse-critical {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.6;
          }
        }

        /* Middle Grid 4x2 Cards */
        .modules-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-5);
          margin-bottom: var(--space-6);
        }

        @media (max-width: 1200px) {
          .modules-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .modules-grid {
            grid-template-columns: 1fr;
          }
        }

        .feature-status-card {
          min-height: 155px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all var(--transition-normal);
          border: 1px solid var(--border-color);
          position: relative;
        }

        .feature-status-card:hover {
          transform: translateY(-5px);
          border-color: var(--accent-cyan) !important;
          box-shadow: var(--shadow-glow-cyan) !important;
        }

        .module-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          flex: 1;
        }

        .module-desc {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--text-secondary);
          margin: 12px 0;
          line-height: 1.4;
        }

        .module-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
        }

        /* Bottom activity & alerts panel split */
        .bottom-panel-grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: var(--space-5);
        }

        @media (max-width: 992px) {
          .bottom-panel-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Monospace Terminal styles */
        .terminal-viewport {
          background-color: #05080e;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-4);
          font-family: var(--font-mono);
          font-size: 11px;
          line-height: 1.6;
          height: 270px;
          overflow-y: auto;
          box-shadow: inset 0 0 12px rgba(0, 0, 0, 0.9);
          border-left: 2px solid var(--border-color);
        }

        .terminal-viewport::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-viewport::-webkit-scrollbar-track {
          background: #03050a;
        }
        .terminal-viewport::-webkit-scrollbar-thumb {
          background: var(--border-color);
          border-radius: var(--radius-sm);
        }
        .terminal-viewport::-webkit-scrollbar-thumb:hover {
          background: var(--accent-cyan);
        }

        .terminal-line {
          margin-bottom: 6px;
          display: flex;
          gap: 10px;
          border-bottom: 1px solid rgba(30, 58, 95, 0.15);
          padding-bottom: 4px;
        }

        .terminal-timestamp {
          color: var(--text-muted);
          flex-shrink: 0;
        }

        .terminal-content {
          color: var(--text-primary);
          word-break: break-all;
        }

        .terminal-type-info .terminal-content {
          color: #a5f3fc;
        }
        
        .terminal-type-success .terminal-content {
          color: var(--accent-green);
        }

        .terminal-type-warning .terminal-content {
          color: var(--accent-yellow);
        }

        .terminal-type-critical .terminal-content {
          color: var(--accent-red);
          text-shadow: 0 0 3px rgba(255, 77, 77, 0.3);
        }

        /* Alerts list styling */
        .alerts-viewport {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          height: 270px;
          overflow-y: auto;
          padding-right: 4px;
        }

        .alerts-viewport::-webkit-scrollbar {
          width: 4px;
        }

        .alert-item-card {
          background-color: rgba(17, 24, 39, 0.6);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px var(--space-4);
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all var(--transition-fast);
        }

        .alert-item-card:hover {
          background-color: rgba(17, 24, 39, 0.9);
        }

        .alert-item-critical {
          border-left: 3px solid var(--accent-red);
          box-shadow: inset 3px 0 10px rgba(255, 77, 77, 0.05);
        }

        .alert-item-warning {
          border-left: 3px solid var(--accent-yellow);
          box-shadow: inset 3px 0 10px rgba(255, 215, 0, 0.03);
        }

        .alert-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .alert-code-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .alert-code {
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.05em;
        }

        .alert-code-critical {
          color: var(--accent-red);
        }

        .alert-code-warning {
          color: var(--accent-yellow);
        }

        .alert-desc {
          font-size: 11px;
          color: var(--text-primary);
          font-family: var(--font-body);
        }

        .alert-time {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted);
        }

        .alert-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          border: 1px dashed var(--border-color);
          border-radius: var(--radius-sm);
          background-color: rgba(0, 255, 136, 0.02);
          padding: var(--space-4);
          text-align: center;
        }

        .alert-empty-text {
          font-family: var(--font-display);
          font-size: 13px;
          font-weight: 700;
          color: var(--accent-green);
          margin-top: 8px;
        }
        
        .alert-empty-sub {
          font-size: 11px;
          color: var(--text-secondary);
          margin-top: 2px;
        }
      `}</style>

      {/* Header Title + Digital Clock */}
      <div className="scada-overview-title-bar">
        <div>
          <h1 className="page-title" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
            SYSTEM COMMAND MATRIX
          </h1>
          <p className="page-subtitle">Central Wastewater Treatment Grid SCADA Matrix</p>
        </div>

        <div className="digital-clock-panel">
          <div className="clock-label">CONSOLE EVENT TIME</div>
          <div className="clock-time">{formatTime(time)}</div>
          <div className="clock-date">{formatDate(time)}</div>
        </div>
      </div>

      {/* Top Stat Cards (4) */}
      <div className="stat-grid">
        {/* 1. Total System Flow */}
        <Card glowColor="cyan">
          <div className="stat-card-title-row">
            <Activity size={12} className="text-cyan" />
            <span>Total System Flow</span>
          </div>
          <div className="stat-card-num" style={{ color: 'var(--accent-cyan)' }}>
            {flowRate.toLocaleString()} L/s
          </div>
          <div className="stat-card-subtext">
            <span style={{ color: 'var(--accent-green)', display: 'flex', alignItems: 'center', fontWeight: 'bold' }}>
              <TrendingUp size={12} style={{ marginRight: '2px' }} />
              +3.2%
            </span>
            <span style={{ color: 'var(--text-muted)' }}>vs hourly benchmark</span>
          </div>
        </Card>

        {/* 2. Sensors Online */}
        <Card glowColor={isSensorAlertActive ? 'yellow' : 'green'}>
          <div className="stat-card-title-row">
            <Wifi size={12} className={isSensorAlertActive ? 'text-yellow' : 'text-green'} />
            <span>Sensors Online</span>
          </div>
          <div className="stat-card-num">
            {sensorsCountText}
          </div>
          <div className="stat-card-subtext">
            <span style={{ color: isSensorAlertActive ? 'var(--accent-yellow)' : 'var(--accent-green)', fontWeight: 'bold' }}>
              {sensorsSubText}
            </span>
          </div>
        </Card>

        {/* 3. Active Alerts */}
        <Card glowColor={activeAlertsCount > 0 ? 'red' : 'green'}>
          <div className="stat-card-title-row">
            <AlertOctagon size={12} className={activeAlertsCount > 0 ? 'text-red' : 'text-green'} />
            <span>Active Alerts</span>
          </div>
          <div className={`stat-card-num ${activeAlertsCount > 0 ? 'stat-pulse-red' : ''}`} style={{ color: activeAlertsCount > 0 ? 'var(--accent-red)' : 'var(--accent-green)' }}>
            {activeAlertsCount}
          </div>
          <div className="stat-card-subtext">
            {activeAlertsCount > 0 ? (
              <span className="stat-pulse-red" style={{ fontWeight: 'bold' }}>Awaiting operator response</span>
            ) : (
              <span style={{ color: 'var(--accent-green)' }}>All telemetry parameters normal</span>
            )}
          </div>
        </Card>

        {/* 4. Samples in Queue */}
        <Card glowColor="cyan">
          <div className="stat-card-title-row">
            <ListTodo size={12} className="text-cyan" />
            <span>Samples in Queue</span>
          </div>
          <div className="stat-card-num">
            7 pending
          </div>
          <div className="stat-card-subtext">
            <span style={{ color: 'var(--text-secondary)' }}>Priority heap: SMP-042 head</span>
          </div>
        </Card>
      </div>

      {/* Section Subtitle */}
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '13px', letterSpacing: '0.08em', color: 'var(--text-secondary)', marginBottom: '16px' }}>
        SYSTEM MODULE STATUSES
      </h2>

      {/* Middle Grid (4x2 Grid of 8 Features) */}
      <div className="modules-grid">
        {modules.map((m) => (
          <Card 
            key={m.id}
            glowColor={m.glow}
            className="feature-status-card"
          >
            <div className="module-body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: `var(--accent-${m.glow})`, display: 'flex', alignItems: 'center' }}>
                    {m.icon}
                  </span>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {m.title}
                  </span>
                </div>
                <Badge label={m.status} variant={m.variant} />
              </div>

              <p className="module-desc">
                {m.desc}
              </p>

              <div className="module-footer">
                <span style={{ fontSize: '9px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  PORT: {m.path}
                </span>
                
                <Link to={m.path} style={{ textDecoration: 'none' }}>
                  <Button variant="ghost" size="sm" style={{ padding: '4px 10px', fontSize: '9px' }}>
                    Open <ExternalLink size={10} style={{ marginLeft: '4px' }} />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Bottom Row - Activity Log & Alerts Panel */}
      <div className="bottom-panel-grid">
        {/* Activity Log */}
        <Card title="SCADA SYSTEM CONSOLE" icon={<Activity size={14} className="text-cyan" />}>
          <div className="terminal-viewport" ref={logContainerRef}>
            {activityLog.map((log) => (
              <div key={log.id} className={`terminal-line terminal-type-${log.type}`}>
                <span className="terminal-timestamp">[{log.time}]</span>
                <span className="terminal-content">{log.msg}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Alerts Panel */}
        <Card title="CRITICAL ALERTS DISPATCH" icon={<AlertOctagon size={14} className={activeAlertsCount > 0 ? 'text-red stat-pulse-red' : 'text-green'} />}>
          <div className="alerts-viewport">
            {alerts.length > 0 ? (
              alerts.map((alert) => (
                <div key={alert.id} className={`alert-item-card alert-item-${alert.type}`}>
                  <div className="alert-meta">
                    <div className="alert-code-row">
                      <span className={`alert-code alert-code-${alert.type}`}>
                        {alert.code}
                      </span>
                      <Badge label={alert.severity} variant={alert.type === 'critical' ? 'danger' : 'warning'} />
                    </div>
                    <span className="alert-desc">{alert.desc}</span>
                    <span className="alert-time">Triggered at {alert.time}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => handleAcknowledgeAlert(alert.id)}
                    style={{ 
                      borderColor: alert.type === 'critical' ? 'var(--accent-red)' : 'var(--accent-yellow)',
                      color: alert.type === 'critical' ? 'var(--accent-red)' : 'var(--accent-yellow)',
                      padding: '4px var(--space-2)',
                      fontSize: '9px'
                    }}
                  >
                    Acknowledge
                  </Button>
                </div>
              ))
            ) : (
              <div className="alert-empty">
                <CheckCircle size={32} style={{ color: 'var(--accent-green)' }} />
                <div className="alert-empty-text">ALL SYSTEMS OPERATIONAL</div>
                <div className="alert-empty-sub">No outstanding dispatch alerts. Grid parameters normal.</div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </>
  )
}

export default DashboardOverview
