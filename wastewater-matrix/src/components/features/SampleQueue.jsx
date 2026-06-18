import React, { useState, useEffect } from 'react'
import { labSamples } from '../../data/mockData.js'
import Card from '../ui/Card.jsx'
import Button from '../ui/Button.jsx'
import Badge from '../ui/Badge.jsx'
import { Plus, CheckCircle2, Clock, FlaskConical, AlertTriangle, Calendar } from 'lucide-react'
import { useToast } from '../ui/Toast.jsx'

/* ==========================================================================
   ALGORITHM DESIGN: FIFO (FIRST IN FIRST OUT) LABORATORY QUEUE
   - React state `queue` manages pending lab test carriers.
   - Enqueue: Adds a new sample record to the end of the queue array:
     `setQueue(prev => [...prev, newItem])`
   - Dequeue: Removes the front item from the queue array:
     `const [first, ...rest] = queue; setQueue(rest)`
   - Keeps order preservation intact for fair first-come, first-serve processing.
   ========================================================================== */

const initialQueueData = labSamples.map(sample => ({
  id: sample.sampleId,
  source: sample.source,
  collectedAt: sample.collectedAt,
  priority: sample.priority,
  testType: sample.testType
}))

function SampleQueue() {
  const [queue, setQueue] = useState(initialQueueData)
  const [completedList, setCompletedList] = useState([])
  const [completedCountToday, setCompletedCountToday] = useState(12) // Initial offset for realism
  const [processingItem, setProcessingItem] = useState(null)
  const [processProgress, setProcessProgress] = useState(0)

  // Form states
  const [source, setSource] = useState('Main Sewange Inlet')
  const [testType, setTestType] = useState('Heavy Metals Core Scan')
  const [priority, setPriority] = useState('MEDIUM')

  const { showToast } = useToast()

  // Handle fake 2-second processing animation on dequeue
  useEffect(() => {
    if (!processingItem) return

    setProcessProgress(0)
    const intervalTime = 50 // ms
    const increment = 100 / (2000 / intervalTime) // 2000ms total

    const progressTimer = setInterval(() => {
      setProcessProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer)
          // Complete processing
          setCompletedList(prevComp => [
            {
              ...processingItem,
              completedAt: new Date().toISOString()
            },
            ...prevComp
          ].slice(0, 5)) // Keep last 5
          setCompletedCountToday(prevCount => prevCount + 1)
          showToast(`Complete: ${processingItem.id} moved to results`, 'success')
          setProcessingItem(null)
          return 100
        }
        return prev + increment
      })
    }, intervalTime)

    return () => clearInterval(progressTimer)
  }, [processingItem])

  // FIFO Enqueue function
  const handleEnqueue = (e) => {
    e.preventDefault()

    const newSampleId = `SMP-${Date.now().toString().slice(-6)}`
    const newSample = {
      id: newSampleId,
      source,
      collectedAt: new Date().toISOString(),
      priority,
      testType
    }

    // Append to back (FIFO enqueue)
    setQueue(prev => [...prev, newSample])
    showToast(`Sample ${newSampleId} added to position #${queue.length + 1}`, 'success')
  }

  // FIFO Dequeue function
  const handleProcessNext = () => {
    if (queue.length === 0) {
      showToast("No pending samples on queue.", 'warning')
      return
    }

    if (processingItem) {
      showToast("A sample is currently under laboratory analysis.", 'error')
      return
    }

    // Extract front item (FIFO dequeue)
    const [first, ...rest] = queue
    setQueue(rest)
    setProcessingItem(first)
  }

  const getPriorityBadge = (prio) => {
    if (prio === 'HIGH') {
      return <Badge label="HIGH" variant="danger" />
    }
    if (prio === 'MEDIUM') {
      return <Badge label="MEDIUM" variant="warning" />
    }
    return <Badge label="LOW" variant="info" />
  }

  return (
    <>
      <style>{`
        .scada-queue-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-queue-layout {
            flex-direction: column;
          }
        }

        /* Stats bar */
        .queue-stats-row {
          display: flex;
          gap: var(--space-3);
          align-items: center;
          background-color: rgba(0, 0, 0, 0.25);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px var(--space-4);
          font-family: var(--font-mono);
          font-size: 11px;
          margin-bottom: var(--space-4);
        }

        /* Next items visual indicators */
        .queue-next-card {
          border-left: 3px solid var(--accent-cyan) !important;
          box-shadow: var(--shadow-glow-cyan) !important;
          background-color: rgba(0, 212, 255, 0.02) !important;
        }

        /* Process loader */
        .process-loader-card {
          margin-bottom: var(--space-4);
          border: 1px solid var(--accent-cyan);
          background-color: rgba(0, 212, 255, 0.05);
        }

        .process-bar-container {
          width: 100%;
          height: 6px;
          background-color: var(--bg-primary);
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin-top: var(--space-3);
        }

        .process-bar-fill {
          height: 100%;
          background-color: var(--accent-cyan);
          box-shadow: var(--shadow-glow-cyan);
          transition: width 0.05s linear;
        }

        /* Completed list */
        .completed-section {
          margin-top: var(--space-6);
        }

        .completed-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-2) var(--space-3);
          border-bottom: 1px solid var(--border-color);
          opacity: 0.65;
          font-size: 12px;
        }

        .completed-text {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }

        .completed-text span {
          text-decoration: line-through;
          color: var(--text-secondary);
        }

        /* Forms radios */
        .priority-radio-group {
          display: flex;
          gap: var(--space-4);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: 8px 12px;
          border-radius: var(--radius-sm);
        }

        .priority-radio-item {
          display: flex;
          align-items: center;
          gap: 6px;
          cursor: pointer;
        }

        .priority-radio-item input {
          width: auto;
          cursor: pointer;
          accent-color: var(--accent-cyan);
        }
      `}</style>



      <div className="scada-queue-layout animate-slide-in">
        {/* Main Queue Display (Left side) */}
        <div style={{ flex: 2.5, width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-4)', flexWrap: 'wrap', gap: '10px' }}>
            <div className="queue-stats-row" style={{ margin: 0 }}>
              <span>WAITING: <span className="text-cyan">{queue.length}</span></span>
              <span style={{ color: 'var(--border-color)' }}>|</span>
              <span>PROCESSING: <span className="text-yellow">{processingItem ? 1 : 0}</span></span>
              <span style={{ color: 'var(--border-color)' }}>|</span>
              <span>COMPLETED TODAY: <span className="text-green">{completedCountToday}</span></span>
            </div>
            
            <Button
              variant="success"
              size="md"
              onClick={handleProcessNext}
              disabled={queue.length === 0 || !!processingItem}
              loading={!!processingItem}
              style={{ fontWeight: '800' }}
            >
              Process Next Queue Item
            </Button>
          </div>

          {/* Active Processing Loader */}
          {processingItem && (
            <Card className="process-loader-card" title={`ANALYZING: ${processingItem.id}`} icon={<FlaskConical size={14} className="animate-pulse" />}>
              <div style={{ fontSize: '12px', display: 'flex', justifyContent: 'space-between' }}>
                <span>Source: {processingItem.source} ({processingItem.testType})</span>
                <span className="font-mono">{Math.floor(processProgress)}%</span>
              </div>
              <div className="process-bar-container">
                <div className="process-bar-fill" style={{ width: `${processProgress}%` }} />
              </div>
            </Card>
          )}

          {/* Visual queue */}
          <Card title="Pending Sample Conveyor" icon={<FlaskConical size={14} />}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {queue.length > 0 ? (
                queue.map((item, index) => {
                  const isNext = index === 0
                  return (
                    <Card
                      key={item.id}
                      className={isNext ? 'queue-next-card' : ''}
                      style={{ padding: 'var(--space-2) var(--space-4)', margin: 0 }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span className="font-mono text-cyan" style={{ fontWeight: '800' }}>
                            [{index + 1}]
                          </span>
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontWeight: '700', fontSize: '13px', fontFamily: 'var(--font-mono)' }}>
                                {item.id}
                              </span>
                              {isNext && <Badge label="NEXT TO PROCESS" variant="info" />}
                            </div>
                            <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>
                              {item.source} • {item.testType}
                            </div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', color: 'var(--text-muted)' }}>
                            <Calendar size={10} /> {new Date(item.collectedAt).toLocaleTimeString()}
                          </div>
                          {getPriorityBadge(item.priority)}
                        </div>
                      </div>
                    </Card>
                  )
                })
              ) : (
                <div style={{ textAlign: 'center', padding: '40px var(--space-4)', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={36} style={{ color: 'var(--accent-green)', marginBottom: '12px' }} />
                  <h4>Carrier Conduit Cleared</h4>
                  <p style={{ fontSize: '11px', marginTop: '4px' }}>No laboratory assay samples are currently waiting in the queue.</p>
                </div>
              )}
            </div>
          </Card>

          {/* Completed Section */}
          <div className="completed-section">
            <Card title="Results Released (Last 5)" icon={<CheckCircle2 size={14} />}>
              {completedList.length > 0 ? (
                completedList.map(item => (
                  <div key={item.id} className="completed-row">
                    <div className="completed-text">
                      <CheckCircle2 size={14} style={{ color: 'var(--accent-green)' }} />
                      <span className="font-mono" style={{ fontWeight: '700' }}>{item.id}</span>
                      <span style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '11px' }}>
                        {item.source} ({item.testType})
                      </span>
                    </div>
                    <span className="font-mono" style={{ color: 'var(--text-muted)', fontSize: '10px' }}>
                      Pushed at {new Date(item.completedAt).toLocaleTimeString()}
                    </span>
                  </div>
                ))
              ) : (
                <span style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', padding: '16px', display: 'block' }}>
                  No samples completed in this shift yet.
                </span>
              )}
            </Card>
          </div>
        </div>

        {/* Add Sample Form (Right panel) */}
        <div className="valve-history-panel" style={{ flex: 1.2 }}>
          <Card title="Lab Ingest Station" icon={<Plus size={14} />}>
            <form onSubmit={handleEnqueue} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Ingest Source Location</label>
                <select value={source} onChange={(e) => setSource(e.target.value)}>
                  <option value="Main Raw Sewage Inlet A">Sewage Inlet A</option>
                  <option value="Primary Grit Chamber Exit">Grit Chamber Exit</option>
                  <option value="Equalization Reservoir B">Equalization Basin B</option>
                  <option value="Biological Aeration Reactor 2">Aeration Reactor 2</option>
                  <option value="Secondary Clarifier Pool A">Clarifier Pool A</option>
                  <option value="Post Sand Filter Complex 3">Filter Complex 3</option>
                  <option value="Disinfection Contact Stage">Disinfection Contact</option>
                  <option value="Final Effluent Outfall Lift">Outfall Discharge</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Assay Test Specification</label>
                <select value={testType} onChange={(e) => setTestType(e.target.value)}>
                  <option value="Heavy Metals Core Scan">Heavy Metals Core Scan</option>
                  <option value="Suspended Solids Assay">Suspended Solids Assay</option>
                  <option value="E. Coli Pathogen Count">E. Coli Pathogen Count</option>
                  <option value="Total Dissolved Volatiles">Total Dissolved Volatiles</option>
                  <option value="Biological Oxygen Demand">Biological Oxygen Demand</option>
                  <option value="Industrial Cyanide Level">Industrial Cyanide Level</option>
                  <option value="Volatile Fatty Acid Ratio">Volatile Fatty Acid Ratio</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label>Urgency Priority</label>
                <div className="priority-radio-group">
                  <label className="priority-radio-item">
                    <input
                      type="radio"
                      name="priority"
                      value="HIGH"
                      checked={priority === 'HIGH'}
                      onChange={() => setPriority('HIGH')}
                    />
                    <span style={{ color: 'var(--accent-red)', fontWeight: '700', fontSize: '10px' }}>HIGH</span>
                  </label>
                  <label className="priority-radio-item">
                    <input
                      type="radio"
                      name="priority"
                      value="MEDIUM"
                      checked={priority === 'MEDIUM'}
                      onChange={() => setPriority('MEDIUM')}
                    />
                    <span style={{ color: 'var(--accent-yellow)', fontWeight: '700', fontSize: '10px' }}>MEDIUM</span>
                  </label>
                  <label className="priority-radio-item">
                    <input
                      type="radio"
                      name="priority"
                      value="LOW"
                      checked={priority === 'LOW'}
                      onChange={() => setPriority('LOW')}
                    />
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '10px' }}>LOW</span>
                  </label>
                </div>
              </div>

              <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '8px' }}>
                <Plus size={16} /> Enqueue Sample
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </>
  )
}

// Global style bindings for margin utilities in template layout
const varSpace = {
  '--space-4': '16px',
  '--space-5': '20px',
  '--space-6': '24px'
}

export default SampleQueue
