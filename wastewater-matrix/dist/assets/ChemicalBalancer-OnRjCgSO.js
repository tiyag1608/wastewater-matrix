import{r as c,u as E,j as a}from"./index-yO2fnI_U.js";import{b,d as m}from"./mockData-WaafYe-R.js";import{C as S}from"./Card-DNgtQ6wf.js";import{B as y}from"./Badge-CR4k_RDh.js";import{B as C}from"./Button--RD9cv2F.js";import{c as D}from"./createLucideIcon--UbIbcTq.js";import{R as L}from"./rotate-ccw-DUFDsdbP.js";import{S as O}from"./shield-check-ClUE0CXr.js";import{S as G}from"./shield-alert-0s9seUdP.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=D("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);function Y(){const[o,x]=c.useState({}),[l,g]=c.useState(null),[h,v]=c.useState(!1),[R,j]=c.useState(0),[k,u]=c.useState(null),{showToast:f}=E(),I=c.useMemo(()=>{const e={};return b.forEach(t=>{e[t.id]=t.name}),e},[]),M=c.useMemo(()=>{const e={};return Object.keys(o).forEach(t=>{const r=o[t];r&&(e[r]=t)}),e},[o]),z=e=>e>30?"HIGH":e>10?"MEDIUM":"LOW",N=()=>{const e={},t=new Set,r=[...m].sort((s,i)=>s.compatibleWith.length-i.compatibleWith.length),n=[];return r.forEach(s=>{const i=s.compatibleWith.find(p=>!t.has(p));i?(e[s.id]=i,t.add(i),n.push({chemId:s.id,stationId:i})):e[s.id]=null}),{currentAssignments:e,steps:n}},A=()=>{if(h)return;v(!0),x({}),u(null);const{steps:e}=N();let t=0;const r=setInterval(()=>{if(t<e.length){const n=e[t];x(s=>({...s,[n.chemId]:n.stationId})),u(n.chemId),t++}else clearInterval(r),v(!1),j(e.length),u(null),f(`Greedy balancing complete. Covered ${e.length}/6 stations.`,"success")},300)},F=()=>{x({}),g(null),j(0),f("Assignments reset.","info")},W=e=>{if(!l)return;const t=m.find(s=>s.id===l);if(!t)return;if(!t.compatibleWith.includes(e)){f(`${t.name} not compatible with ${I[e]||e}`,"error");return}const n={...o};Object.keys(n).forEach(s=>{n[s]===e&&(n[s]=null)}),n[l]=e,x(n),g(null),f(`Manually matched ${t.name} to station.`,"success")},$=e=>{h||g(t=>t===e?null:e)},d=c.useMemo(()=>{const e=Object.values(o).filter(n=>n!=null).length;if(e===0)return null;const t=e,r=6-t;return{perfectMatches:t,unassigned:r}},[o]);return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .scada-balancer-layout {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          width: 100%;
        }

        .balancer-top-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--space-4);
          flex-wrap: wrap;
          margin-bottom: var(--space-2);
        }

        .balancer-grid-container {
          display: flex;
          justify-content: space-between;
          position: relative;
          width: 100%;
        }

        .balancer-column {
          display: flex;
          flex-direction: column;
          gap: 16px;
          flex: 1;
        }

        /* Fixed Heights for aligned row connections */
        .balancer-node-card {
          height: 118px;
          margin: 0 !important;
          transition: all var(--transition-fast);
          border-width: 1px;
          border-style: solid;
          border-color: var(--border-color);
        }

        .chem-card-clickable {
          cursor: pointer;
        }

        .chem-card-clickable:hover {
          border-color: var(--accent-cyan);
        }

        .chem-card-selected {
          border-color: var(--accent-cyan) !important;
          box-shadow: var(--shadow-glow-cyan) !important;
          background-color: rgba(0, 212, 255, 0.04) !important;
        }

        /* Station indicators based on selection compatibility */
        .station-card-compatible {
          border-color: var(--accent-green) !important;
          box-shadow: 0 0 12px rgba(0, 255, 136, 0.25) !important;
          background-color: rgba(0, 255, 136, 0.04) !important;
          cursor: pointer;
        }

        .station-card-incompatible {
          border-color: var(--accent-red) !important;
          background-color: rgba(255, 77, 77, 0.05) !important;
          opacity: 0.6;
          cursor: not-allowed;
        }

        .station-card-clickable {
          cursor: pointer;
        }
        .station-card-clickable:hover {
          border-color: var(--accent-cyan);
        }

        /* SVG lines connector layer absolute overlay */
        .balancer-svg-canvas {
          width: 120px;
          height: 788px; /* 6 cards * 118px + 5 gaps * 16px */
          pointer-events: none;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .balancer-svg-canvas {
            display: none;
          }
          .balancer-grid-container {
            flex-direction: column;
            gap: var(--space-5);
          }
        }

        .connecting-line {
          stroke: var(--border-color);
          stroke-width: 1.5px;
          transition: all 0.3s ease;
        }

        .connecting-line.active-match {
          stroke: var(--accent-green);
          stroke-width: 3px;
          filter: drop-shadow(0 0 4px var(--accent-green));
        }

        .connecting-line.balancing-pulse {
          stroke: var(--accent-cyan);
          stroke-width: 3px;
          stroke-dasharray: 6,3;
          animation: scada-flow 1s linear infinite;
        }

        .compat-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
          margin-top: var(--space-2);
        }

        .summary-stats-box {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 10px var(--space-4);
          font-family: var(--font-mono);
          font-size: 11px;
          margin-bottom: var(--space-4);
        }
      `}),a.jsxs("div",{className:"scada-balancer-layout animate-slide-in",children:[a.jsxs("div",{className:"balancer-top-bar",children:[a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs(C,{variant:"primary",onClick:A,disabled:h,children:[a.jsx(H,{size:14})," Auto-Balance"]}),a.jsxs(C,{variant:"ghost",onClick:F,style:{borderColor:"var(--text-muted)",color:"var(--text-secondary)"},children:[a.jsx(L,{size:14})," Reset Assignments"]})]}),d&&a.jsxs("div",{className:"summary-stats-box",style:{margin:0,display:"flex",alignItems:"center",gap:"8px"},children:[a.jsxs("span",{style:{color:"var(--accent-cyan)",fontWeight:"700"},children:["Match Score: ",d.perfectMatches,"/6 Stations Covered"]}),a.jsx("span",{style:{color:"var(--border-color)",margin:"0 8px"},children:"|"}),a.jsxs("span",{children:["✅ ",d.perfectMatches," perfect matches"]}),a.jsx("span",{style:{color:"var(--border-color)",margin:"0 8px"},children:"|"}),a.jsx("span",{style:{color:d.unassigned>0?"var(--accent-yellow)":"var(--text-secondary)"},children:d.unassigned>0?`⚠️ ${d.unassigned} incompatible — manual review needed`:"🎉 0 incompatible"})]})]}),a.jsxs("div",{className:"balancer-headers-row",style:{display:"flex",justifyContent:"space-between",width:"100%",marginBottom:"12px"},children:[a.jsx("h3",{style:{flex:1,fontSize:"11px",color:"var(--text-secondary)",fontFamily:"var(--font-display)",textTransform:"uppercase",margin:0,letterSpacing:"0.05em"},children:"Available Chemicals"}),a.jsx("div",{style:{width:"120px"}}),a.jsx("h3",{style:{flex:1,fontSize:"11px",color:"var(--text-secondary)",fontFamily:"var(--font-display)",textTransform:"uppercase",margin:0,letterSpacing:"0.05em"},children:"Pump Stations"})]}),a.jsxs("div",{className:"balancer-grid-container",children:[a.jsx("div",{className:"balancer-column",children:m.map((e,t)=>{const r=o[e.id],s=`balancer-node-card chem-card-clickable ${l===e.id?"chem-card-selected":""}`;return a.jsx("div",{className:s,onClick:()=>$(e.id),children:a.jsx(S,{style:{margin:0,height:"100%"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",justifySelf:"start",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontWeight:"700",fontSize:"12px",fontFamily:"var(--font-mono)"},children:e.id}),r?a.jsx(y,{label:`Assigned: ${r}`,variant:"active"}):a.jsx(y,{label:"Unassigned",variant:"inactive"})]}),a.jsx("h4",{style:{fontSize:"13px",color:"var(--accent-purple)",margin:"4px 0 2px"},children:e.name}),a.jsx("div",{className:"compat-tags-row",children:e.compatibleWith.map(i=>a.jsx("span",{style:{fontSize:"8px",fontFamily:"var(--font-mono)",border:"1px solid var(--border-color)",padding:"1px 4px",color:"var(--text-secondary)"},children:i},i))}),a.jsxs("span",{style:{fontSize:"10px",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:["Flow threshold: ",e.requiredFlow," L/h"]})]})})},e.id)})}),a.jsx("svg",{className:"balancer-svg-canvas",children:m.map((e,t)=>{const r=o[e.id];if(!r)return null;const n=b.findIndex(w=>w.id===r);if(n===-1)return null;const s=t*134+59,i=n*134+59,p=h&&e.id===k;return a.jsx("line",{x1:"0",y1:s,x2:"120",y2:i,className:`connecting-line ${p?"balancing-pulse":"active-match"}`},`match-line-${e.id}`)})}),a.jsx("div",{className:"balancer-column",children:b.map((e,t)=>{const r=M[e.id],n=r?m.find(p=>p.id===r):null,s=z(e.chemicalDemand);let i="station-card-clickable";return l&&(i=m.find(B=>B.id===l).compatibleWith.includes(e.id)?"station-card-compatible":"station-card-incompatible"),a.jsx("div",{className:`balancer-node-card ${i}`,onClick:()=>W(e.id),children:a.jsx(S,{style:{margin:0,height:"100%"},children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%",justifyContent:"space-between"},children:[a.jsxs("div",{style:{display:"flex",justifySelf:"start",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontWeight:"700",fontSize:"12px",fontFamily:"var(--font-mono)"},children:e.id}),a.jsx(y,{label:`Demand: ${s}`,variant:s==="HIGH"?"danger":s==="MEDIUM"?"warning":"info"})]}),a.jsx("h4",{style:{fontSize:"13px",color:"var(--text-primary)",margin:"4px 0 2px"},children:e.name}),n?a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"11px",color:"var(--accent-green)",fontWeight:"700"},children:[a.jsx(O,{size:14}),a.jsx("span",{children:n.name})]}):a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",fontSize:"11px",color:"var(--text-muted)"},children:[a.jsx(G,{size:14}),a.jsx("span",{children:"NONE — needs assignment"})]}),a.jsxs("span",{style:{fontSize:"10px",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:["Flow Demand: ",e.chemicalDemand," L/h"]})]})})},e.id)})})]})]})]})}export{Y as default};
