// Custom Data Structures and Algorithms for Wastewater Matrix

/**
 * Max-Heap Priority Queue implementation for testing samples.
 * Items with higher priority numerical values are dequeued first.
 */
export class PriorityQueue {
  constructor() {
    this.heap = []
  }

  // Helper methods to get parent and child indices
  getParentIndex(i) { return Math.floor((i - 1) / 2); }
  getLeftChildIndex(i) { return 2 * i + 1; }
  getRightChildIndex(i) { return 2 * i + 2; }

  swap(i, j) {
    const temp = this.heap[i]
    this.heap[i] = this.heap[j]
    this.heap[j] = temp
  }

  isEmpty() {
    return this.heap.length === 0
  }

  size() {
    return this.heap.length
  }

  peek() {
    if (this.isEmpty()) return null
    return this.heap[0]
  }

  enqueue(item, priority) {
    const node = { item, priority, timestamp: Date.now() }
    this.heap.push(node)
    this.heapifyUp(this.heap.length - 1)
  }

  dequeue() {
    if (this.isEmpty()) return null
    if (this.heap.length === 1) return this.heap.pop()

    const root = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.heapifyDown(0)
    return root
  }

  heapifyUp(index) {
    let current = index
    while (current > 0) {
      const parent = this.getParentIndex(current)
      if (this.heap[current].priority > this.heap[parent].priority) {
        this.swap(current, parent)
        current = parent
      } else {
        break
      }
    }
  }

  heapifyDown(index) {
    let current = index
    const length = this.heap.length

    while (this.getLeftChildIndex(current) < length) {
      let largest = this.getLeftChildIndex(current)
      const right = this.getRightChildIndex(current)

      if (right < length && this.heap[right].priority > this.heap[largest].priority) {
        largest = right
      }

      if (this.heap[current].priority < this.heap[largest].priority) {
        this.swap(current, largest)
        current = largest
      } else {
        break
      }
    }
  }

  /**
   * Helper to dump heap elements sorted by priority (clones and dequeues)
   */
  toArray() {
    const clone = new PriorityQueue()
    clone.heap = [...this.heap]
    const sorted = []
    while (!clone.isEmpty()) {
      sorted.push(clone.dequeue())
    }
    return sorted
  }
}

/**
 * Merge Sort implementation to sort objects by a specific key
 * Used for Tank capacities, sorting them by current capacity percent or volume.
 */
export function mergeSort(array, key, order = 'asc') {
  if (array.length <= 1) return array

  const mid = Math.floor(array.length / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)

  return merge(
    mergeSort(left, key, order),
    mergeSort(right, key, order),
    key,
    order
  )
}

function merge(left, right, key, order) {
  let result = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftIndex < left.length && rightIndex < right.length) {
    const leftVal = getValueByPath(left[leftIndex], key)
    const rightVal = getValueByPath(right[rightIndex], key)

    let condition = order === 'asc' ? leftVal < rightVal : leftVal > rightVal

    if (condition) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex))
}

/**
 * Quick Sort implementation
 */
export function quickSort(array, key, order = 'asc') {
  if (array.length <= 1) return array

  const pivot = array[array.length - 1]
  const left = []
  const right = []

  const pivotVal = getValueByPath(pivot, key)

  for (let i = 0; i < array.length - 1; i++) {
    const currentVal = getValueByPath(array[i], key)
    let condition = order === 'asc' ? currentVal < pivotVal : currentVal > pivotVal

    if (condition) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }

  return [...quickSort(left, key, order), pivot, ...quickSort(right, key, order)]
}

// Deep resolver helper for sorting by nested keys (e.g. 'metrics.ph')
function getValueByPath(obj, path) {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj)
}
