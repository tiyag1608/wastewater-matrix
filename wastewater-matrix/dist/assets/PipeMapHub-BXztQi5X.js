import{j as e,r as d}from"./index-yO2fnI_U.js";import{a as n}from"./mockData-WaafYe-R.js";import{C}from"./Card-DNgtQ6wf.js";import{B as j}from"./Badge-CR4k_RDh.js";import{A as z}from"./arrow-right-CdLxB45S.js";import{c as E}from"./createLucideIcon--UbIbcTq.js";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=E("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);function M({status:r="online",label:x,size:c="md",style:m={},className:g="",...v}){const p=(()=>{switch(r){case"online":return"var(--accent-green)";case"warning":return"var(--accent-yellow)";case"critical":return"var(--accent-red)";case"offline":default:return"var(--text-muted)"}})();return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .scada-status-indicator {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
        }

        .scada-status-dot {
          border-radius: 50%;
          display: inline-block;
          background-color: var(--dot-color);
        }

        .scada-status-dot-sm {
          width: 6px;
          height: 6px;
        }

        .scada-status-dot-md {
          width: 8px;
          height: 8px;
        }

        .scada-status-dot-lg {
          width: 12px;
          height: 12px;
        }

        .scada-status-label {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Pulse animations for online and critical */
        .scada-pulse-online {
          animation: pulse-online 2s infinite ease-in-out;
        }

        .scada-pulse-critical {
          animation: pulse-critical 1s infinite ease-in-out;
        }

        @keyframes pulse-online {
          0%, 100% {
            box-shadow: 0 0 0px var(--accent-green);
          }
          50% {
            box-shadow: 0 0 8px var(--accent-green);
          }
        }

        @keyframes pulse-critical {
          0%, 100% {
            box-shadow: 0 0 0px var(--accent-red);
            opacity: 1;
          }
          50% {
            box-shadow: 0 0 10px var(--accent-red);
            opacity: 0.5;
          }
        }
      `}),e.jsxs("div",{className:`scada-status-indicator ${g}`,style:m,...v,children:[e.jsx("span",{className:`scada-status-dot scada-status-dot-${c} ${r==="online"?"scada-pulse-online":r==="critical"?"scada-pulse-critical":""}`,style:{"--dot-color":p}}),x&&e.jsx("span",{className:"scada-status-label",children:x})]})]})}function B(){const[r,x]=d.useState("NODE-INLET"),[c,m]=d.useState(null),[g,v]=d.useState({x:0,y:0}),y=d.useMemo(()=>{const a={};return n.nodes.forEach(s=>{a[s.id]=[]}),n.edges.forEach(s=>{a[s.from]&&a[s.from].push({to:s.to,distance:s.distance,elevation:s.elevation,diameter:s.diameter,type:s.type})}),a},[]),p=d.useMemo(()=>{const a=n.nodes.length,s=n.edges.length,t=n.edges.filter(o=>o.type==="gravity").length,i=n.edges.filter(o=>o.type==="pressurized").length;return{totalNodes:a,totalEdges:s,gravityLines:t,pressurizedLines:i}},[]),h=d.useMemo(()=>n.nodes.find(a=>a.id===r),[r]),f=d.useMemo(()=>{if(!r)return[];const a=y[r]||[];return[...n.edges.filter(t=>t.to===r).map(t=>({to:t.from,distance:t.distance,elevation:-t.elevation,diameter:t.diameter,type:t.type,isIncoming:!0})),...a.map(t=>({...t,isIncoming:!1}))]},[y,r]),b=a=>{switch(a){case"source":return"#3b82f6";case"treatment":return"var(--accent-purple)";case"junction":return"var(--accent-cyan)";case"outlet":default:return"var(--accent-green)"}},N=(a,s)=>{const t=a.currentTarget.getBoundingClientRect(),i=a.clientX-t.left+15,o=a.clientY-t.top+15;v({x:i,y:o}),m(s)};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .pipe-map-layout {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .pipe-map-layout {
            flex-direction: column;
          }
        }

        /* Stats Bar */
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

        /* SVG Map Container */
        .svg-map-frame {
          position: relative;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: var(--space-5);
          overflow: hidden;
          /* SCADA grid background pattern */
          background-image: 
            linear-gradient(rgba(30, 58, 95, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 95, 0.08) 1px, transparent 1px);
          background-size: 20px 20px;
        }

        .svg-container {
          width: 100%;
          min-width: 960px;
          height: 320px;
        }

        /* Glow effects for active pipelines */
        .glowing-edge {
          stroke: var(--accent-cyan) !important;
          stroke-width: 3.5px !important;
          filter: drop-shadow(0 0 5px var(--accent-cyan));
        }

        /* Hover Edge tooltip */
        .edge-tooltip {
          position: absolute;
          background-color: var(--bg-secondary);
          border: 1px solid var(--accent-cyan);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 10px;
          pointer-events: none;
          z-index: 10;
          box-shadow: var(--shadow-glow-cyan);
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* Legend Container */
        .map-legend {
          display: flex;
          flex-wrap: wrap;
          gap: var(--space-4);
          margin-top: var(--space-4);
          padding-top: var(--space-3);
          border-top: 1px solid var(--border-color);
        }

        .legend-group {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          color: var(--text-secondary);
        }

        .legend-circle {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .legend-line {
          width: 30px;
          height: 2px;
        }

        /* Details sidebar */
        .node-details-sidebar {
          position: sticky;
          top: var(--header-height);
          flex: 1.2;
          min-width: 320px;
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
        }

        .neighbors-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-2);
          margin-top: var(--space-2);
        }

        .neighbor-row {
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          padding: 8px 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }
      `}),e.jsxs("div",{className:"scada-overflow-layout animate-slide-in",children:[e.jsxs("div",{style:{flex:3,width:"100%"},children:[e.jsxs("div",{className:"scada-stats-bar",children:[e.jsxs("span",{children:["NODES: ",e.jsx("span",{className:"text-cyan",children:p.totalNodes})]}),e.jsx("span",{style:{color:"var(--border-color)"},children:"|"}),e.jsxs("span",{children:["CONNECTIONS: ",e.jsx("span",{className:"text-cyan",children:p.totalEdges})]}),e.jsx("span",{style:{color:"var(--border-color)"},children:"|"}),e.jsxs("span",{children:["GRAVITY LINES: ",e.jsx("span",{className:"text-green",children:p.gravityLines})]}),e.jsx("span",{style:{color:"var(--border-color)"},children:"|"}),e.jsxs("span",{children:["PRESSURIZED LINES: ",e.jsx("span",{className:"text-yellow",children:p.pressurizedLines})]})]}),e.jsxs("div",{className:"svg-map-frame",children:[c&&e.jsxs("div",{className:"edge-tooltip",style:{left:`${g.x}px`,top:`${g.y}px`},children:[e.jsx("span",{style:{fontWeight:"800",color:"var(--accent-cyan)"},children:"CONDUIT AUDIT"}),e.jsxs("span",{children:["Distance: ",c.distance,"m"]}),e.jsxs("span",{children:["Slope Elev: ",c.elevation,"m"]}),e.jsxs("span",{children:["Diameter: Ø ",c.diameter,"mm"]}),e.jsxs("span",{children:["Mode: ",c.type.toUpperCase()]})]}),e.jsxs("svg",{viewBox:"0 0 1020 300",className:"svg-container",children:[n.edges.map((a,s)=>{const t=n.nodes.find(l=>l.id===a.from),i=n.nodes.find(l=>l.id===a.to);if(!t||!i)return null;const o=a.from===r||a.to===r;return e.jsx("line",{x1:t.x,y1:t.y,x2:i.x,y2:i.y,stroke:o?"var(--accent-cyan)":"rgba(30, 58, 95, 0.4)",strokeWidth:o?"3.5":"2",strokeDasharray:a.type==="gravity"?"5,5":"none",className:o?"glowing-edge":"",style:{transition:"stroke 0.25s, stroke-width 0.25s",cursor:"help"},onMouseMove:l=>N(l,a),onMouseLeave:()=>m(null)},`edge-${s}`)}),n.edges.map((a,s)=>{const t=n.nodes.find(u=>u.id===a.from),i=n.nodes.find(u=>u.id===a.to);if(!t||!i)return null;const o=i.x-t.x,l=i.y-t.y,w=t.x+o*.5,k=t.y+l*.5,S=Math.atan2(l,o)*(180/Math.PI);return e.jsx("polygon",{points:"0,-4 8,0 0,4",fill:a.from===r||a.to===r?"var(--accent-cyan)":"var(--text-muted)",transform:`translate(${w}, ${k}) rotate(${S})`},`arrow-${s}`)}),n.nodes.map(a=>{const s=a.id===r,t=b(a.type);return e.jsxs("g",{transform:`translate(${a.x}, ${a.y})`,onClick:()=>x(a.id),style:{cursor:"pointer"},children:[s&&e.jsx("circle",{r:"34",fill:"none",stroke:"var(--accent-cyan)",strokeWidth:"1.5",opacity:"0.3",style:{animation:"pulse-glow 1.5s infinite ease-in-out","--status-color":"var(--accent-cyan)"}}),e.jsx("circle",{r:s?28:20,fill:t,stroke:s?"#ffffff":"var(--bg-secondary)",strokeWidth:s?"3":"1.5",style:{transition:"all 0.25s"}}),e.jsx("text",{y:s?"42":"32",fill:s?"var(--accent-cyan)":"var(--text-primary)",fontSize:"9px",fontWeight:s?"bold":"normal",fontFamily:"var(--font-display)",textAnchor:"middle",children:a.name}),e.jsx("text",{y:"4",fill:"#0a0e17",fontSize:"9px",fontWeight:"900",fontFamily:"var(--font-mono)",textAnchor:"middle",children:a.id.replace("NODE-","")})]},a.id)})]}),e.jsxs("div",{className:"map-legend",children:[e.jsxs("div",{className:"legend-group",children:[e.jsx("div",{className:"legend-circle",style:{backgroundColor:"#3b82f6"}}),e.jsx("span",{children:"Source"})]}),e.jsxs("div",{className:"legend-group",children:[e.jsx("div",{className:"legend-circle",style:{backgroundColor:"var(--accent-purple)"}}),e.jsx("span",{children:"Treatment"})]}),e.jsxs("div",{className:"legend-group",children:[e.jsx("div",{className:"legend-circle",style:{backgroundColor:"var(--accent-cyan)"}}),e.jsx("span",{children:"Junction"})]}),e.jsxs("div",{className:"legend-group",children:[e.jsx("div",{className:"legend-circle",style:{backgroundColor:"var(--accent-green)"}}),e.jsx("span",{children:"Outlet"})]}),e.jsxs("div",{className:"legend-group",children:[e.jsx("div",{className:"legend-line",style:{borderTop:"2px dashed var(--accent-cyan)"}}),e.jsx("span",{children:"Gravity Conduit"})]}),e.jsxs("div",{className:"legend-group",children:[e.jsx("div",{className:"legend-line",style:{borderTop:"2px solid var(--border-color)",backgroundColor:"var(--accent-yellow)",height:"2px"}}),e.jsx("span",{children:"Pressurized Line"})]})]})]})]}),h&&e.jsx("div",{className:"node-details-sidebar",children:e.jsx(C,{title:"Node Telemetry",icon:e.jsx(I,{size:14}),glowColor:"cyan",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{borderBottom:"1px solid var(--border-color)",paddingBottom:"10px"},children:[e.jsx("h3",{style:{fontSize:"15px",color:"var(--text-primary)"},children:h.name}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"6px",alignItems:"center"},children:[e.jsx(j,{label:h.type,variant:"info"}),e.jsx("span",{className:"font-mono",style:{fontSize:"10px",color:"var(--text-muted)"},children:h.id})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"12px",borderBottom:"1px solid var(--border-color)",paddingBottom:"8px"},children:[e.jsx("span",{style:{color:"var(--text-secondary)"},children:"Operating Status"}),e.jsx(M,{status:"online",label:"ACTIVE",size:"sm"})]}),e.jsxs("div",{children:[e.jsxs("span",{style:{fontSize:"9px",color:"var(--text-muted)",fontWeight:"700",textTransform:"uppercase",fontFamily:"var(--font-display)"},children:["Pipeline Connections (",f.length,")"]}),e.jsx("div",{className:"neighbors-list",children:f.map((a,s)=>e.jsxs("div",{className:"neighbor-row",children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(z,{size:12,style:{color:a.isIncoming?"var(--text-muted)":"var(--accent-cyan)",transform:a.isIncoming?"rotate(180deg)":"none"}}),e.jsx("span",{style:{fontWeight:"600"},children:a.to.replace("NODE-","")})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",fontSize:"10px",fontFamily:"var(--font-mono)"},children:[e.jsxs("span",{style:{color:"var(--text-muted)"},children:[a.distance,"m"]}),e.jsx(j,{label:a.type,variant:a.type==="gravity"?"active":"warning"})]})]},s))})]})]})})})]})]})}export{B as default};
