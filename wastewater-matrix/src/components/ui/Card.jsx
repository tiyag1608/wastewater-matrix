import React from 'react'

function Card({ 
  title, 
  icon, 
  children, 
  glowColor, 
  className = '', 
  style = {},
  ...props 
}) {
  const getGlowStyle = () => {
    if (!glowColor) return {}
    
    let colorVar = 'var(--accent-cyan)'
    let shadowVar = 'var(--shadow-glow-cyan)'

    if (glowColor === 'green') {
      colorVar = 'var(--accent-green)'
      shadowVar = '0 4px 12px rgba(22, 163, 74, 0.04)'
    } else if (glowColor === 'red') {
      colorVar = 'var(--accent-red)'
      shadowVar = 'var(--shadow-glow-red)'
    } else if (glowColor === 'yellow') {
      colorVar = 'var(--accent-yellow)'
      shadowVar = '0 4px 12px rgba(217, 119, 6, 0.04)'
    }

    return {
      borderColor: colorVar,
      boxShadow: shadowVar
    }
  }

  return (
    <>
      <style>{`
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
      `}</style>
      
      <div 
        className={`scada-ui-card ${className}`} 
        style={{ ...getGlowStyle(), ...style }} 
        {...props}
      >
        {(title || icon) && (
          <div className="scada-ui-card-header">
            {icon && <span className="scada-ui-card-icon">{icon}</span>}
            {title && <h3 className="scada-ui-card-title">{title}</h3>}
          </div>
        )}
        <div className="scada-ui-card-content">
          {children}
        </div>
      </div>
    </>
  )
}

export default Card
