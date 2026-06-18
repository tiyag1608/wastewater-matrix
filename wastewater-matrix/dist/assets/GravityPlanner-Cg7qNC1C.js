import{r as v,u as z,j as e,R as E}from"./index-yO2fnI_U.js";import{a as d}from"./mockData-WaafYe-R.js";import{C as T}from"./Card-DNgtQ6wf.js";import{B as k}from"./Button--RD9cv2F.js";import{C as O}from"./compass-DWyEnJ5M.js";import{A as F}from"./arrow-right-CdLxB45S.js";import{T as A}from"./triangle-alert-Thsjx_2D.js";import"./createLucideIcon--UbIbcTq.js";function P(p,m){const i=new Map;return p.forEach(r=>{i.set(r.id,[])}),m.forEach(r=>{i.has(r.from)&&i.get(r.from).push({to:r.to,distance:r.distance,elevation:r.elevation,diameter:r.diameter,type:r.type})}),i}const W=(p,m,i)=>{const r=[[m,[m]]],a=new Set([m]);for(;r.length>0;){const[u,f]=r.shift();if(u===i)return f;const y=p.get(u)||[];for(const x of y)a.has(x.to)||(a.add(x.to),r.push([x.to,[...f,x.to]]))}return null};function H(){const[p,m]=v.useState("NODE-INLET"),[i,r]=v.useState("NODE-OUTLET"),[a,u]=v.useState(null),[f,y]=v.useState(!1),{showToast:x}=z(),S=v.useMemo(()=>P(d.nodes,d.edges),[]),D=()=>{if(p===i){x("Origin and destination stations cannot be the same node.","warning");return}const t=W(S,p,i);u(t),y(!0)},C=()=>{u(null),y(!1),m("NODE-INLET"),r("NODE-OUTLET")},j=v.useMemo(()=>{if(!a||a.length<=1)return null;let t=0,s=0,l=0;const c=[];for(let h=0;h<a.length-1;h++){const o=a[h],N=a[h+1],g=d.edges.find(w=>w.from===o&&w.to===N);g&&(t+=g.distance,g.type==="gravity"?s++:l++,c.push({from:o,to:N,distance:g.distance,type:g.type,elevation:g.elevation}))}const n=s+l,b=n>0?(s/n*100).toFixed(0):0;return{totalDistKm:(t/1e3).toFixed(2),hops:n,gravitySavings:b,segments:c}},[a]);return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .scada-planner-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-planner-layout {
            flex-direction: column;
          }
        }

        /* Config Card form */
        .planner-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .planner-field {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        /* SVG Map Viewport */
        .svg-planner-viewport {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-5);
          position: relative;
          overflow: hidden;
          background-image: 
            linear-gradient(rgba(30, 58, 95, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 95, 0.08) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .planner-svg {
          width: 100%;
          min-width: 960px;
          height: 300px;
        }

        /* Animated flowing dash offset for path lines */
        .scada-flowing-edge {
          stroke: var(--accent-cyan) !important;
          stroke-width: 4px !important;
          stroke-dasharray: 8, 4;
          animation: scada-flow 1.2s linear infinite;
        }

        @keyframes scada-flow {
          to {
            stroke-dashoffset: -24;
          }
        }

        /* Dimming styling for unselected map elements */
        .dimmed-map-element {
          opacity: 0.25;
          transition: opacity var(--transition-normal);
        }

        /* Pulsing dot highlight on path nodes */
        .path-node-glowing {
          stroke: #ffffff !important;
          stroke-width: 3.5px !important;
          filter: drop-shadow(0 0 8px var(--accent-cyan));
        }

        /* Steps row summary list */
        .path-step-chain {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: var(--space-2) var(--space-3);
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: var(--space-4);
          border-radius: var(--radius-sm);
          margin-top: var(--space-4);
        }

        .step-pill {
          background-color: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-2) var(--space-3);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .step-label {
          color: var(--text-primary);
        }

        .step-id {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-4);
        }

        .result-box {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          padding: var(--space-3) var(--space-4);
          border-radius: var(--radius-sm);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
      `}),e.jsxs("div",{className:"scada-planner-layout animate-slide-in",children:[e.jsx("div",{style:{flex:1.1,display:"flex",flexDirection:"column",gap:"20px",width:"100%",minWidth:"280px"},children:e.jsx(T,{title:"Flow Planner Terminal",icon:e.jsx(O,{size:14}),children:e.jsxs("div",{className:"planner-form",children:[e.jsxs("div",{className:"planner-field",children:[e.jsx("label",{children:"Origin Intake Hub"}),e.jsx("select",{value:p,onChange:t=>m(t.target.value),children:d.nodes.map(t=>e.jsxs("option",{value:t.id,children:[t.name," (",t.id,")"]},t.id))})]}),e.jsxs("div",{className:"planner-field",children:[e.jsx("label",{children:"Destination Outfall Hub"}),e.jsx("select",{value:i,onChange:t=>r(t.target.value),children:d.nodes.map(t=>e.jsxs("option",{value:t.id,children:[t.name," (",t.id,")"]},t.id))})]}),e.jsxs("div",{style:{display:"flex",gap:"10px",marginTop:"6px"},children:[e.jsx(k,{variant:"primary",onClick:D,style:{flex:1},disabled:p===i,children:"Find Path"}),e.jsx(k,{variant:"ghost",onClick:C,style:{borderColor:"var(--text-muted)",color:"var(--text-secondary)"},children:"Reset"})]})]})})}),e.jsx("div",{style:{flex:3,width:"100%",display:"flex",flexDirection:"column",gap:"20px"},children:e.jsxs(T,{title:"Topological Route Trace",children:[e.jsx("div",{className:"svg-planner-viewport",children:e.jsxs("svg",{viewBox:"0 0 1020 300",className:"planner-svg",children:[d.edges.map((t,s)=>{const l=d.nodes.find(o=>o.id===t.from),c=d.nodes.find(o=>o.id===t.to);if(!l||!c)return null;let n=!1;if(a){for(let o=0;o<a.length-1;o++)if(a[o]===t.from&&a[o+1]===t.to){n=!0;break}}const h=n?"scada-flowing-edge":f&&!n?"dimmed-map-element":"";return e.jsx("line",{x1:l.x,y1:l.y,x2:c.x,y2:c.y,stroke:n?"var(--accent-cyan)":"rgba(30, 58, 95, 0.4)",strokeWidth:n?"4":"2",strokeDasharray:t.type==="gravity"?"5,5":"none",className:h,style:{transition:"opacity 0.3s"}},`edge-${s}`)}),d.nodes.map(t=>{const s=a&&a.includes(t.id),c=s?"path-node-glowing":f&&!s?"dimmed-map-element":"";let n="#3b82f6";return t.type==="treatment"&&(n="var(--accent-purple)"),t.type==="junction"&&(n="var(--accent-cyan)"),t.type==="outlet"&&(n="var(--accent-green)"),e.jsxs("g",{transform:`translate(${t.x}, ${t.y})`,className:c,style:{transition:"opacity 0.3s"},children:[s&&e.jsx("circle",{r:"28",fill:"none",stroke:"var(--accent-cyan)",strokeWidth:"2",opacity:"0.4",style:{animation:"pulse-glow 1.5s infinite ease-in-out","--status-color":"var(--accent-cyan)"}}),e.jsx("circle",{r:"18",fill:n,stroke:s?"#ffffff":"var(--bg-secondary)",strokeWidth:s?"3.5":"1.5"}),e.jsx("text",{y:"30",fill:s?"var(--accent-cyan)":"var(--text-primary)",fontSize:"9px",fontWeight:s?"bold":"normal",fontFamily:"var(--font-display)",textAnchor:"middle",children:t.name}),e.jsx("text",{y:"4",fill:"#0a0e17",fontSize:"8px",fontWeight:"900",fontFamily:"var(--font-mono)",textAnchor:"middle",children:t.id.replace("NODE-","")})]},t.id)})]})}),f&&j&&e.jsxs("div",{style:{marginTop:"20px"},className:"animate-slide-in",children:[e.jsxs("div",{className:"results-grid",children:[e.jsxs("div",{className:"result-box",children:[e.jsx("span",{style:{fontSize:"9px",color:"var(--text-muted)",fontWeight:"700",textTransform:"uppercase"},children:"CUMULATIVE LENGTH"}),e.jsxs("span",{style:{fontSize:"15px",color:"var(--accent-cyan)",fontWeight:"800",fontFamily:"var(--font-mono)"},children:[j.totalDistKm," km"]})]}),e.jsxs("div",{className:"result-box",children:[e.jsx("span",{style:{fontSize:"9px",color:"var(--text-muted)",fontWeight:"700",textTransform:"uppercase"},children:"CONDUIT HOPS"}),e.jsxs("span",{style:{fontSize:"15px",color:"var(--text-primary)",fontWeight:"800",fontFamily:"var(--font-mono)"},children:[j.hops," sections"]})]}),e.jsxs("div",{className:"result-box",children:[e.jsx("span",{style:{fontSize:"9px",color:"var(--text-muted)",fontWeight:"700",textTransform:"uppercase"},children:"GRAVITY DRAINAGE SAVINGS"}),e.jsxs("span",{style:{fontSize:"15px",color:"var(--accent-green)",fontWeight:"800",fontFamily:"var(--font-mono)"},children:[j.gravitySavings,"% of path"]})]})]}),e.jsx("h4",{style:{fontSize:"11px",color:"var(--text-secondary)",fontFamily:"var(--font-display)",marginBottom:"8px",textTransform:"uppercase"},children:"Step-by-Step Drainage Ledger"}),e.jsx("div",{className:"path-step-chain",children:a.map((t,s)=>{const l=d.nodes.find(c=>c.id===t);return e.jsxs(E.Fragment,{children:[e.jsxs("div",{className:"step-pill",children:[e.jsx("span",{className:"step-label",children:l?l.name:t}),e.jsx("span",{className:"step-id",children:t})]}),s<a.length-1&&e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(F,{size:14,style:{color:"var(--accent-cyan)"}})})]},t)})})]}),f&&!a&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"36px var(--space-4)",border:"1px dashed var(--border-color)",borderRadius:"var(--radius-sm)",marginTop:"20px"},children:[e.jsx(A,{size:36,style:{color:"var(--accent-red)",marginBottom:"12px"}}),e.jsx("h4",{style:{color:"var(--accent-red)",fontFamily:"var(--font-display)"},children:"Discharge Path Offline"}),e.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"12px",marginTop:"4px",textAlign:"center",maxWidth:"400px"},children:"No connected path found between these stations under current topological configurations."})]})]})})]})]})}export{H as default};
