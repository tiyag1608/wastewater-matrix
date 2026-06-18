import React, { useState, useMemo } from 'react'
import { sensorRegistry } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import { CheckCircle2, XCircle, AlertTriangle, Search, Activity, Clock } from 'lucide-react'
import { useToast } from '../ui/Toast.jsx'

/* ==========================================================================
   ALGORITHM DESIGN: O(1) HASHMAP / OBJECT INTEGRITY CHECKER
   - The master registry `sensorRegistry` is imported as a JavaScript object (HashMap).
   - Validation runs in constant time O(1) via direct key lookup:
     `const sensor = sensorRegistry[inputId]`
   - Matches are categorized into VALID (ACTIVE), FAULTY, or INVALID (not found).
   - Historical checks are tracked in a FIFO stack array capped at 5 entries.
   ========================================================================== */

function SensorChecker() {
  const [inputId, setInputId] = useState('')
  const [currentResult, setCurrentResult] = useState(null)
  const [recentChecks, setRecentChecks] = useState([])
  const [shake, setShake] = useState(false)
  const { showToast } = useToast()

  // Calculate dynamic statistics from the master HashMap
  const stats = useMemo(() => {
    const values = Object.values(sensorRegistry)
    const total = values.length
    const active = values.filter(s => s.status === 'ACTIVE').length
    const faulty = values.filter(s => s.status === 'FAULTY').length
    const inactive = values.filter(s => s.status === 'INACTIVE').length
    return { total, active, faulty, inactive }
  }, [])

  // Calculate elapsed minutes since last ping
  const getElapsedMinutes = (pingIso) => {
    if (!pingIso) return 0
    const diffMs = Date.now() - new Date(pingIso).getTime()
    const diffMins = Math.floor(diffMs / (60 * 1000))
    // Fallback adjustment for static simulated datetimes
    return diffMins > 0 ? diffMins : 2 // default to 2 mins if in the future/now
  }

  const runVerification = (searchKey) => {
    const formattedId = searchKey.trim().toUpperCase()
    if (!formattedId) return

    // O(1) Constant Time Lookup
    const sensor = sensorRegistry[formattedId]
    let result = null

    if (sensor) {
      if (sensor.status === 'FAULTY') {
        result = { id: formattedId, type: 'FAULTY', data: sensor }
        showToast(`Sensor [${formattedId}] checked: FAULTY`, 'warning')
      } else {
        result = { id: formattedId, type: 'VALID', data: sensor }
        showToast(`Sensor [${formattedId}] checked: VALID`, 'success')
      }
    } else {
      result = { id: formattedId, type: 'INVALID', data: null }
      showToast(`Sensor [${formattedId}] not found in registry`, 'error')
      // Trigger error shake animation
      setShake(true)
      const timer = setTimeout(() => setShake(false), 400)
    }

    setCurrentResult(result)

    // Add to Recent Checks (filter out duplicates first, limit to 5)
    setRecentChecks(prev => {
      const filtered = prev.filter(item => item.id !== formattedId)
      return [{ id: formattedId, type: result.type }, ...filtered].slice(0, 5)
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    runVerification(inputId)
  }

  const handleRecentClick = (id) => {
    setInputId(id)
    runVerification(id)
  }

  return (
    <>
      <style>{`
        .sensor-checker-viewport {
          display: flex;
          flex-direction: column;
          gap: var(--space-5);
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }

        /* Stats Row */
        .scada-stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: var(--space-3);
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-3) var(--space-4);
          text-align: center;
        }

        @media (max-width: 576px) {
          .scada-stats-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .stat-cell {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .stat-cell-lbl {
          font-family: var(--font-display);
          font-size: 8px;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-cell-val {
          font-family: var(--font-mono);
          font-size: 14px;
          font-weight: 800;
        }

        /* Large Search Input Group */
        .checker-input-group {
          display: flex;
          gap: var(--space-3);
          width: 100%;
        }

        .checker-input {
          flex: 1;
          height: 48px;
          padding: 0 var(--space-4);
          font-family: var(--font-mono);
          font-size: 16px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          outline: none;
          text-transform: uppercase;
          transition: all var(--transition-fast);
        }

        .checker-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-glow-cyan);
        }

        /* Verification cards */
        .verification-card {
          animation: slideDown var(--transition-normal) forwards;
          border-width: 1px;
          border-style: solid;
        }

        .verification-card-VALID {
          border-color: var(--accent-green);
          box-shadow: 0 0 15px rgba(0, 255, 136, 0.15);
        }

        .verification-card-FAULTY {
          border-color: var(--accent-yellow);
          box-shadow: 0 0 15px rgba(255, 215, 0, 0.15);
        }

        .verification-card-INVALID {
          border-color: var(--accent-red);
          box-shadow: 0 0 15px rgba(255, 77, 77, 0.15);
        }

        /* Shake animation for invalid */
        .shake-effect {
          animation: shake 0.2s ease-in-out 2;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .verification-header {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-family: var(--font-display);
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: var(--space-4);
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-3);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-4);
          margin-top: var(--space-3);
        }

        .detail-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .detail-item-lbl {
          font-size: 9px;
          color: var(--text-muted);
          text-transform: uppercase;
          font-family: var(--font-display);
        }

        .detail-item-val {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Recent checks chips */
        .recent-chips-container {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }

        .recent-chips-row {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-2);
        }

        .recent-chip {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          color: var(--text-secondary);
          font-family: var(--font-mono);
          font-size: 11px;
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all var(--transition-fast);
        }

        .recent-chip:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background-color: var(--bg-card);
        }
      `}</style>

      <div className="animate-slide-in sensor-checker-viewport">
        {/* Dynamic SCADA Stats row */}
        <div className="scada-stats-row">
          <div className="stat-cell">
            <span className="stat-cell-lbl">Total Registered</span>
            <span className="stat-cell-val text-cyan">{stats.total}</span>
          </div>
          <div className="stat-cell">
            <span className="stat-cell-lbl">Active Signals</span>
            <span className="stat-cell-val text-green">{stats.active}</span>
          </div>
          <div className="stat-cell">
            <span className="stat-cell-lbl">Faulty Transmitters</span>
            <span className="stat-cell-val text-red">{stats.faulty}</span>
          </div>
          <div className="stat-cell">
            <span className="stat-cell-lbl">Inactive Nodes</span>
            <span className="stat-cell-val text-yellow">{stats.inactive}</span>
          </div>
        </div>

        {/* Input Interface */}
        <Card title="Signal Integrity Diagnostics" icon={<Activity size={14} />}>
          <form onSubmit={handleFormSubmit} className="checker-input-group">
            <input
              type="text"
              className="checker-input"
              placeholder="ENTER MASTER SENSOR ID (e.g. SEN-2024-001)"
              value={inputId}
              onChange={(e) => setInputId(e.target.value.toUpperCase())}
            />
            <Button type="submit" variant="primary" style={{ height: '48px', minWidth: '110px' }}>
              Verify ID
            </Button>
          </form>
        </Card>

        {/* Verification Result details */}
        {currentResult && (
          <div className={`verification-card verification-card-${currentResult.type} ${shake ? 'shake-effect' : ''}`}>
            <Card style={{ margin: 0 }}>
              {currentResult.type === 'VALID' && (
                <div>
                  <div className="verification-header text-green">
                    <CheckCircle2 size={18} />
                    <span>VERIFICATION COMPLETE: SENSOR VERIFIED</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    Registry checksum matched. Probe telemetry transmitting at nominal thresholds.
                  </p>
                  
                  <div className="details-grid">
                    <div className="detail-item">
                      <span className="detail-item-lbl">Sensor Name</span>
                      <span className="detail-item-val">{currentResult.data.name}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-item-lbl">Sector Location</span>
                      <span className="detail-item-val">{currentResult.data.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-item-lbl">Sensing Class</span>
                      <span className="detail-item-val">{currentResult.data.type}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-item-lbl">Last Heartbeat</span>
                      <span className="detail-item-val font-mono" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {getElapsedMinutes(currentResult.data.lastPing)} mins ago
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {currentResult.type === 'FAULTY' && (
                <div>
                  <div className="verification-header text-yellow">
                    <AlertTriangle size={18} />
                    <span>DIAGNOSTICS FAILED: SENSOR FAULTY</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    High package drop ratios detected. Hardware diagnostics required immediately.
                  </p>

                  <div className="details-grid" style={{ borderColor: 'var(--accent-yellow)' }}>
                    <div className="detail-item">
                      <span className="detail-item-lbl">Sensor Name</span>
                      <span className="detail-item-val">{currentResult.data.name}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-item-lbl">Sector Location</span>
                      <span className="detail-item-val">{currentResult.data.location}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-item-lbl">Sensing Class</span>
                      <span className="detail-item-val">{currentResult.data.type}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-item-lbl">Last Heartbeat</span>
                      <span className="detail-item-val font-mono" style={{ color: 'var(--accent-yellow)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <AlertTriangle size={12} /> {getElapsedMinutes(currentResult.data.lastPing)} mins ago
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {currentResult.type === 'INVALID' && (
                <div>
                  <div className="verification-header text-red">
                    <XCircle size={18} />
                    <span>DIAGNOSTICS EXCEPTION: SENSOR NOT FOUND</span>
                  </div>
                  <p style={{ fontSize: '13px', color: 'var(--text-primary)', fontWeight: 'bold' }}>
                    ID reference [{currentResult.id}] is not registered in the plant system registry.
                  </p>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', marginTop: '6px' }}>
                    Please verify the ID number is correct and confirm the transceiver installation has been synchronized.
                  </p>
                </div>
              )}
            </Card>
          </div>
        )}

        {/* Recent Checks chips */}
        <div className="recent-chips-container">
          <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Verification Audit Log
          </span>
          <div className="recent-chips-row">
            {recentChecks.length > 0 ? (
              recentChecks.map((check, idx) => (
                <div 
                  key={idx} 
                  className="recent-chip"
                  onClick={() => handleRecentClick(check.id)}
                >
                  <span>{check.id}</span>
                  {check.type === 'VALID' ? (
                    <span className="text-green">✅</span>
                  ) : check.type === 'FAULTY' ? (
                    <span className="text-yellow">⚠️</span>
                  ) : (
                    <span className="text-red">❌</span>
                  )}
                </div>
              ))
            ) : (
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>No verification pings issued during this session.</span>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SensorChecker
