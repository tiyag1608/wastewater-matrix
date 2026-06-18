// Graph Algorithms for wastewater pipeline networking

/**
 * Build an Adjacency List from nodes and edges
 */
export function buildAdjacencyList(nodes, edges) {
  const adjList = new Map()

  // Initialize adjacency list for all nodes
  nodes.forEach(node => {
    adjList.set(node.id, [])
  })

  // Populated edges (directed graph from -> to)
  edges.forEach(edge => {
    if (adjList.has(edge.from)) {
      adjList.get(edge.from).push({
        to: edge.to,
        distance: edge.distance,
        elevation: edge.elevation,
        diameter: edge.diameter,
        type: edge.type
      })
    }
  })

  return adjList
}

/**
 * Breadth-First Search (BFS) to find the shortest unweighted path (or verify connectivity)
 */
export function bfs(adjList, startId, endId) {
  const queue = [[startId]]
  const visited = new Set([startId])

  while (queue.length > 0) {
    const path = queue.shift()
    const current = path[path.length - 1]

    if (current === endId) {
      return path
    }

    const neighbors = adjList.get(current) || []
    for (const edge of neighbors) {
      if (!visited.has(edge.to)) {
        visited.add(edge.to)
        queue.push([...path, edge.to])
      }
    }
  }

  return null // No path found
}

/**
 * Dijkstra's Algorithm to find the shortest path in a weighted graph.
 * If gravityOnly is true, it only traverses edges where type is 'gravity'.
 */
export function dijkstra(adjList, startId, endId, gravityOnly = false) {
  const distances = {}
  const previous = {}
  const nodes = new Set()

  // Initialize
  for (const nodeId of adjList.keys()) {
    distances[nodeId] = Infinity
    previous[nodeId] = null
    nodes.add(nodeId)
  }
  distances[startId] = 0

  while (nodes.size > 0) {
    // Find node in 'nodes' with the minimum distance
    let minNode = null
    for (const node of nodes) {
      if (minNode === null || distances[node] < distances[minNode]) {
        minNode = node
      }
    }

    if (minNode === null || distances[minNode] === Infinity) {
      break
    }

    if (minNode === endId) {
      break
    }

    nodes.delete(minNode)

    const neighbors = adjList.get(minNode) || []
    for (const edge of neighbors) {
      // If gravityOnly is true, filter out non-gravity-allowed conduits (type !== 'gravity')
      if (gravityOnly && edge.type !== 'gravity') {
        continue
      }

      const alt = distances[minNode] + edge.distance
      if (alt < distances[edge.to]) {
        distances[edge.to] = alt
        previous[edge.to] = minNode
      }
    }
  }

  // Construct path
  const path = []
  let current = endId
  while (current !== null) {
    path.unshift(current)
    current = previous[current]
  }

  return {
    path: path[0] === startId ? path : [],
    distance: distances[endId] === Infinity ? -1 : distances[endId]
  }
}
