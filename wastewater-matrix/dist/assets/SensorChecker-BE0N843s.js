import{r as n,u as k,j as e}from"./index-yO2fnI_U.js";import{s as g}from"./mockData-WaafYe-R.js";import{C as u}from"./Card-DNgtQ6wf.js";import{B as A}from"./Button--RD9cv2F.js";import{A as C}from"./activity-BuPHIhcX.js";import{C as T}from"./circle-check-Bs2yQ3KK.js";import{C as L}from"./clock-35ALeppC.js";import{T as y}from"./triangle-alert-Thsjx_2D.js";import{c as D}from"./createLucideIcon--UbIbcTq.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=D("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);function X(){const[p,m]=n.useState(""),[t,j]=n.useState(null),[x,N]=n.useState([]),[b,h]=n.useState(!1),{showToast:o}=k(),c=n.useMemo(()=>{const a=Object.values(g),s=a.length,r=a.filter(l=>l.status==="ACTIVE").length,i=a.filter(l=>l.status==="FAULTY").length,d=a.filter(l=>l.status==="INACTIVE").length;return{total:s,active:r,faulty:i,inactive:d}},[]),f=a=>{if(!a)return 0;const s=Date.now()-new Date(a).getTime(),r=Math.floor(s/(60*1e3));return r>0?r:2},v=a=>{const s=a.trim().toUpperCase();if(!s)return;const r=g[s];let i=null;r?r.status==="FAULTY"?(i={id:s,type:"FAULTY",data:r},o(`Sensor [${s}] checked: FAULTY`,"warning")):(i={id:s,type:"VALID",data:r},o(`Sensor [${s}] checked: VALID`,"success")):(i={id:s,type:"INVALID",data:null},o(`Sensor [${s}] not found in registry`,"error"),h(!0),setTimeout(()=>h(!1),400)),j(i),N(d=>{const l=d.filter(I=>I.id!==s);return[{id:s,type:i.type},...l].slice(0,5)})},S=a=>{a.preventDefault(),v(p)},w=a=>{m(a),v(a)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"animate-slide-in sensor-checker-viewport",children:[e.jsxs("div",{className:"scada-stats-row",children:[e.jsxs("div",{className:"stat-cell",children:[e.jsx("span",{className:"stat-cell-lbl",children:"Total Registered"}),e.jsx("span",{className:"stat-cell-val text-cyan",children:c.total})]}),e.jsxs("div",{className:"stat-cell",children:[e.jsx("span",{className:"stat-cell-lbl",children:"Active Signals"}),e.jsx("span",{className:"stat-cell-val text-green",children:c.active})]}),e.jsxs("div",{className:"stat-cell",children:[e.jsx("span",{className:"stat-cell-lbl",children:"Faulty Transmitters"}),e.jsx("span",{className:"stat-cell-val text-red",children:c.faulty})]}),e.jsxs("div",{className:"stat-cell",children:[e.jsx("span",{className:"stat-cell-lbl",children:"Inactive Nodes"}),e.jsx("span",{className:"stat-cell-val text-yellow",children:c.inactive})]})]}),e.jsx(u,{title:"Signal Integrity Diagnostics",icon:e.jsx(C,{size:14}),children:e.jsxs("form",{onSubmit:S,className:"checker-input-group",children:[e.jsx("input",{type:"text",className:"checker-input",placeholder:"ENTER MASTER SENSOR ID (e.g. SEN-2024-001)",value:p,onChange:a=>m(a.target.value.toUpperCase())}),e.jsx(A,{type:"submit",variant:"primary",style:{height:"48px",minWidth:"110px"},children:"Verify ID"})]})}),t&&e.jsx("div",{className:`verification-card verification-card-${t.type} ${b?"shake-effect":""}`,children:e.jsxs(u,{style:{margin:0},children:[t.type==="VALID"&&e.jsxs("div",{children:[e.jsxs("div",{className:"verification-header text-green",children:[e.jsx(T,{size:18}),e.jsx("span",{children:"VERIFICATION COMPLETE: SENSOR VERIFIED"})]}),e.jsx("p",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:"Registry checksum matched. Probe telemetry transmitting at nominal thresholds."}),e.jsxs("div",{className:"details-grid",children:[e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Sensor Name"}),e.jsx("span",{className:"detail-item-val",children:t.data.name})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Sector Location"}),e.jsx("span",{className:"detail-item-val",children:t.data.location})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Sensing Class"}),e.jsx("span",{className:"detail-item-val",children:t.data.type})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Last Heartbeat"}),e.jsxs("span",{className:"detail-item-val font-mono",style:{display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(L,{size:12})," ",f(t.data.lastPing)," mins ago"]})]})]})]}),t.type==="FAULTY"&&e.jsxs("div",{children:[e.jsxs("div",{className:"verification-header text-yellow",children:[e.jsx(y,{size:18}),e.jsx("span",{children:"DIAGNOSTICS FAILED: SENSOR FAULTY"})]}),e.jsx("p",{style:{fontSize:"13px",color:"var(--text-secondary)"},children:"High package drop ratios detected. Hardware diagnostics required immediately."}),e.jsxs("div",{className:"details-grid",style:{borderColor:"var(--accent-yellow)"},children:[e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Sensor Name"}),e.jsx("span",{className:"detail-item-val",children:t.data.name})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Sector Location"}),e.jsx("span",{className:"detail-item-val",children:t.data.location})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Sensing Class"}),e.jsx("span",{className:"detail-item-val",children:t.data.type})]}),e.jsxs("div",{className:"detail-item",children:[e.jsx("span",{className:"detail-item-lbl",children:"Last Heartbeat"}),e.jsxs("span",{className:"detail-item-val font-mono",style:{color:"var(--accent-yellow)",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(y,{size:12})," ",f(t.data.lastPing)," mins ago"]})]})]})]}),t.type==="INVALID"&&e.jsxs("div",{children:[e.jsxs("div",{className:"verification-header text-red",children:[e.jsx(z,{size:18}),e.jsx("span",{children:"DIAGNOSTICS EXCEPTION: SENSOR NOT FOUND"})]}),e.jsxs("p",{style:{fontSize:"13px",color:"var(--text-primary)",fontWeight:"bold"},children:["ID reference [",t.id,"] is not registered in the plant system registry."]}),e.jsx("p",{style:{fontSize:"12px",color:"var(--text-secondary)",marginTop:"6px"},children:"Please verify the ID number is correct and confirm the transceiver installation has been synchronized."})]})]})}),e.jsxs("div",{className:"recent-chips-container",children:[e.jsx("span",{className:"font-mono",style:{fontSize:"10px",color:"var(--text-muted)",fontWeight:"700",textTransform:"uppercase",letterSpacing:"0.05em"},children:"Verification Audit Log"}),e.jsx("div",{className:"recent-chips-row",children:x.length>0?x.map((a,s)=>e.jsxs("div",{className:"recent-chip",onClick:()=>w(a.id),children:[e.jsx("span",{children:a.id}),a.type==="VALID"?e.jsx("span",{className:"text-green",children:"✅"}):a.type==="FAULTY"?e.jsx("span",{className:"text-yellow",children:"⚠️"}):e.jsx("span",{className:"text-red",children:"❌"})]},s)):e.jsx("span",{style:{fontSize:"11px",color:"var(--text-muted)"},children:"No verification pings issued during this session."})})]})]})]})}export{X as default};
