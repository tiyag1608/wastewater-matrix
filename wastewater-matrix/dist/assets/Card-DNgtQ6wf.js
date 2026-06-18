import{j as a}from"./index-yO2fnI_U.js";function p({title:d,icon:s,children:i,glowColor:r,className:n="",style:o={},...t}){const l=()=>{if(!r)return{};let e="var(--accent-cyan)",c="var(--shadow-glow-cyan)";return r==="green"?(e="var(--accent-green)",c="0 4px 12px rgba(22, 163, 74, 0.04)"):r==="red"?(e="var(--accent-red)",c="var(--shadow-glow-red)"):r==="yellow"&&(e="var(--accent-yellow)",c="0 4px 12px rgba(217, 119, 6, 0.04)"),{borderColor:e,boxShadow:c}};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .scada-ui-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-color);
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          box-shadow: var(--shadow-card);
          transition: all var(--transition-normal);
        }

        .scada-ui-card-header {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-4);
          background-color: rgba(0, 0, 0, 0.25);
          border-bottom: 1px solid var(--border-color);
        }

        .scada-ui-card-icon {
          font-size: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .scada-ui-card-title {
          font-family: var(--font-display);
          font-size: 12px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .scada-ui-card-content {
          padding: var(--space-4);
          flex: 1;
          display: flex;
          flex-direction: column;
        }
      `}),a.jsxs("div",{className:`scada-ui-card ${n}`,style:{...l(),...o},...t,children:[(d||s)&&a.jsxs("div",{className:"scada-ui-card-header",children:[s&&a.jsx("span",{className:"scada-ui-card-icon",children:s}),d&&a.jsx("h3",{className:"scada-ui-card-title",children:d})]}),a.jsx("div",{className:"scada-ui-card-content",children:i})]})]})}export{p as C};
