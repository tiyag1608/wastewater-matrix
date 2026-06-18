import React from 'react'

function LoadingSpinner({ message = 'INITIALIZING TELEMETRY LINK...' }) {
  return (
    <div className="scada-spinner-container">
      <style>{`
        .scada-spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 300px;
          flex: 1;
          gap: 16px;
        }

        .scada-spinner-circle {
          width: 48px;
          height: 48px;
          border: 3px solid rgba(0, 212, 255, 0.15);
          border-top: 3px solid var(--accent-cyan);
          border-radius: 50%;
          animation: scada-spin-loader 0.8s cubic-bezier(0.5, 0.1, 0.4, 0.9) infinite;
          box-shadow: 0 0 15px rgba(0, 212, 255, 0.05);
        }

        .scada-spinner-message {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--accent-cyan);
          letter-spacing: 0.12em;
          text-shadow: var(--shadow-glow-cyan);
          animation: scada-spinner-pulse 1.5s infinite ease-in-out;
        }

        @keyframes scada-spin-loader {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes scada-spinner-pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
      <div className="scada-spinner-circle" />
      <span className="scada-spinner-message">{message}</span>
    </div>
  )
}

export default LoadingSpinner
