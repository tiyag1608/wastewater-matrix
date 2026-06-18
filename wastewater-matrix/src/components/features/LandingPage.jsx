import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { 
  Activity, 
  Search, 
  Sliders, 
  FlaskConical, 
  Radio, 
  Zap, 
  Map, 
  Compass, 
  Flame, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  Server,
  Layers,
  Database,
  Play,
  RefreshCw,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

function LandingPage() {
  // --- STATE FOR INTERACTIVE CLI TERMINAL ---
  const [terminalCmd, setTerminalCmd] = useState('scada --status')
  const [terminalOutput, setTerminalOutput] = useState([
    { text: '$ scada --status', type: 'command' },
    { text: '=======================================================', type: 'system' },
    { text: 'SYSTEM: Wastewater Matrix Core Telemetry Engine v2.4.0', type: 'system' },
    { text: 'STATUS: ACTIVE & MONITORING (50/50 Transceivers nominal)', type: 'success' },
    { text: '-------------------------------------------------------', type: 'system' },
    { text: '[OK] Trie Chemical Indexer: 47 reagents loaded in O(k) prefix tree', type: 'success' },
    { text: '[OK] Valve Control Stack: LIFO ledger active (0 pending undos)', type: 'success' },
    { text: '[OK] Station Risk Heap: Max-Heap priority sort operational', type: 'success' },
    { text: '[OK] Dijkstra Flow Router: Gravity slopes calculated nominal', type: 'success' }
  ])
  const [isTyping, setIsTyping] = useState(false)

  // Run a terminal command simulation
  const runTerminalSim = (cmd) => {
    if (isTyping) return
    setIsTyping(true)
    setTerminalCmd(cmd)
    
    // Simulate minor loading latency for terminal feel
    setTimeout(() => {
      let output = []
      switch(cmd) {
        case 'scada --status':
          output = [
            { text: '$ scada --status', type: 'command' },
            { text: 'SYSTEM: Wastewater Matrix Core Telemetry Engine v2.4.0', type: 'system' },
            { text: 'STATUS: ACTIVE (50/50 Transceivers nominal)', type: 'success' },
            { text: '[OK] Trie Chemical Indexer: 47 reagents operational', type: 'success' },
            { text: '[OK] Valve Control Stack: LIFO ledger active', type: 'success' },
            { text: '[OK] Dijkstra Flow Router: Slope paths normal', type: 'success' }
          ]
          break
        case 'scada --trie-match':
          output = [
            { text: '$ scada --trie-match "Chlor"', type: 'command' },
            { text: 'Trie Tree search initialized for key prefix: "Chlor"', type: 'system' },
            { text: '└─ Match Found [O(k)]: "Chlorine Dioxide" (ID: CHEM-021)', type: 'success' },
            { text: '└─ Match Found [O(k)]: "Chloramine-T" (ID: CHEM-044)', type: 'success' },
            { text: '└─ Match Found [O(k)]: "Chlorine Gas" (ID: CHEM-012)', type: 'success' },
            { text: 'Query Latency: 0.04 ms. Search space: 47 chemicals.', type: 'info' }
          ]
          break
        case 'scada --valve-undo':
          output = [
            { text: '$ scada --valve-undo --verbose', type: 'command' },
            { text: 'LIFO Transaction Stack Trace:', type: 'system' },
            { text: '[Stack Frame 3] Action: SET_FLOW | Valve: V-07 | Val: CLOSED', type: 'info' },
            { text: '[Stack Frame 2] Action: SET_FLOW | Valve: V-12 | Val: 45%', type: 'info' },
            { text: '[Stack Frame 1] Action: SET_FLOW | Valve: V-02 | Val: OPEN', type: 'info' },
            { text: 'Executing POP command on Stack Head...', type: 'system' },
            { text: '>> REVERTED V-07 back to OPEN. System state synchronized.', type: 'success' }
          ]
          break
        case 'scada --dijkstra':
          output = [
            { text: '$ scada --dijkstra --optimize', type: 'command' },
            { text: 'Dijkstra Routing algorithm initialized for Gravity Flow...', type: 'system' },
            { text: 'Source Node: Pump_Station_04 (Alt: 104m) -> Discharge (Alt: 90m)', type: 'info' },
            { text: 'Analyzing 12 conduits and 10 drainage intersections...', type: 'info' },
            { text: '└─ Route Found: PS_04 -> JCT_08 -> CHM_02 -> DS_01', type: 'success' },
            { text: '└─ Total Slope Loss: 14m (Optimal gravity vector, Pumps bypassed)', type: 'success' },
            { text: 'Telemetry confirmed: route status OPERATIONAL.', type: 'success' }
          ]
          break
        default:
          output = [{ text: `$ ${cmd} - Command unrecognized.`, type: 'error' }]
      }
      setTerminalOutput(output)
      setIsTyping(false)
    }, 450)
  }

  // --- STATE FOR INTERACTIVE SVG FLOW MAP ---
  const [activeNode, setActiveNode] = useState(null)
  const [nodes, setNodes] = useState([
    { id: 'PS1', name: 'Pump Station 1', x: 80, y: 70, status: 'nominal', desc: 'Primary influent pump. Flow rate: 1,420 L/s.' },
    { id: 'FLT', name: 'Filter Bed Beta', x: 200, y: 70, status: 'nominal', desc: 'Granular carbon filtering system. Backwash cycle OK.' },
    { id: 'BAL', name: 'Chem Balancer', x: 320, y: 70, status: 'nominal', desc: 'Greedy dosing agent applying compatible reagents.' },
    { id: 'DSC', name: 'Main Discharge', x: 440, y: 70, status: 'nominal', desc: 'Clean effluent outfall. Flow rate matches influent.' }
  ])
  
  // Toggle status of an SVG node to simulate alerts
  const handleToggleNode = (nodeId) => {
    setActiveNode(nodeId)
    setNodes(prev => prev.map(n => {
      if (n.id === nodeId) {
        const nextStatus = n.status === 'nominal' ? 'warning' : n.status === 'warning' ? 'critical' : 'nominal'
        let nextDesc = n.desc
        if (nextStatus === 'nominal') {
          nextDesc = `${n.name.split(' (')[0]} operating under normal parameters.`
        } else if (nextStatus === 'warning') {
          nextDesc = `⚠️ Jitter detected at ${n.name.split(' (')[0]}. Telemetry signal unstable.`
        } else {
          nextDesc = `🚨 CRITICAL ALERT at ${n.name.split(' (')[0]}. Pressure threshold exceeded!`
        }
        return { ...n, status: nextStatus, desc: nextDesc }
      }
      return n
    }))
  }

  // Auto cyclic simulation step for background feel
  useEffect(() => {
    const cycle = setInterval(() => {
      // Randomly change a node status slightly to make the SVG map feel "alive"
      const randomIndex = Math.floor(Math.random() * nodes.length)
      const targetNode = nodes[randomIndex]
      // Only do minor status swaps in background
      setNodes(prev => prev.map((n, idx) => {
        if (idx === randomIndex && n.status === 'nominal' && activeNode !== n.id) {
          return { ...n, status: 'warning', desc: `${n.name} reporting minor telemetry jitter.` }
        } else if (idx === randomIndex && n.status === 'warning' && activeNode !== n.id) {
          return { ...n, status: 'nominal', desc: `${n.name} returned to nominal state.` }
        }
        return n
      }))
    }, 12000)

    return () => clearInterval(cycle)
  }, [nodes, activeNode])

  // --- GSAP REVEAL ANIMATIONS ON MOUNT ---
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Navigation slide-in
      gsap.from('.landing-nav', {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      })

      // 2. Hero components sequential timeline reveal
      const heroTl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      heroTl.from('.version-badge', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2
      })
      .from('.hero-title', {
        y: 40,
        opacity: 0,
        duration: 1.0
      }, '-=0.5')
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8
      }, '-=0.7')
      .from('.hero-ctas', {
        y: 20,
        opacity: 0,
        duration: 0.6
      }, '-=0.6')

      // 3. Showcase Panels (Terminal slide from left, SVG panel slide from right)
      gsap.from('.premium-terminal', {
        x: -120,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4
      })

      gsap.from('.live-telemetry-panel', {
        x: 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.4
      })

      // 4. Metrics items stagger
      gsap.from('.metric-item', {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.7
      })

      // 5. Feature cards grid entry reveal
      gsap.from('.landing-feature-card', {
        y: 50,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.9
      })

      // 6. Ambient Mesh Glow background drifts (infinite loop)
      gsap.to('.ambient-glow-1', {
        x: 'random(-60, 60)',
        y: 'random(-60, 60)',
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to('.ambient-glow-2', {
        x: 'random(-80, 80)',
        y: 'random(-80, 80)',
        duration: 22,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      // 7. Tech specs grid stagger
      gsap.from('.arch-pill', {
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out',
        delay: 1.1
      })
    })

    return () => ctx.revert() // Clean up all animations to prevent memory leaks / HMR glitches
  }, [])

  const landingFeatures = [
    {
      title: 'Trie Prefix Search',
      desc: 'Instant O(k) prefix tree matching for indexing chemicals, materials, and pipeline assets. Search finishes in microseconds regardless of database size.',
      icon: <Search size={20} />,
      color: '#0284c7',
      bg: 'rgba(2, 132, 199, 0.06)'
    },
    {
      title: 'LIFO Valve Undo Stack',
      desc: 'Saves complete valve configuration changes into a transaction stack ledger. Roll back unwanted valve configurations instantly with zero risk of state loss.',
      icon: <Sliders size={20} />,
      color: '#d97706',
      bg: 'rgba(217, 119, 6, 0.06)'
    },
    {
      title: 'FIFO Lab Assay Queue',
      desc: 'Maintains strict sequence for laboratory fluid testing. Prevents critical samples from being delayed by processing them in exact collection order.',
      icon: <FlaskConical size={20} />,
      color: '#dc2626',
      bg: 'rgba(220, 38, 38, 0.06)'
    },
    {
      title: 'HashMap Diagnostics',
      desc: 'Instant O(1) key registry verification to check telemetry health of all 50 transceivers. Flags packet drops and hardware faults instantly.',
      icon: <Radio size={20} />,
      color: '#16a34a',
      bg: 'rgba(22, 163, 74, 0.06)'
    },
    {
      title: 'Risk Sort Algorithm',
      desc: 'Max-Heap priority sort simulation to rank overflow risks across station levels. Dynamically re-sorts grid coordinates to dispatch ground crews to high-risk areas first.',
      icon: <Zap size={20} />,
      color: '#4f46e5',
      bg: 'rgba(79, 70, 229, 0.06)'
    },
    {
      title: 'Topological SVG Map',
      desc: 'Interactive vector rendering of underground piping layouts. Tracks real-time grid path connections and flow directions on an interactive digital canvas.',
      icon: <Map size={20} />,
      color: '#0891b2',
      bg: 'rgba(8, 145, 178, 0.06)'
    },
    {
      title: 'Gravity Flow Dijkstra',
      desc: 'BFS and Dijkstra slope routing algorithms to calculate optimal drainage vectors. Maximizes gravity flows to reduce municipal pump station power dependencies.',
      icon: <Compass size={20} />,
      color: '#2563eb',
      bg: 'rgba(37, 99, 235, 0.06)'
    },
    {
      title: 'Greedy Feed Balancer',
      desc: 'Real-time compatibility matching agent. Fits available dosing reagents to active mixing chambers to neutralize pH values in seconds.',
      icon: <Flame size={20} />,
      color: '#ea580c',
      bg: 'rgba(234, 88, 12, 0.06)'
    }
  ]

  return (
    <div className="landing-viewport">
      <style>{`
        .landing-viewport {
          background-color: #f8fafc;
          color: #0f172a;
          font-family: 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          overflow-x: hidden;
          position: relative;
        }

        /* Ambient background decorations */
        .ambient-glow-1 {
          position: absolute;
          top: -10%;
          left: 15%;
          width: 50vw;
          height: 50vw;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08) 0%, rgba(2, 132, 199, 0.04) 50%, transparent 100%);
          z-index: 0;
          pointer-events: none;
        }

        .ambient-glow-2 {
          position: absolute;
          top: 35%;
          right: -10%;
          width: 45vw;
          height: 45vw;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.06) 0%, rgba(79, 70, 229, 0.03) 60%, transparent 100%);
          z-index: 0;
          pointer-events: none;
        }

        /* Glassmorphic Nav */
        .landing-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 6%;
          background-color: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(226, 232, 240, 0.8);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo-section {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 15px;
          color: #0f172a;
          letter-spacing: -0.01em;
        }

        .logo-icon-container {
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          color: #ffffff;
          padding: 8px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(2, 132, 199, 0.15);
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-link-item {
          font-size: 13.5px;
          font-weight: 600;
          color: #475569;
          transition: color 0.2s ease;
        }

        .nav-link-item:hover {
          color: #0284c7;
        }

        .btn-nav-action {
          background: #0f172a;
          color: #ffffff;
          font-weight: 700;
          font-size: 12.5px;
          padding: 9px 18px;
          border-radius: 6px;
          transition: all 0.2s ease;
          border: 1px solid #0f172a;
        }

        .btn-nav-action:hover {
          background-color: #1e293b;
          border-color: #1e293b;
          color: #ffffff;
        }

        /* Hero Section */
        .hero-section {
          padding: 80px 6% 60px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .version-badge {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 11px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 9999px;
          font-family: var(--font-mono);
          letter-spacing: 0.05em;
          margin-bottom: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
        }

        .hero-title {
          font-size: 54px;
          font-weight: 900;
          line-height: 1.15;
          letter-spacing: -0.03em;
          max-width: 850px;
          color: #0f172a;
          margin-bottom: 24px;
          text-transform: none;
        }

        .hero-title span {
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: 17px;
          color: #475569;
          max-width: 700px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          align-items: center;
          margin-bottom: 40px;
        }

        .btn-primary-landing {
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 13.5px;
          padding: 15px 32px;
          border-radius: 8px;
          box-shadow: 0 10px 25px -5px rgba(2, 132, 199, 0.25);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all 0.25s ease;
          border: none;
        }

        .btn-primary-landing:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 28px -4px rgba(2, 132, 199, 0.35);
          color: #ffffff;
        }

        .btn-secondary-landing {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-weight: 700;
          font-size: 13.5px;
          padding: 15px 32px;
          border-radius: 8px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .btn-secondary-landing:hover {
          background-color: #f8fafc;
          border-color: #cbd5e1;
        }

        /* Showcase Split Layout */
        .showcase-split-container {
          width: 88%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          margin: 0 auto 100px;
          position: relative;
          z-index: 1;
        }

        @media (max-width: 992px) {
          .showcase-split-container {
            grid-template-columns: 1fr;
            width: 92%;
          }
        }

        /* Interactive Terminal Card */
        .premium-terminal {
          background-color: #090e1a;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.3);
          display: flex;
          flex-direction: column;
          height: 380px;
        }

        .terminal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 20px;
          background-color: #111827;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .window-dots {
          display: flex;
          gap: 8px;
        }

        .dot-control {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .dot-close { background-color: #ef4444; }
        .dot-minimize { background-color: #f59e0b; }
        .dot-maximize { background-color: #10b981; }

        .terminal-title-text {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #94a3b8;
          font-weight: 500;
        }

        .terminal-shell-tag {
          font-family: var(--font-mono);
          font-size: 10px;
          color: #4ade80;
          background: rgba(74, 222, 128, 0.1);
          padding: 2px 8px;
          border-radius: 4px;
        }

        .terminal-actions-bar {
          display: flex;
          gap: 8px;
          padding: 10px 16px;
          background-color: #0f172a;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          overflow-x: auto;
          white-space: nowrap;
        }

        .terminal-action-btn {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          color: #94a3b8;
          background: #1e293b;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 6px 12px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .terminal-action-btn:hover {
          color: #ffffff;
          background: #334155;
        }

        .terminal-action-btn.active {
          color: #38bdf8;
          background: rgba(56, 189, 248, 0.1);
          border-color: rgba(56, 189, 248, 0.2);
        }

        .terminal-body {
          flex: 1;
          padding: 20px;
          overflow-y: auto;
          font-family: var(--font-mono);
          font-size: 11.5px;
          line-height: 1.6;
        }

        .terminal-text-line {
          margin-bottom: 6px;
        }

        .term-type-command { color: #38bdf8; font-weight: bold; }
        .term-type-system { color: #64748b; }
        .term-type-success { color: #4ade80; }
        .term-type-info { color: #a5f3fc; }
        .term-type-error { color: #f87171; }

        /* Interactive SVG telemetry component */
        .live-telemetry-panel {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 380px;
        }

        .telemetry-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .telemetry-title {
          font-size: 13.5px;
          font-weight: 800;
          letter-spacing: 0.05em;
          color: #0f172a;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .svg-canvas-wrapper {
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          flex: 1;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          margin-bottom: 16px;
        }

        .svg-node-btn {
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .svg-node-btn:hover {
          transform: scale(1.08);
        }

        .telemetry-node-info-box {
          background: #f1f5f9;
          border-radius: 8px;
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
        }

        .node-info-header {
          font-size: 11px;
          font-weight: 800;
          color: #334155;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .node-info-body {
          font-size: 12px;
          color: #475569;
          margin: 0;
        }

        /* Metrics grid */
        .metrics-banner {
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
          padding: 60px 8%;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 32px;
          text-align: center;
          box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.01);
          margin-bottom: 80px;
        }

        @media (max-width: 768px) {
          .metrics-banner {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        .metric-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .metric-val {
          font-size: 38px;
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.01em;
          background: linear-gradient(135deg, #0284c7 0%, #4f46e5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .metric-lbl {
          font-size: 11px;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Features Section */
        .features-section {
          padding: 80px 6% 100px;
          background-color: #f8fafc;
          position: relative;
          z-index: 1;
        }

        .features-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .features-title {
          font-size: 34px;
          font-weight: 900;
          margin-bottom: 16px;
          color: #0f172a;
          letter-spacing: -0.02em;
          text-transform: none;
        }

        .features-subtitle {
          font-size: 15px;
          color: #64748b;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.5;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        @media (max-width: 1200px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .features-grid {
            grid-template-columns: 1fr;
          }
        }

        .landing-feature-card {
          background-color: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 28px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.01);
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
        }

        .landing-feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.06);
          border-color: #cbd5e1;
        }

        .feature-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .feature-card-title {
          font-size: 15px;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
          text-transform: none;
        }

        .feature-card-desc {
          font-size: 12.5px;
          color: #475569;
          line-height: 1.55;
          margin: 0;
        }

        /* Architectural specs section */
        .arch-section {
          padding: 100px 6%;
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          position: relative;
          z-index: 1;
        }

        .arch-container {
          display: flex;
          gap: 80px;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        @media (max-width: 992px) {
          .arch-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }
        }

        .arch-left {
          flex: 1.2;
        }

        .arch-right {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
          width: 100%;
        }

        .arch-pill {
          display: flex;
          align-items: center;
          gap: 14px;
          background-color: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.01);
          transition: border-color 0.2s;
        }

        .arch-pill:hover {
          border-color: #0284c7;
        }

        .arch-pill-icon {
          color: #0284c7;
          flex-shrink: 0;
        }

        .arch-pill-text {
          font-size: 12.5px;
          font-weight: 700;
          color: #334155;
          font-family: var(--font-mono);
        }

        /* Footer */
        .landing-footer {
          background-color: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 50px 6%;
          text-align: center;
          font-size: 13px;
          color: #64748b;
          margin-top: auto;
          position: relative;
          z-index: 1;
        }
      `}</style>

      {/* Ambient background decoration glows */}
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* Nav header */}
      <header className="landing-nav">
        <div className="logo-section">
          <div className="logo-icon-container">
            <Activity size={18} />
          </div>
          <span style={{ fontSize: '16px', fontWeight: 900 }}>WASTEWATER MATRIX</span>
        </div>
        <nav className="nav-links">
          <span className="nav-link-item" style={{ cursor: 'pointer' }}>Spec Sheet</span>
          <span className="nav-link-item" style={{ cursor: 'pointer' }}>API Registry</span>
          <span className="nav-link-item" style={{ cursor: 'pointer' }}>Support</span>
          <Link to="/console" className="btn-nav-action">
            Enter SCADA
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="version-badge">
          <Cpu size={13} style={{ color: '#0284c7' }} />
          <span>SCADA MATRIX COMPLIANCE RELEASE V2.4</span>
        </div>

        <h1 className="hero-title">
          Municipal Wastewater Telemetry, <br /><span>Reimagined for Grid Operations.</span>
        </h1>
        
        <p className="hero-subtitle">
          An enterprise-grade telemetry dashboard engineered with strict algorithmic data structures. Fast prefix searching, FIFO laboratory scheduling, LIFO stack rollback logs, and Dijkstra gravity pathrouting.
        </p>

        <div className="hero-ctas">
          <Link to="/console" className="btn-primary-landing">
            Launch SCADA Console <ArrowRight size={15} />
          </Link>
          <button className="btn-secondary-landing" onClick={() => alert('Wastewater Matrix API schemas and SCADA spec sheets are integrated directly inside the console technical dashboard.')}>
            Technical Documentation
          </button>
        </div>
      </section>

      {/* Interactive Showcase Panel */}
      <div className="showcase-split-container">
        
        {/* Interactive CLI Terminal Widget */}
        <div className="premium-terminal">
          <div className="terminal-header">
            <div className="window-dots">
              <div className="dot-control dot-close" />
              <div className="dot-control dot-minimize" />
              <div className="dot-control dot-maximize" />
            </div>
            <span className="terminal-title-text">scada-engine@wastewater-matrix:~</span>
            <span className="terminal-shell-tag">zsh</span>
          </div>

          <div className="terminal-actions-bar">
            <button 
              className={`terminal-action-btn ${terminalCmd === 'scada --status' ? 'active' : ''}`}
              onClick={() => runTerminalSim('scada --status')}
            >
              scada --status
            </button>
            <button 
              className={`terminal-action-btn ${terminalCmd === 'scada --trie-match' ? 'active' : ''}`}
              onClick={() => runTerminalSim('scada --trie-match')}
            >
              scada --trie-match
            </button>
            <button 
              className={`terminal-action-btn ${terminalCmd === 'scada --valve-undo' ? 'active' : ''}`}
              onClick={() => runTerminalSim('scada --valve-undo')}
            >
              scada --valve-undo
            </button>
            <button 
              className={`terminal-action-btn ${terminalCmd === 'scada --dijkstra' ? 'active' : ''}`}
              onClick={() => runTerminalSim('scada --dijkstra')}
            >
              scada --dijkstra
            </button>
          </div>

          <div className="terminal-body">
            {isTyping ? (
              <div style={{ color: '#94a3b8', fontStyle: 'italic' }}>Compiling telemetry buffers...</div>
            ) : (
              terminalOutput.map((line, idx) => (
                <div key={idx} className={`terminal-text-line term-type-${line.type}`}>
                  {line.text}
                </div>
              ))
            )}
          </div>
        </div>

        {/* Interactive SVG Telemetry Panel */}
        <div className="live-telemetry-panel">
          <div className="telemetry-header">
            <h3 className="telemetry-title">
              <Activity size={16} style={{ color: '#0284c7' }} />
              Live Interactive Grid Mimic
            </h3>
            <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', background: 'rgba(22, 163, 74, 0.08)', color: '#16a34a', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
              ● LIVE SIMULATION
            </span>
          </div>

          <div className="svg-canvas-wrapper">
            <svg width="100%" height="100%" viewBox="0 0 520 160" style={{ maxWidth: '480px' }}>
              {/* Flow Connecting Conduits (Lines) */}
              <line 
                x1="80" y1="70" x2="200" y2="70" 
                stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" 
              />
              <line 
                x1="80" y1="70" x2="200" y2="70" 
                stroke="#38bdf8" strokeWidth="4" strokeDasharray="10 15" strokeLinecap="round"
                style={{ animation: 'flow-slide 8s linear infinite' }}
              />

              <line 
                x1="200" y1="70" x2="320" y2="70" 
                stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" 
              />
              <line 
                x1="200" y1="70" x2="320" y2="70" 
                stroke={nodes[1].status === 'critical' ? '#ef4444' : '#38bdf8'} strokeWidth="4" strokeDasharray="10 15" strokeLinecap="round"
                style={{ animation: 'flow-slide 6s linear infinite' }}
              />

              <line 
                x1="320" y1="70" x2="440" y2="70" 
                stroke="#cbd5e1" strokeWidth="6" strokeLinecap="round" 
              />
              <line 
                x1="320" y1="70" x2="440" y2="70" 
                stroke={nodes[2].status === 'critical' ? '#ef4444' : '#38bdf8'} strokeWidth="4" strokeDasharray="10 15" strokeLinecap="round"
                style={{ animation: 'flow-slide 7s linear infinite' }}
              />

              {/* Node Buttons */}
              {nodes.map(n => {
                const isSelected = activeNode === n.id
                let color = '#10b981' // nominal
                if (n.status === 'warning') color = '#f59e0b'
                if (n.status === 'critical') color = '#ef4444'

                return (
                  <g key={n.id} className="svg-node-btn" onClick={() => handleToggleNode(n.id)}>
                    {/* Ring selection pulse */}
                    {isSelected && (
                      <circle cx={n.x} cy={n.y} r="22" fill="none" stroke={color} strokeWidth="2" opacity="0.6" style={{ transformOrigin: `${n.x}px ${n.y}px` }}>
                        <animate attributeName="r" values="16;24;16" dur="2s" repeatCount="indefinite" />
                      </circle>
                    )}
                    {/* Main Node bubble */}
                    <circle cx={n.x} cy={n.y} r="16" fill="#ffffff" stroke={color} strokeWidth="4" />
                    <circle cx={n.x} cy={n.y} r="6" fill={color} />
                    {/* Label */}
                    <text x={n.x} y={n.y - 24} textAnchor="middle" fill="#334155" fontSize="9" fontWeight="bold" fontFamily="var(--font-mono)">
                      {n.id}
                    </text>
                  </g>
                )
              })}
            </svg>
            <style>{`
              @keyframes flow-slide {
                to { stroke-dashoffset: -100; }
              }
            `}</style>
          </div>

          <div className="telemetry-node-info-box">
            <div className="node-info-header">
              {activeNode ? `NODE DETAILS: ${activeNode}` : 'Interactive System Mimic'}
            </div>
            <p className="node-info-body">
              {activeNode 
                ? nodes.find(n => n.id === activeNode).desc 
                : 'Click any node bubble (PS1, FLT, BAL, DSC) to cycle alarm states and simulate grid telemetry changes.'
              }
            </p>
          </div>
        </div>

      </div>

      {/* Metrics Banner */}
      <section className="metrics-banner">
        <div className="metric-item">
          <span className="metric-val">2,847 L/s</span>
          <span className="metric-lbl">Discharge Outflow</span>
        </div>
        <div className="metric-item">
          <span className="metric-val">99.99%</span>
          <span className="metric-lbl">Signal Reliability</span>
        </div>
        <div className="metric-item">
          <span className="metric-val">O(1) Hash</span>
          <span className="metric-lbl">Telemetry Latency</span>
        </div>
        <div className="metric-item">
          <span className="metric-val">&lt; 0.6s</span>
          <span className="metric-lbl">Average LCP Load</span>
        </div>
      </section>

      {/* Algorithmic Features Section */}
      <section className="features-section">
        <div className="features-header">
          <h2 className="features-title">Grid Operations & Data Infrastructure</h2>
          <p className="features-subtitle">
            A wastewater telemetry dashboard designed around strict algorithmic data structures for maximum efficiency, speed, and grid safety.
          </p>
        </div>

        <div className="features-grid">
          {landingFeatures.map((f, idx) => (
            <div key={idx} className="landing-feature-card">
              <div className="feature-icon-wrapper" style={{ backgroundColor: f.bg, color: f.color }}>
                {f.icon}
              </div>
              <h4 className="feature-card-title">{f.title}</h4>
              <p className="feature-card-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture Specs */}
      <section className="arch-section">
        <div className="arch-container">
          <div className="arch-left">
            <h2 className="features-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              Engineered for High-Frequency Telemetry
            </h2>
            <p className="hero-subtitle" style={{ textAlign: 'left', fontSize: '15px', marginBottom: 0, lineHeight: '1.6' }}>
              Wastewater Matrix compiles with a clean, light-theme CSS setup. By using pure CSS custom variables and avoiding bloated utility frameworks, SCADA render cycles achieve sub-millisecond redraw latency. This keeps layout shifts (CLS) to zero even while displaying real-time high-throughput fluid flow telemetry.
            </p>
          </div>
          <div className="arch-right">
            <div className="arch-pill">
              <Database size={18} className="arch-pill-icon" />
              <span className="arch-pill-text">O(1) Diagnostic HashMaps</span>
            </div>
            <div className="arch-pill">
              <Layers size={18} className="arch-pill-icon" />
              <span className="arch-pill-text">Prefix Trie Indexes</span>
            </div>
            <div className="arch-pill">
              <Server size={18} className="arch-pill-icon" />
              <span className="arch-pill-text">React Nested Layouts</span>
            </div>
            <div className="arch-pill">
              <Cpu size={18} className="arch-pill-icon" />
              <span className="arch-pill-text">LIFO Transaction stacks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div>&copy; {new Date().getFullYear()} Wastewater Matrix Corporation. All rights reserved. Municipal Grid Operations & SCADA Telemetry Systems.</div>
      </footer>
    </div>
  )
}

export default LandingPage
