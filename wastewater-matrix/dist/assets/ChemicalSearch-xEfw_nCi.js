import{r as p,j as e}from"./index-yO2fnI_U.js";import{c as j}from"./mockData-WaafYe-R.js";import{C as g}from"./Card-DNgtQ6wf.js";import{B as m}from"./Badge-CR4k_RDh.js";import{B as S}from"./Button--RD9cv2F.js";import{T as R}from"./triangle-alert-Thsjx_2D.js";import{S as T,D as N}from"./server-iRNlPEQR.js";import"./createLucideIcon--UbIbcTq.js";class w{constructor(){this.children={},this.items=[]}}class E{constructor(){this.root=new w}insert(c,o){let i=this.root;const r=c.toLowerCase().trim();for(let l of r)i.children[l]||(i.children[l]=new w),i=i.children[l],i.items.some(h=>h.id===o.id)||i.items.push(o)}search(c){let o=this.root;const i=c.toLowerCase().trim();for(let r of i){if(!o.children[r])return[];o=o.children[r]}return o.items}}const I=n=>n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");function V(){const[n,c]=p.useState(""),[o,i]=p.useState("all"),[r,l]=p.useState(null),h=p.useMemo(()=>{const a=new E;return j.forEach(s=>{a.insert(s.name,s),s.name.split(/\s+/).forEach(d=>a.insert(d,s)),a.insert(s.id,s),s.location.split(/\s+/).forEach(d=>a.insert(d,s))}),a},[]),y=p.useMemo(()=>{let a=[];return n.trim()?a=h.search(n):a=j,o!=="all"&&(a=a.filter(s=>s.type===o)),a},[n,o,h]),f=(a,s)=>{if(!s.trim())return a;const x=I(s),v=new RegExp(`(${x})`,"gi"),d=a.split(v);return e.jsx("span",{children:d.map((u,C)=>v.test(u)?e.jsx("span",{style:t.highlightText,children:u},C):u)})},b=a=>{switch(a){case"NOMINAL":case"FLOWING":return"active";case"LOW_STOCK":case"ISOLATED":return"warning";case"DEPLETED":case"LEAKING":default:return"danger"}};return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:`
        .scada-search-container {
          display: flex;
          gap: var(--space-5);
          align-items: flex-start;
          width: 100%;
        }

        @media (max-width: 992px) {
          .scada-search-container {
            flex-direction: column;
          }
        }

        /* Search input with blinking cursor custom colors */
        .scada-search-input {
          width: 100%;
          padding: 14px 18px;
          font-family: var(--font-mono);
          font-size: 14px;
          background-color: var(--bg-primary);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-sm);
          color: var(--text-primary);
          caret-color: var(--accent-cyan);
          outline: none;
          transition: all var(--transition-fast);
        }

        .scada-search-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: var(--shadow-glow-cyan);
        }

        /* Tabs styling */
        .scada-search-tabs {
          display: flex;
          gap: var(--space-2);
          margin-top: var(--space-4);
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 2px;
        }

        .search-tab-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          padding: var(--space-2) var(--space-4);
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
          letter-spacing: 0.05em;
        }

        .search-tab-btn:hover {
          color: var(--accent-cyan);
        }

        .search-tab-btn.active {
          color: var(--accent-cyan);
          border-bottom-color: var(--accent-cyan);
          text-shadow: var(--shadow-glow-cyan);
        }

        /* Results container */
        .scada-results-viewport {
          max-height: 60vh;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-3);
          margin-top: var(--space-4);
          padding-right: 6px;
        }

        /* Result card with left border hover highlights */
        .scada-result-card {
          border-left: 3px solid transparent !important;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .scada-result-card:hover {
          border-left-color: var(--accent-cyan) !important;
          background-color: var(--bg-secondary) !important;
        }

        .scada-result-card.selected {
          border-left-color: var(--accent-cyan) !important;
          background-color: rgba(0, 212, 255, 0.04) !important;
          box-shadow: var(--shadow-glow-cyan) !important;
        }

        /* Detail panel sliding transition */
        .scada-detail-panel {
          position: sticky;
          top: 0;
          flex: 1.5;
          min-width: 320px;
          animation: slideRight var(--transition-normal) forwards;
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}),e.jsxs("div",{className:"animate-slide-in scada-search-container",children:[e.jsx("div",{style:{flex:2.5,width:"100%"},children:e.jsxs(g,{children:[e.jsx("input",{type:"text",className:"scada-search-input",placeholder:"ENTER TRANSCEIVER OR CHEMICAL SEARCH QUERY (e.g. Chlor, Pipeline)...",value:n,onChange:a=>c(a.target.value),autoFocus:!0}),e.jsxs("div",{className:"scada-search-tabs",children:[e.jsx("button",{className:`search-tab-btn ${o==="all"?"active":""}`,onClick:()=>i("all"),children:"All Assets"}),e.jsx("button",{className:`search-tab-btn ${o==="chemical"?"active":""}`,onClick:()=>i("chemical"),children:"Chemicals"}),e.jsx("button",{className:`search-tab-btn ${o==="pipe"?"active":""}`,onClick:()=>i("pipe"),children:"Pipelines"})]}),e.jsx("div",{style:t.counterRow,children:e.jsxs("span",{className:"font-mono",children:[y.length," telemetry records matching query."]})}),e.jsx("div",{className:"scada-results-viewport",children:y.length>0?y.map(a=>{const s=r&&r.id===a.id,x=a.type==="chemical";return e.jsx("div",{onClick:()=>l(a),children:e.jsx(g,{className:`scada-result-card ${s?"selected":""}`,style:{padding:"var(--space-3) var(--space-4)"},children:e.jsxs("div",{style:t.cardLayout,children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{style:t.itemTitle,children:f(a.name,n)}),e.jsx(m,{label:a.type,variant:x?"info":"inactive"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",marginTop:"6px",fontSize:"11px",color:"var(--text-secondary)"},children:[e.jsxs("span",{className:"font-mono",children:["ID: ",f(a.id,n)]}),e.jsxs("span",{children:["LOC: ",f(a.location,n)]})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"4px"},children:[e.jsx(m,{label:a.status,variant:b(a.status)}),e.jsx("span",{style:t.metricVal,children:a.concentration})]})]})})},a.id)}):e.jsxs("div",{style:t.emptyState,children:[e.jsx(R,{size:36,style:{color:"var(--accent-yellow)",marginBottom:"12px"}}),e.jsx("h4",{style:{color:"var(--text-primary)",fontFamily:"var(--font-display)"},children:"No Matches Registered"}),e.jsxs("p",{style:{color:"var(--text-muted)",fontSize:"12px",marginTop:"4px",maxWidth:"380px"},children:['No chemical agents or pipelines match the query "',n,'". Double-check spelling or switch filter tabs.']})]})})]})}),r&&e.jsx("div",{className:"scada-detail-panel",children:e.jsx(g,{title:"Asset Audit Panel",icon:e.jsx(N,{size:16}),glowColor:"cyan",style:{position:"sticky",top:"var(--header-height)"},children:e.jsxs("div",{style:t.detailBody,children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{fontSize:"18px",color:"var(--accent-cyan)"},children:r.name}),e.jsx(m,{label:r.type,variant:r.type==="chemical"?"info":"inactive"})]}),e.jsxs("div",{style:t.detailRow,children:[e.jsx("span",{style:t.detailLabel,children:"Reference Key"}),e.jsx("span",{style:t.detailVal,className:"font-mono",children:r.id})]}),e.jsxs("div",{style:t.detailRow,children:[e.jsx("span",{style:t.detailLabel,children:"Location Index"}),e.jsx("span",{style:t.detailVal,children:r.location})]}),e.jsxs("div",{style:t.detailRow,children:[e.jsx("span",{style:t.detailLabel,children:"Status Indicators"}),e.jsx(m,{label:r.status,variant:b(r.status)})]}),e.jsxs("div",{style:t.detailRow,children:[e.jsx("span",{style:t.detailLabel,children:r.type==="chemical"?"Concentration Rate":"Section TSS / Flow"}),e.jsx("span",{style:{...t.detailVal,color:"var(--accent-cyan)",fontFamily:"var(--font-mono)"},children:r.concentration})]}),e.jsxs("div",{style:t.memoBox,children:[e.jsx(T,{size:14,style:{color:"var(--accent-cyan)"}}),e.jsx("p",{style:{fontSize:"11px",color:"var(--text-secondary)"},children:"Active telemetry loop registered. Audit logs confirm standard sensor transmission is nominal for this sector grid."})]}),e.jsx(S,{variant:"ghost",onClick:()=>l(null),style:{width:"100%",marginTop:"10px"},children:"Close Inspector"})]})})})]})]})}const t={counterRow:{padding:"8px 4px",borderBottom:"1px solid var(--border-color)",fontSize:"11px",color:"var(--text-secondary)"},cardLayout:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%"},itemTitle:{fontSize:"13px",fontWeight:"700",color:"var(--text-primary)"},metricVal:{fontSize:"11px",fontFamily:"var(--font-mono)",color:"var(--accent-cyan)",fontWeight:"700"},highlightText:{color:"var(--accent-cyan)",textShadow:"var(--shadow-glow-cyan)",fontWeight:"800",backgroundColor:"rgba(0, 212, 255, 0.15)",padding:"0 2px",borderRadius:"2px"},emptyState:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",textAlign:"center",padding:"60px var(--space-4)",backgroundColor:"var(--bg-primary)",border:"1px dashed var(--border-color)",borderRadius:"var(--radius-sm)"},detailBody:{display:"flex",flexDirection:"column",gap:"16px"},detailRow:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"12px",borderBottom:"1px solid var(--border-color)",paddingBottom:"8px"},detailLabel:{color:"var(--text-secondary)",fontWeight:"500"},detailVal:{color:"var(--text-primary)",fontWeight:"700"},memoBox:{display:"flex",gap:"10px",backgroundColor:"rgba(0, 212, 255, 0.02)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-sm)",padding:"12px",marginTop:"6px"}};export{V as default};
