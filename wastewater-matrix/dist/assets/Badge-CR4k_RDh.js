import{j as a}from"./index-yO2fnI_U.js";function s({label:o,variant:r="info",style:e={},className:c="",...d}){return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .scada-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 2px 8px;
          border-radius: var(--radius-sm);
          font-family: var(--font-mono);
          font-size: 10px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border: 1px solid transparent;
        }

        .scada-badge-active {
          background-color: rgba(0, 255, 136, 0.08);
          border-color: rgba(0, 255, 136, 0.2);
          color: var(--accent-green);
        }

        .scada-badge-warning {
          background-color: rgba(255, 215, 0, 0.08);
          border-color: rgba(255, 215, 0, 0.2);
          color: var(--accent-yellow);
        }

        .scada-badge-danger {
          background-color: rgba(255, 77, 77, 0.08);
          border-color: rgba(255, 77, 77, 0.2);
          color: var(--accent-red);
        }

        .scada-badge-inactive {
          background-color: rgba(71, 85, 105, 0.1);
          border-color: rgba(71, 85, 105, 0.25);
          color: var(--text-secondary);
        }

        .scada-badge-info {
          background-color: rgba(0, 212, 255, 0.08);
          border-color: rgba(0, 212, 255, 0.2);
          color: var(--accent-cyan);
        }

        .badge-blink-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--accent-red);
          animation: blink 0.8s infinite;
        }
      `}),a.jsxs("span",{className:`scada-badge scada-badge-${r} ${c}`,style:e,...d,children:[r==="danger"&&a.jsx("span",{className:"badge-blink-dot"}),o]})]})}export{s as B};
