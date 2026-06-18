import{j as a}from"./index-yO2fnI_U.js";function p({children:n,onClick:o,variant:s="primary",size:t="md",disabled:e=!1,loading:r=!1,style:c={},className:d="",...i}){return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:`
        .scada-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-2);
          font-family: var(--font-display);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          border-radius: var(--radius-sm);
          border: 1px solid transparent;
          cursor: pointer;
          transition: all var(--transition-fast);
          outline: none;
          position: relative;
        }

        .scada-btn:active {
          transform: translateY(1px);
        }

        .scada-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
          box-shadow: none !important;
          transform: none !important;
        }

        /* Sizes */
        .scada-btn-sm {
          padding: 6px var(--space-3);
          font-size: 10px;
        }
        
        .scada-btn-md {
          padding: 10px var(--space-4);
          font-size: 12px;
        }
        
        .scada-btn-lg {
          padding: 14px var(--space-6);
          font-size: 14px;
        }

        /* Variants */
        .scada-btn-primary {
          background-color: var(--accent-cyan);
          color: var(--bg-primary);
        }
        .scada-btn-primary:hover:not(:disabled) {
          background-color: #4cdfff;
          box-shadow: var(--shadow-glow-cyan);
        }

        .scada-btn-danger {
          background-color: var(--accent-red);
          color: var(--text-primary);
        }
        .scada-btn-danger:hover:not(:disabled) {
          background-color: #ff7373;
          box-shadow: var(--shadow-glow-red);
        }

        .scada-btn-success {
          background-color: var(--accent-green);
          color: var(--bg-primary);
        }
        .scada-btn-success:hover:not(:disabled) {
          background-color: #52ffa6;
          box-shadow: 0 0 12px rgba(0, 255, 136, 0.4);
        }

        .scada-btn-ghost {
          background-color: transparent;
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }
        .scada-btn-ghost:hover:not(:disabled) {
          background-color: rgba(0, 212, 255, 0.05);
          box-shadow: var(--shadow-glow-cyan);
        }

        /* Spinner for Loading */
        .scada-spinner {
          width: 12px;
          height: 12px;
          border: 2px solid currentColor;
          border-right-color: transparent;
          border-radius: 50%;
          animation: scada-spin 0.75s linear infinite;
        }

        @keyframes scada-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}),a.jsxs("button",{className:`scada-btn scada-btn-${t} scada-btn-${s} ${d}`,onClick:o,disabled:e||r,style:c,...i,children:[r&&a.jsx("div",{className:"scada-spinner"}),a.jsx("span",{children:n})]})]})}export{p as B};
