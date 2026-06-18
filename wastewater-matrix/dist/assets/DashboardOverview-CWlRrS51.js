import{r as o,j as e,L as z}from"./index-yO2fnI_U.js";import{C as p}from"./Card-DNgtQ6wf.js";import{B as j}from"./Badge-CR4k_RDh.js";import{B as N}from"./Button--RD9cv2F.js";import{A}from"./activity-BuPHIhcX.js";import{c as m}from"./createLucideIcon--UbIbcTq.js";import{S as O,a as R,R as I,Z as P,M as D,F as $}from"./zap-Bu0DD6by.js";import{F as B}from"./flask-conical-D3AzuNIp.js";import{C as F}from"./compass-DWyEnJ5M.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=m("CircleCheckBig",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=m("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=m("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=m("OctagonAlert",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=m("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=m("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]),r=a=>String(a).padStart(2,"0"),U=a=>`${r(a.getHours())}:${r(a.getMinutes())}:${r(a.getSeconds())}`,Y=a=>{const g=["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];return`${r(a.getDate())} ${g[a.getMonth()]} ${a.getFullYear()}`};function re(){const[a,g]=o.useState(new Date),[k,T]=o.useState(2847),v=o.useRef(null);o.useEffect(()=>{const t=setInterval(()=>g(new Date),1e3),s=setInterval(()=>{T(d=>Math.floor(d+(Math.random()*6-3)))},1500);return()=>{clearInterval(t),clearInterval(s)}},[]);const[n,C]=o.useState([{id:"ALT-01",code:"PR-OVR-01",desc:"Pressure overflow in Sector Alpha-1",severity:"CRITICAL",time:"14:25:00",type:"critical"},{id:"ALT-02",code:"CHM-IMB-04",desc:"Chemical imbalance detected in Tank-4",severity:"WARNING",time:"14:18:12",type:"warning"},{id:"ALT-03",code:"SEN-ERR-23",desc:"Sensor SEN-2024-023 went offline",severity:"WARNING",time:"14:10:05",type:"warning"}]),[h,f]=o.useState([{id:1,time:"14:32:15",msg:"Valve V-07 set to CLOSED by OPR-001",type:"info"},{id:2,time:"14:28:40",msg:"Sensor SEN-2024-023 went OFFLINE",type:"critical"},{id:3,time:"14:25:00",msg:"CRITICAL ALERT: Pressure overflow in Sector Alpha-1",type:"critical"},{id:4,time:"14:18:12",msg:"WARNING ALERT: Chemical imbalance detected in Tank-4",type:"warning"},{id:5,time:"14:15:00",msg:"Sample SMP-041 processed successfully",type:"success"},{id:6,time:"14:10:05",msg:"Sensor SEN-2024-023 went offline in Sector Epsilon-1",type:"warning"},{id:7,time:"14:05:00",msg:"Dosing recipe #4 applied to Valve V-12",type:"success"},{id:8,time:"13:58:30",msg:"Max-Heap priority queue resorted. SMP-042 moved to head",type:"info"},{id:9,time:"13:55:12",msg:"Gravity drainage path optimization computed successfully",type:"success"},{id:10,time:"13:50:00",msg:"Operator session initiated for console OPR-001",type:"info"}]);o.useEffect(()=>{v.current&&(v.current.scrollTop=0)},[h]);const E=t=>{const s=n.find(i=>i.id===t);if(!s)return;C(i=>i.filter(y=>y.id!==t));const d=new Date,x=`${r(d.getHours())}:${r(d.getMinutes())}:${r(d.getSeconds())}`;f(i=>[{id:Date.now(),time:x,msg:`ALERT ACKNOWLEDGED: ${s.desc} [${s.id}] by Operator`,type:"success"},...i])};o.useEffect(()=>{const t=setInterval(()=>{const s=new Date,d=`${r(s.getHours())}:${r(s.getMinutes())}:${r(s.getSeconds())}`,x=[{msg:"System check: all pipelines flowing nominal",type:"info"},{msg:"Temperature sensor on Pump Station 4: 42.5°C (Within threshold)",type:"info"},{msg:"Daily chemical stock inventory sync complete",type:"success"},{msg:"Minor telemetry jitter resolved in transceiver TX-502",type:"info"},{msg:"Backwash cycle completed for filter bed F-3",type:"success"},{msg:"Telemetry sync with Sector Delta: 12/12 transceivers active",type:"success"},{msg:"Sensor SEN-2024-012 recalibrated (+0.02 deviation)",type:"info"},{msg:"Gravity route re-verified. Latency: 4ms",type:"info"},{msg:"Valve V-02 throttle set to 85% by flow balancer",type:"info"}],i=x[Math.floor(Math.random()*x.length)];f(y=>[{id:Date.now(),time:d,msg:i.msg,type:i.type},...y])},25e3);return()=>clearInterval(t)},[]);const l=n.some(t=>t.id==="ALT-03"),u=n.some(t=>t.id==="ALT-02"),w=n.some(t=>t.id==="ALT-01"),b=l?"45/50":"50/50",L=l?"⚠️ 5 offline":"✅ All online",c=n.length,M=[{id:"chemical-search",title:"Chemical Search",icon:e.jsx(O,{size:16}),status:"OPERATIONAL",variant:"active",desc:"47 chemicals indexed",path:"/console/search",glow:"cyan"},{id:"valve-control",title:"Valve Control",icon:e.jsx(R,{size:16}),status:"OPERATIONAL",variant:"active",desc:"8 Actuators Online",path:"/console/valve-control",glow:"yellow"},{id:"sample-queue",title:"Sample Queue",icon:e.jsx(B,{size:16}),status:"OPERATIONAL",variant:"active",desc:"Stack depth: 3 | Next: SMP-042",path:"/console/sample-queue",glow:"red"},{id:"sensor-checker",title:"Sensor Checker",icon:e.jsx(I,{size:16}),status:l?"WARNING":"OPERATIONAL",variant:l?"warning":"active",desc:`${b} Transceivers Active`,path:"/console/sensor-check",glow:"green"},{id:"overflow-sorter",title:"Overflow Sorter",icon:e.jsx(P,{size:16}),status:w?"CRITICAL":"OPERATIONAL",variant:w?"danger":"active",desc:"12 Stations Monitored",path:"/console/overflow",glow:"yellow"},{id:"pipe-map",title:"Pipe Map Hub",icon:e.jsx(D,{size:16}),status:"OPERATIONAL",variant:"active",desc:"10 Nodes Active",path:"/console/pipe-map",glow:"cyan"},{id:"gravity-planner",title:"Gravity Planner",icon:e.jsx(F,{size:16}),status:"OPERATIONAL",variant:"active",desc:"Dijkstra Route: Active",path:"/console/gravity",glow:"green"},{id:"chemical-balancer",title:"Chem Balancer",icon:e.jsx($,{size:16}),status:u?"WARNING":"OPERATIONAL",variant:u?"warning":"active",desc:"6 Dosing Recipes",path:"/console/balancer",glow:"yellow"}];return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"scada-overview-title-bar",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",style:{borderBottom:"none",paddingBottom:0,marginBottom:0},children:"SYSTEM COMMAND MATRIX"}),e.jsx("p",{className:"page-subtitle",children:"Central Wastewater Treatment Grid SCADA Matrix"})]}),e.jsxs("div",{className:"digital-clock-panel",children:[e.jsx("div",{className:"clock-label",children:"CONSOLE EVENT TIME"}),e.jsx("div",{className:"clock-time",children:U(a)}),e.jsx("div",{className:"clock-date",children:Y(a)})]})]}),e.jsxs("div",{className:"stat-grid",children:[e.jsxs(p,{glowColor:"cyan",children:[e.jsxs("div",{className:"stat-card-title-row",children:[e.jsx(A,{size:12,className:"text-cyan"}),e.jsx("span",{children:"Total System Flow"})]}),e.jsxs("div",{className:"stat-card-num",style:{color:"var(--accent-cyan)"},children:[k.toLocaleString()," L/s"]}),e.jsxs("div",{className:"stat-card-subtext",children:[e.jsxs("span",{style:{color:"var(--accent-green)",display:"flex",alignItems:"center",fontWeight:"bold"},children:[e.jsx(q,{size:12,style:{marginRight:"2px"}}),"+3.2%"]}),e.jsx("span",{style:{color:"var(--text-muted)"},children:"vs hourly benchmark"})]})]}),e.jsxs(p,{glowColor:l?"yellow":"green",children:[e.jsxs("div",{className:"stat-card-title-row",children:[e.jsx(H,{size:12,className:l?"text-yellow":"text-green"}),e.jsx("span",{children:"Sensors Online"})]}),e.jsx("div",{className:"stat-card-num",children:b}),e.jsx("div",{className:"stat-card-subtext",children:e.jsx("span",{style:{color:l?"var(--accent-yellow)":"var(--accent-green)",fontWeight:"bold"},children:L})})]}),e.jsxs(p,{glowColor:c>0?"red":"green",children:[e.jsxs("div",{className:"stat-card-title-row",children:[e.jsx(S,{size:12,className:c>0?"text-red":"text-green"}),e.jsx("span",{children:"Active Alerts"})]}),e.jsx("div",{className:`stat-card-num ${c>0?"stat-pulse-red":""}`,style:{color:c>0?"var(--accent-red)":"var(--accent-green)"},children:c}),e.jsx("div",{className:"stat-card-subtext",children:c>0?e.jsx("span",{className:"stat-pulse-red",style:{fontWeight:"bold"},children:"Awaiting operator response"}):e.jsx("span",{style:{color:"var(--accent-green)"},children:"All telemetry parameters normal"})})]}),e.jsxs(p,{glowColor:"cyan",children:[e.jsxs("div",{className:"stat-card-title-row",children:[e.jsx(V,{size:12,className:"text-cyan"}),e.jsx("span",{children:"Samples in Queue"})]}),e.jsx("div",{className:"stat-card-num",children:"7 pending"}),e.jsx("div",{className:"stat-card-subtext",children:e.jsx("span",{style:{color:"var(--text-secondary)"},children:"Priority heap: SMP-042 head"})})]})]}),e.jsx("h2",{style:{fontFamily:"var(--font-display)",fontSize:"13px",letterSpacing:"0.08em",color:"var(--text-secondary)",marginBottom:"16px"},children:"SYSTEM MODULE STATUSES"}),e.jsx("div",{className:"modules-grid",children:M.map(t=>e.jsx(p,{glowColor:t.glow,className:"feature-status-card",children:e.jsxs("div",{className:"module-body",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{color:`var(--accent-${t.glow})`,display:"flex",alignItems:"center"},children:t.icon}),e.jsx("span",{style:{fontFamily:"var(--font-display)",fontSize:"12px",fontWeight:"800",color:"var(--text-primary)"},children:t.title})]}),e.jsx(j,{label:t.status,variant:t.variant})]}),e.jsx("p",{className:"module-desc",children:t.desc}),e.jsxs("div",{className:"module-footer",children:[e.jsxs("span",{style:{fontSize:"9px",fontFamily:"var(--font-mono)",color:"var(--text-muted)"},children:["PORT: ",t.path]}),e.jsx(z,{to:t.path,style:{textDecoration:"none"},children:e.jsxs(N,{variant:"ghost",size:"sm",style:{padding:"4px 10px",fontSize:"9px"},children:["Open ",e.jsx(G,{size:10,style:{marginLeft:"4px"}})]})})]})]})},t.id))}),e.jsxs("div",{className:"bottom-panel-grid",children:[e.jsx(p,{title:"SCADA SYSTEM CONSOLE",icon:e.jsx(A,{size:14,className:"text-cyan"}),children:e.jsx("div",{className:"terminal-viewport",ref:v,children:h.map(t=>e.jsxs("div",{className:`terminal-line terminal-type-${t.type}`,children:[e.jsxs("span",{className:"terminal-timestamp",children:["[",t.time,"]"]}),e.jsx("span",{className:"terminal-content",children:t.msg})]},t.id))})}),e.jsx(p,{title:"CRITICAL ALERTS DISPATCH",icon:e.jsx(S,{size:14,className:c>0?"text-red stat-pulse-red":"text-green"}),children:e.jsx("div",{className:"alerts-viewport",children:n.length>0?n.map(t=>e.jsxs("div",{className:`alert-item-card alert-item-${t.type}`,children:[e.jsxs("div",{className:"alert-meta",children:[e.jsxs("div",{className:"alert-code-row",children:[e.jsx("span",{className:`alert-code alert-code-${t.type}`,children:t.code}),e.jsx(j,{label:t.severity,variant:t.type==="critical"?"danger":"warning"})]}),e.jsx("span",{className:"alert-desc",children:t.desc}),e.jsxs("span",{className:"alert-time",children:["Triggered at ",t.time]})]}),e.jsx(N,{variant:"ghost",size:"sm",onClick:()=>E(t.id),style:{borderColor:t.type==="critical"?"var(--accent-red)":"var(--accent-yellow)",color:t.type==="critical"?"var(--accent-red)":"var(--accent-yellow)",padding:"4px var(--space-2)",fontSize:"9px"},children:"Acknowledge"})]},t.id)):e.jsxs("div",{className:"alert-empty",children:[e.jsx(W,{size:32,style:{color:"var(--accent-green)"}}),e.jsx("div",{className:"alert-empty-text",children:"ALL SYSTEMS OPERATIONAL"}),e.jsx("div",{className:"alert-empty-sub",children:"No outstanding dispatch alerts. Grid parameters normal."})]})})})]})]})}export{re as default};
