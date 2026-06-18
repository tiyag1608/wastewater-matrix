import { useState, useCallback } from 'react'

/**
 * useHistory custom hook implementing a stack structure for undo states.
 */
export default function useHistory(initialState) {
  const [stack, setStack] = useState(() => [initialState])

  const state = stack[stack.length - 1]
  const canUndo = stack.length > 1

  const push = useCallback((item) => {
    setStack((prev) => [...prev, item])
  }, [])

  const undo = useCallback(() => {
    if (stack.length <= 1) return null

    const poppedItem = stack[stack.length - 1]
    setStack((prev) => prev.slice(0, -1))
    
    return poppedItem
  }, [stack])

  const clearHistory = useCallback((initialVal = initialState) => {
    setStack([initialVal])
  }, [initialState])

  return {
    state,
    push,
    undo,
    canUndo,
    history: stack,
    clearHistory
  }
}
