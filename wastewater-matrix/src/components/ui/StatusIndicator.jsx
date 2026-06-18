import React from 'react'

function StatusIndicator({ 
  status = 'online', 
  label, 
  size = 'md',
  style = {},
  className = '',
  ...props 
}) {
  const getStatusColor = () => {
    switch (status) {
      case 'online':
        return 'var(--accent-green)'
      case 'warning':
        return 'var(--accent-yellow)'
      case 'critical':
        return 'var(--accent-red)'
      case 'offline':
      default:
        return 'var(--text-muted)'
    }
  }

  const color = getStatusColor()

  return (
    <>
      <style>{`
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
      `}</style>
      
      <div 
        className={`scada-status-indicator ${className}`} 
        style={style}
        {...props}
      >
        <span 
          className={`scada-status-dot scada-status-dot-${size} ${
            status === 'online' ? 'scada-pulse-online' : status === 'critical' ? 'scada-pulse-critical' : ''
          }`}
          style={{ '--dot-color': color }}
        />
        {label && <span className="scada-status-label">{label}</span>}
      </div>
    </>
  )
}

export default StatusIndicator
