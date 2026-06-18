import{r as i,u as k,j as e}from"./index-yO2fnI_U.js";import{l as L}from"./mockData-WaafYe-R.js";import{C as n}from"./Card-DNgtQ6wf.js";import{B as S}from"./Button--RD9cv2F.js";import{B as p}from"./Badge-CR4k_RDh.js";import{F as C}from"./flask-conical-D3AzuNIp.js";import{c as I}from"./createLucideIcon--UbIbcTq.js";import{C as m}from"./circle-check-Bs2yQ3KK.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=I("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=I("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),H=L.map(s=>({id:s.sampleId,source:s.source,collectedAt:s.collectedAt,priority:s.priority,testType:s.testType}));function Q(){const[s,y]=i.useState(H),[h,N]=i.useState([]),[D,M]=i.useState(12),[a,g]=i.useState(null),[v,f]=i.useState(0),[j,T]=i.useState("Main Sewange Inlet"),[b,z]=i.useState("Heavy Metals Core Scan"),[l,x]=i.useState("MEDIUM"),{showToast:c}=k();i.useEffect(()=>{if(!a)return;f(0);const t=50,r=100/(2e3/t),o=setInterval(()=>{f(d=>d>=100?(clearInterval(o),N(u=>[{...a,completedAt:new Date().toISOString()},...u].slice(0,5)),M(u=>u+1),c(`Complete: ${a.id} moved to results`,"success"),g(null),100):d+r)},t);return()=>clearInterval(o)},[a]);const A=t=>{t.preventDefault();const r=`SMP-${Date.now().toString().slice(-6)}`,o={id:r,source:j,collectedAt:new Date().toISOString(),priority:l,testType:b};y(d=>[...d,o]),c(`Sample ${r} added to position #${s.length+1}`,"success")},E=()=>{if(s.length===0){c("No pending samples on queue.","warning");return}if(a){c("A sample is currently under laboratory analysis.","error");return}const[t,...r]=s;y(r),g(t)},P=t=>t==="HIGH"?e.jsx(p,{label:"HIGH",variant:"danger"}):t==="MEDIUM"?e.jsx(p,{label:"MEDIUM",variant:"warning"}):e.jsx(p,{label:"LOW",variant:"info"});return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"scada-queue-layout animate-slide-in",children:[e.jsxs("div",{style:{flex:2.5,width:"100%"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--space-4)",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{className:"queue-stats-row",style:{margin:0},children:[e.jsxs("span",{children:["WAITING: ",e.jsx("span",{className:"text-cyan",children:s.length})]}),e.jsx("span",{style:{color:"var(--border-color)"},children:"|"}),e.jsxs("span",{children:["PROCESSING: ",e.jsx("span",{className:"text-yellow",children:a?1:0})]}),e.jsx("span",{style:{color:"var(--border-color)"},children:"|"}),e.jsxs("span",{children:["COMPLETED TODAY: ",e.jsx("span",{className:"text-green",children:D})]})]}),e.jsx(S,{variant:"success",size:"md",onClick:E,disabled:s.length===0||!!a,loading:!!a,style:{fontWeight:"800"},children:"Process Next Queue Item"})]}),a&&e.jsxs(n,{className:"process-loader-card",title:`ANALYZING: ${a.id}`,icon:e.jsx(C,{size:14,className:"animate-pulse"}),children:[e.jsxs("div",{style:{fontSize:"12px",display:"flex",justifyContent:"space-between"},children:[e.jsxs("span",{children:["Source: ",a.source," (",a.testType,")"]}),e.jsxs("span",{className:"font-mono",children:[Math.floor(v),"%"]})]}),e.jsx("div",{className:"process-bar-container",children:e.jsx("div",{className:"process-bar-fill",style:{width:`${v}%`}})})]}),e.jsx(n,{title:"Pending Sample Conveyor",icon:e.jsx(C,{size:14}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:s.length>0?s.map((t,r)=>{const o=r===0;return e.jsx(n,{className:o?"queue-next-card":"",style:{padding:"var(--space-2) var(--space-4)",margin:0},children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"10px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsxs("span",{className:"font-mono text-cyan",style:{fontWeight:"800"},children:["[",r+1,"]"]}),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:{fontWeight:"700",fontSize:"13px",fontFamily:"var(--font-mono)"},children:t.id}),o&&e.jsx(p,{label:"NEXT TO PROCESS",variant:"info"})]}),e.jsxs("div",{style:{fontSize:"11px",color:"var(--text-secondary)",marginTop:"2px"},children:[t.source," • ",t.testType]})]})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"4px",fontSize:"10px",color:"var(--text-muted)"},children:[e.jsx(O,{size:10})," ",new Date(t.collectedAt).toLocaleTimeString()]}),P(t.priority)]})]})},t.id)}):e.jsxs("div",{style:{textAlign:"center",padding:"40px var(--space-4)",color:"var(--text-muted)"},children:[e.jsx(m,{size:36,style:{color:"var(--accent-green)",marginBottom:"12px"}}),e.jsx("h4",{children:"Carrier Conduit Cleared"}),e.jsx("p",{style:{fontSize:"11px",marginTop:"4px"},children:"No laboratory assay samples are currently waiting in the queue."})]})})}),e.jsx("div",{className:"completed-section",children:e.jsx(n,{title:"Results Released (Last 5)",icon:e.jsx(m,{size:14}),children:h.length>0?h.map(t=>e.jsxs("div",{className:"completed-row",children:[e.jsxs("div",{className:"completed-text",children:[e.jsx(m,{size:14,style:{color:"var(--accent-green)"}}),e.jsx("span",{className:"font-mono",style:{fontWeight:"700"},children:t.id}),e.jsxs("span",{style:{textDecoration:"none",color:"var(--text-secondary)",fontSize:"11px"},children:[t.source," (",t.testType,")"]})]}),e.jsxs("span",{className:"font-mono",style:{color:"var(--text-muted)",fontSize:"10px"},children:["Pushed at ",new Date(t.completedAt).toLocaleTimeString()]})]},t.id)):e.jsx("span",{style:{fontSize:"11px",color:"var(--text-muted)",textAlign:"center",padding:"16px",display:"block"},children:"No samples completed in this shift yet."})})})]}),e.jsx("div",{className:"valve-history-panel",style:{flex:1.2},children:e.jsx(n,{title:"Lab Ingest Station",icon:e.jsx(w,{size:14}),children:e.jsxs("form",{onSubmit:A,style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("label",{children:"Ingest Source Location"}),e.jsxs("select",{value:j,onChange:t=>T(t.target.value),children:[e.jsx("option",{value:"Main Raw Sewage Inlet A",children:"Sewage Inlet A"}),e.jsx("option",{value:"Primary Grit Chamber Exit",children:"Grit Chamber Exit"}),e.jsx("option",{value:"Equalization Reservoir B",children:"Equalization Basin B"}),e.jsx("option",{value:"Biological Aeration Reactor 2",children:"Aeration Reactor 2"}),e.jsx("option",{value:"Secondary Clarifier Pool A",children:"Clarifier Pool A"}),e.jsx("option",{value:"Post Sand Filter Complex 3",children:"Filter Complex 3"}),e.jsx("option",{value:"Disinfection Contact Stage",children:"Disinfection Contact"}),e.jsx("option",{value:"Final Effluent Outfall Lift",children:"Outfall Discharge"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("label",{children:"Assay Test Specification"}),e.jsxs("select",{value:b,onChange:t=>z(t.target.value),children:[e.jsx("option",{value:"Heavy Metals Core Scan",children:"Heavy Metals Core Scan"}),e.jsx("option",{value:"Suspended Solids Assay",children:"Suspended Solids Assay"}),e.jsx("option",{value:"E. Coli Pathogen Count",children:"E. Coli Pathogen Count"}),e.jsx("option",{value:"Total Dissolved Volatiles",children:"Total Dissolved Volatiles"}),e.jsx("option",{value:"Biological Oxygen Demand",children:"Biological Oxygen Demand"}),e.jsx("option",{value:"Industrial Cyanide Level",children:"Industrial Cyanide Level"}),e.jsx("option",{value:"Volatile Fatty Acid Ratio",children:"Volatile Fatty Acid Ratio"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("label",{children:"Urgency Priority"}),e.jsxs("div",{className:"priority-radio-group",children:[e.jsxs("label",{className:"priority-radio-item",children:[e.jsx("input",{type:"radio",name:"priority",value:"HIGH",checked:l==="HIGH",onChange:()=>x("HIGH")}),e.jsx("span",{style:{color:"var(--accent-red)",fontWeight:"700",fontSize:"10px"},children:"HIGH"})]}),e.jsxs("label",{className:"priority-radio-item",children:[e.jsx("input",{type:"radio",name:"priority",value:"MEDIUM",checked:l==="MEDIUM",onChange:()=>x("MEDIUM")}),e.jsx("span",{style:{color:"var(--accent-yellow)",fontWeight:"700",fontSize:"10px"},children:"MEDIUM"})]}),e.jsxs("label",{className:"priority-radio-item",children:[e.jsx("input",{type:"radio",name:"priority",value:"LOW",checked:l==="LOW",onChange:()=>x("LOW")}),e.jsx("span",{style:{color:"var(--accent-cyan)",fontWeight:"700",fontSize:"10px"},children:"LOW"})]})]})]}),e.jsxs(S,{type:"submit",variant:"primary",style:{width:"100%",marginTop:"8px"},children:[e.jsx(w,{size:16})," Enqueue Sample"]})]})})})]})]})}export{Q as default};
