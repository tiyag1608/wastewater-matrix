import{r as l,u as E,j as a}from"./index-yO2fnI_U.js";import{p as b}from"./mockData-WaafYe-R.js";import{C as S}from"./Card-DNgtQ6wf.js";import{B as d}from"./Button--RD9cv2F.js";import{C as L}from"./clock-35ALeppC.js";import{T as O}from"./triangle-alert-Thsjx_2D.js";import{R as C}from"./rotate-ccw-DUFDsdbP.js";import{c as A}from"./createLucideIcon--UbIbcTq.js";import{S as D}from"./shield-check-ClUE0CXr.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=A("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);function P(r){const[s,c]=l.useState(()=>[r]),p=s[s.length-1],y=s.length>1,f=l.useCallback(o=>{c(n=>[...n,o])},[]),h=l.useCallback(()=>{if(s.length<=1)return null;const o=s[s.length-1];return c(n=>n.slice(0,-1)),o},[s]),v=l.useCallback((o=r)=>{c([o])},[r]);return{state:p,push:f,undo:h,canUndo:y,history:s,clearHistory:v}}const H=r=>r==="NOMINAL"?"OPEN":r==="WARNING"?"PARTIAL":"CLOSED";function Y(){const[r,s]=l.useState(()=>{const e={};return b.forEach(t=>{e[t.id]=H(t.status)}),e}),[c,p]=l.useState(()=>{const e={};return b.forEach(t=>{e[t.id]=t.lastUpdated}),e}),{push:y,undo:f,canUndo:h,history:v,clearHistory:o}=P(null),{showToast:n}=E(),g=(e,t,i)=>{const x=r[e];if(x===i)return;s(j=>({...j,[e]:i}));const w=new Date().toISOString();p(j=>({...j,[e]:w})),y({valveId:e,valveName:t,oldState:x,newState:i,timestamp:w,operator:"OPR-001"}),n(`Valve [${t}] set to ${i}`,"success")},N=()=>{const e=f();e&&(s(t=>({...t,[e.valveId]:e.oldState})),p(t=>({...t,[e.valveId]:e.timestamp})),n(`Undone: [${e.valveName}] reverted to ${e.oldState}`,"warning"))},k=()=>{o(null),n("System History stack purged successfully","info")},m=l.useMemo(()=>v.filter(e=>e!==null).reverse(),[v]),u=e=>e==="OPEN"?"var(--accent-green)":e==="CLOSED"?"var(--accent-red)":"var(--accent-yellow)",T=e=>e==="OPEN"?"green":e==="CLOSED"?"red":"yellow",z=e=>e?Date.now()-new Date(e).getTime()>5*60*1e3:!1;return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .scada-valve-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-valve-layout {
            flex-direction: column;
          }
        }

        /* Valve grid card styling */
        .valve-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--space-4);
        }

        .valve-card-body {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .valve-state-display {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-2) var(--space-3);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
        }

        .valve-state-val {
          font-family: var(--font-mono);
          font-weight: 800;
          font-size: 13px;
        }

        .valve-time-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 10px;
          color: var(--text-secondary);
        }

        .valve-stale-warning {
          display: flex;
          align-items: center;
          gap: 4px;
          color: var(--accent-yellow);
          font-family: var(--font-mono);
          font-weight: 700;
        }

        .valve-btn-group {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-2);
        }

        /* History side panel styling */
        .valve-history-panel {
          position: sticky;
          top: var(--header-height);
          flex: 1.2;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .history-controls {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          padding-bottom: var(--space-3);
          border-bottom: 1px solid var(--border-color);
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          max-height: 50vh;
          overflow-y: auto;
          padding-right: 4px;
        }

        .history-row {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-2) var(--space-3);
          font-family: var(--font-mono);
          font-size: 11px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          transition: all var(--transition-fast);
        }

        .history-row.newest {
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-glow-cyan);
          background-color: rgba(0, 212, 255, 0.02);
        }

        .history-meta {
          display: flex;
          justify-content: space-between;
          color: var(--text-muted);
          font-size: 9px;
        }

        .history-flow {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2px;
        }

        /* Toast notifications */
        .scada-toast-banner {
          position: fixed;
          bottom: var(--space-6);
          right: var(--space-6);
          background-color: var(--bg-card);
          border: 1px solid var(--accent-cyan);
          border-radius: var(--radius-sm);
          padding: var(--space-3) var(--space-5);
          box-shadow: var(--shadow-glow-cyan);
          z-index: 200;
          display: flex;
          align-items: center;
          gap: var(--space-3);
          animation: slideUp var(--transition-fast) forwards;
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .scada-toast-banner.undo {
          border-color: var(--accent-yellow);
          box-shadow: 0 0 10px rgba(255, 215, 0, 0.25);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}),a.jsxs("div",{className:"scada-valve-layout animate-slide-in",children:[a.jsx("div",{style:{flex:3},children:a.jsx("div",{className:"valve-grid",children:b.map(e=>{const t=r[e.id],i=c[e.id],x=z(i);return a.jsx(S,{title:e.name,subtitle:e.sector,glowColor:T(t),style:{borderTop:`3px solid ${u(t)}`},children:a.jsxs("div",{className:"valve-card-body",children:[a.jsxs("div",{className:"valve-state-display",children:[a.jsx("span",{style:{fontSize:"10px",color:"var(--text-secondary)",textTransform:"uppercase",fontFamily:"var(--font-display)"},children:"Control Valve State"}),a.jsx("span",{className:"valve-state-val",style:{color:u(t)},children:t})]}),a.jsxs("div",{className:"valve-time-row",children:[a.jsxs("span",{className:"font-mono",children:["ID: ",e.id]}),a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px"},children:[a.jsx(L,{size:10})," ",new Date(i).toLocaleTimeString()]})]}),x&&a.jsxs("div",{className:"valve-stale-warning",children:[a.jsx(O,{size:12}),a.jsx("span",{children:"STALE telemetry >5m"})]}),a.jsxs("div",{className:"valve-btn-group",children:[a.jsx(d,{variant:t==="OPEN"?"success":"ghost",size:"sm",onClick:()=>g(e.id,e.name,"OPEN"),children:"OPEN"}),a.jsx(d,{variant:t==="PARTIAL"?"primary":"ghost",size:"sm",onClick:()=>g(e.id,e.name,"PARTIAL"),children:"PART"}),a.jsx(d,{variant:t==="CLOSED"?"danger":"ghost",size:"sm",onClick:()=>g(e.id,e.name,"CLOSED"),children:"CLOSE"})]})]})},e.id)})})}),a.jsx("div",{className:"valve-history-panel",children:a.jsxs(S,{title:"Undo Stack Ledger",icon:a.jsx(C,{size:14}),children:[a.jsxs("div",{className:"history-controls",children:[a.jsxs(d,{variant:"primary",onClick:N,disabled:!h,style:{width:"100%",padding:"12px var(--space-4)",fontSize:"13px"},children:[a.jsx(C,{size:16})," Undo Last Action"]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"6px"},children:[a.jsxs("span",{className:"font-mono",style:{fontSize:"11px",color:"var(--text-secondary)"},children:["Stack Depth: ",m.length," changes"]}),a.jsxs(d,{variant:"ghost",size:"sm",onClick:k,disabled:m.length===0,style:{borderColor:"rgba(255, 77, 77, 0.4)",color:"var(--accent-red)"},children:[a.jsx(I,{size:12})," Purge"]})]})]}),a.jsx("div",{className:"history-list",children:m.length>0?m.slice(0,10).map((e,t)=>a.jsxs("div",{className:`history-row ${t===0?"newest":""}`,children:[a.jsxs("div",{className:"history-meta",children:[a.jsx("span",{children:e.operator}),a.jsx("span",{children:new Date(e.timestamp).toLocaleTimeString()})]}),a.jsx("div",{style:{fontWeight:"700",color:"var(--text-primary)",textTransform:"uppercase",fontSize:"10px"},children:e.valveName}),a.jsxs("div",{className:"history-flow",children:[a.jsx("span",{style:{color:"var(--text-muted)"},children:e.oldState}),a.jsx("span",{style:{color:"var(--text-secondary)"},children:"→"}),a.jsx("span",{style:{color:u(e.newState),fontWeight:"800"},children:e.newState})]})]},t)):a.jsxs("div",{style:{textAlign:"center",padding:"40px var(--space-4)",color:"var(--text-muted)"},children:[a.jsx(D,{size:28,style:{color:"var(--accent-green)",marginBottom:"12px"}}),a.jsx("p",{style:{fontSize:"12px"},children:"History Stack Nominal"}),a.jsx("p",{style:{fontSize:"10px",marginTop:"4px"},children:"All transactions committed."})]})})]})})]})]})}export{Y as default};
