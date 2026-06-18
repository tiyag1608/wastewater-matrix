import React, { createContext, useContext, useState, useCallback } from 'react'

const ToastContext = createContext(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now() + Math.random()
    
    setToasts(prev => {
      // Limit to max 3 toasts at once
      const nextToasts = [...prev, { id, message, type }]
      if (nextToasts.length > 3) {
        return nextToasts.slice(nextToasts.length - 3)
      }
      return nextToasts
    })

    // Auto dismiss after 3 seconds
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }, [])

  const removeToast = (id) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      
      {/* Toast Portal Container */}
      <div className="scada-toast-container">
        <style>{`
          .scada-toast-container {
            position: fixed;
            bottom: 24px;
            right: 24px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 9999;
            pointer-events: none;
          }

          .scada-toast {
            pointer-events: auto;
            min-width: 280px;
            max-width: 380px;
            background-color: var(--bg-card);
            border: 1px solid var(--border-color);
            border-radius: var(--radius-sm);
            padding: 12px var(--space-4);
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.7);
            font-family: var(--font-mono);
            font-size: 11px;
            line-height: 1.4;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: var(--space-3);
            animation: scada-toast-slide-in 0.25s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes scada-toast-slide-in {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }

          .scada-toast-success {
            border-left: 3px solid var(--accent-green);
            color: var(--accent-green);
            box-shadow: 0 0 10px rgba(0, 255, 136, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.7);
          }

          .scada-toast-error {
            border-left: 3px solid var(--accent-red);
            color: var(--accent-red);
            box-shadow: 0 0 10px rgba(255, 77, 77, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.7);
          }

          .scada-toast-warning {
            border-left: 3px solid var(--accent-yellow);
            color: var(--accent-yellow);
            box-shadow: 0 0 10px rgba(255, 215, 0, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.7);
          }

          .scada-toast-info {
            border-left: 3px solid var(--accent-cyan);
            color: var(--accent-cyan);
            box-shadow: 0 0 10px rgba(0, 212, 255, 0.1), 0 10px 25px -5px rgba(0, 0, 0, 0.7);
          }

          .scada-toast-close {
            background: none;
            border: none;
            color: var(--text-muted);
            cursor: pointer;
            font-size: 14px;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: color 0.12s ease;
          }

          .scada-toast-close:hover {
            color: var(--text-primary);
          }
        `}</style>
        
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className={`scada-toast scada-toast-${toast.type}`}
          >
            <div>
              <span style={{ fontWeight: '800', marginRight: '6px' }}>
                [{toast.type.toUpperCase()}]
              </span>
              <span style={{ color: 'var(--text-primary)' }}>{toast.message}</span>
            </div>
            <button 
              className="scada-toast-close"
              onClick={() => removeToast(toast.id)}
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
