import{r as l,u as L,j as e}from"./index-yO2fnI_U.js";import{p as R}from"./mockData-WaafYe-R.js";import{C as b}from"./Card-DNgtQ6wf.js";import{B as j}from"./Badge-CR4k_RDh.js";import{B as w}from"./Button--RD9cv2F.js";import{c as k}from"./createLucideIcon--UbIbcTq.js";import{C as A}from"./clock-35ALeppC.js";import{S as P}from"./shield-check-ClUE0CXr.js";import{S as T}from"./shield-alert-0s9seUdP.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=k("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=k("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);function K(){const[i,C]=l.useState(R),[o,p]=l.useState("risk"),[f,m]=l.useState("desc"),[S,g]=l.useState({}),{showToast:u}=L(),N=l.useMemo(()=>{const r=[...i];return r.sort((s,t)=>{let a=0;return o==="risk"?a=s.overflowPercent-t.overflowPercent:o==="volume"?a=s.currentVolume-t.currentVolume:o==="name"?a=s.name.localeCompare(t.name):o==="sector"&&(a=s.sector.localeCompare(t.sector)),f==="desc"?-a:a}),r},[i,o,f]),x=l.useMemo(()=>{let r=0,s=0,t=0;return i.forEach(a=>{const c=a.overflowPercent;c>=95?r++:c>=80?s++:t++}),{critical:r,warning:s,normal:t}},[i]),v=l.useMemo(()=>i.filter(r=>r.overflowPercent>=80),[i]),z=()=>{const r={},s=i.map(t=>{const a=(Math.random()*10+5)*(Math.random()>.4?1:-1),c=t.overflowPercent;let n=Math.max(0,Math.min(100,c+a));const d=Math.floor(n/100*t.maxCapacity);return n=Number((d/t.maxCapacity*100).toFixed(1)),r[t.id]=a>0?"up":"down",{...t,currentVolume:d,overflowPercent:n,status:n>=85?"CRITICAL":n>=60?"WARNING":"NOMINAL",lastUpdated:new Date().toISOString()}});g(r),C(s),setTimeout(()=>{g({})},1500),u("Telemetry parameters randomized. Sorter re-executed.","success")},M=(r,s)=>{u(`Crew dispatched to [${r}] (Level: ${s}%)`,"info")},I=r=>r<60?"var(--accent-green)":r<80?"var(--accent-yellow)":r<95?"#ff9900":"var(--accent-red)";return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .scada-overflow-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-overflow-layout {
            flex-direction: column;
          }
        }

        /* Stats Row */
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

        /* Sort Bar */
        .sort-action-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          margin-bottom: var(--space-4);
        }

        .sort-btn-group {
          display: flex;
          gap: var(--space-2);
          background-color: var(--bg-primary);
          padding: 2px;
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .sort-btn-option {
          background: none;
          border: none;
          padding: 6px 12px;
          font-family: var(--font-display);
          font-size: 10px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          cursor: pointer;
          border-radius: var(--radius-sm);
          transition: all var(--transition-fast);
        }

        .sort-btn-option.active {
          background-color: var(--accent-cyan);
          color: var(--bg-primary);
        }

        /* Sorter cards list */
        .sorter-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
        }

        .station-rank-card {
          border-left: 3px solid var(--border-color) !important;
          transition: all var(--transition-normal);
        }

        /* Rank Danger styling */
        .station-rank-card.rank-1,
        .station-rank-card.rank-2 {
          border-left-color: var(--accent-red) !important;
        }

        .station-rank-card.rank-1 {
          transform: scale(1.01);
          border-width: 1px 1px 1px 3px !important;
          background-color: rgba(255, 77, 77, 0.02) !important;
        }

        /* Simulation changed animation highlights */
        .station-rank-card.changed-up {
          background-color: rgba(255, 215, 0, 0.08) !important;
          border-color: var(--accent-yellow) !important;
        }
        .station-rank-card.changed-down {
          background-color: rgba(0, 255, 136, 0.08) !important;
          border-color: var(--accent-green) !important;
        }

        /* Card internals */
        .station-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }

        .rank-lbl-badge {
          font-family: var(--font-mono);
          font-size: 13px;
          font-weight: 800;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
        }

        .rank-danger-badge {
          border-color: var(--accent-red);
          color: var(--accent-red);
          text-shadow: 0 0 5px rgba(255, 77, 77, 0.3);
        }

        /* Progress bars styling */
        .scada-progress-bar-bg {
          width: 100%;
          height: 8px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          overflow: hidden;
          margin: var(--space-2) 0;
        }

        .scada-progress-bar-fill {
          height: 100%;
          transition: width 0.4s ease-out;
        }

        /* Pulsing style for critical cards */
        .critical-pulse-card {
          animation: critical-pulse 2s infinite alternate;
          border-color: var(--accent-red) !important;
        }

        @keyframes critical-pulse {
          0% { box-shadow: 0 0 4px rgba(255, 77, 77, 0.1); }
          100% { box-shadow: 0 0 15px rgba(255, 77, 77, 0.35); }
        }

        /* Alarm side panel */
        .alarm-sidebar-panel {
          position: sticky;
          top: var(--header-height);
          flex: 1.2;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .alarm-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          max-height: 50vh;
          overflow-y: auto;
        }

        .alarm-row {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-3);
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
        }
      `}),e.jsxs("div",{className:"scada-overflow-layout animate-slide-in",children:[e.jsxs("div",{style:{flex:3,width:"100%"},children:[e.jsxs("div",{className:"scada-stats-bar",children:[e.jsxs("span",{children:["🔴 CRITICAL (>95%): ",e.jsx("span",{className:"text-red",children:x.critical})]}),e.jsx("span",{style:{color:"var(--border-color)"},children:"|"}),e.jsxs("span",{children:["🟡 WARNING (80-95%): ",e.jsx("span",{className:"text-yellow",children:x.warning})]}),e.jsx("span",{style:{color:"var(--border-color)"},children:"|"}),e.jsxs("span",{children:["🟢 NORMAL: ",e.jsx("span",{className:"text-green",children:x.normal})]})]}),e.jsxs("div",{className:"sort-action-bar",children:[e.jsxs("div",{className:"sort-btn-group",children:[e.jsx("button",{className:`sort-btn-option ${o==="risk"?"active":""}`,onClick:()=>{p("risk"),m("desc")},children:"Risk % ▼"}),e.jsx("button",{className:`sort-btn-option ${o==="volume"?"active":""}`,onClick:()=>{p("volume"),m("desc")},children:"Volume"}),e.jsx("button",{className:`sort-btn-option ${o==="name"?"active":""}`,onClick:()=>{p("name"),m("asc")},children:"Name"}),e.jsx("button",{className:`sort-btn-option ${o==="sector"?"active":""}`,onClick:()=>{p("sector"),m("asc")},children:"Sector"})]}),e.jsxs(w,{variant:"ghost",onClick:z,style:{borderColor:"var(--accent-purple)",color:"var(--accent-purple)"},children:[e.jsx($,{size:14})," Simulate Pumping Jitter"]})]}),e.jsx("div",{className:"sorter-list",children:N.map((r,s)=>{const t=s+1,a=r.overflowPercent,c=t<=2,n=a>=95,d=I(a),y=S[r.id];let h="";return y==="up"?h="changed-up":y==="down"&&(h="changed-down"),e.jsx("div",{className:`station-rank-card rank-${t} ${n?"critical-pulse-card":""} ${h}`,children:e.jsx(b,{style:{margin:0,padding:"var(--space-3) var(--space-4)"},children:e.jsxs("div",{className:"valve-card-body",children:[e.jsxs("div",{className:"station-header-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsxs("div",{className:`rank-lbl-badge ${c?"rank-danger-badge":""}`,children:["#",t]}),e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"700",fontSize:"13px",color:"var(--text-primary)",textTransform:"uppercase",fontFamily:"var(--font-display)"},children:r.name}),e.jsxs("div",{style:{fontSize:"10px",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:["LOC: ",r.sector," • Ref ID: ",r.id]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[n&&e.jsx(j,{label:"CRITICAL ALERT",variant:"danger"}),e.jsx(j,{label:r.status,variant:a>=80?"danger":a>=60?"warning":"active"})]})]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"11px",fontWeight:"700",fontFamily:"var(--font-mono)"},children:[e.jsxs("span",{style:{color:"var(--text-secondary)"},children:[(r.currentVolume/1e3).toFixed(0)," / ",(r.maxCapacity/1e3).toFixed(0)," kL"]}),e.jsxs("span",{style:{color:d},children:[a.toFixed(1),"%"]})]}),e.jsx("div",{className:"scada-progress-bar-bg",children:e.jsx("div",{className:"scada-progress-bar-fill",style:{width:`${Math.min(a,100)}%`,backgroundColor:d,boxShadow:`0 0 8px ${d}30`}})})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"10px",color:"var(--text-muted)"},children:[e.jsxs("span",{className:"font-mono",children:["Cap: ",r.maxCapacity.toLocaleString()," L"]}),e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(A,{size:10})," ",new Date(r.lastUpdated).toLocaleTimeString()]})]})]})})},r.id)})})]}),e.jsx("div",{className:"alarm-sidebar-panel",children:e.jsxs(b,{title:"Station Alerts",icon:e.jsx(T,{size:14}),glowColor:"red",children:[e.jsxs("div",{style:{fontSize:"11px",color:"var(--text-secondary)",fontFamily:"var(--font-mono)",marginBottom:"12px"},children:["⚠️ ",v.length," stations require attention"]}),e.jsx("div",{className:"alarm-list",children:v.length>0?v.map(r=>e.jsxs("div",{className:"alarm-row",style:{borderLeft:"2px solid var(--accent-red)"},children:[e.jsxs("div",{style:{display:"flex",justifySelf:"start",justifyContent:"space-between",alignItems:"center",width:"100%"},children:[e.jsx("span",{style:{fontWeight:"700",fontSize:"11px",textTransform:"uppercase"},children:r.name}),e.jsxs("span",{className:"font-mono",style:{color:"var(--accent-red)",fontWeight:"800"},children:[r.overflowPercent,"%"]})]}),e.jsxs(w,{variant:"danger",size:"sm",onClick:()=>M(r.name,r.overflowPercent),style:{fontSize:"9px",padding:"4px var(--space-2)"},children:[e.jsx(D,{size:12})," Dispatch Crew"]})]},r.id)):e.jsxs("div",{style:{textAlign:"center",padding:"24px",color:"var(--text-muted)"},children:[e.jsx(P,{size:24,style:{color:"var(--accent-green)",marginBottom:"8px"}}),e.jsx("p",{style:{fontSize:"11px"},children:"All station levels nominal."})]})})]})})]})]})}export{K as default};
