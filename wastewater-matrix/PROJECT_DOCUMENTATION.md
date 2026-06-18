# Wastewater Matrix - Technical Project Documentation

Wastewater Matrix is a simulated municipal telemetry command center and SCADA (Supervisory Control and Data Acquisition) dashboard. It represents an enterprise-level SaaS product designed to monitor, schedule, and route municipal wastewater grids.

This project is built using a modern **React (v18)** and **Vite** stack, styled with **Vanilla CSS variables**, and animated with **GreenSock (GSAP)**.

---

## 1. Architectural & React Design Patterns

This application showcases several advanced React design patterns and features suitable for academic examinations and enterprise audits:

### A. Code Splitting & Dynamic Imports (`React.lazy` + `Suspense`)
To optimize initial page load performance (reducing Largest Contentful Paint / LCP latency), the application splits the production JavaScript bundle into dynamic, route-based chunks.
* **`React.lazy()`**: Loads feature pages dynamically in [App.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/App.jsx) only when the user navigates to them.
* **`<React.Suspense>`**: Wraps the route definition tree. It specifies a fallback UI (`<LoadingSpinner />`) that remains visible while the browser downloads and parses the chunk files.
* **Output chunks**: Compiling the project via `npm run build` generates isolated files (e.g. `OverflowSorter-*.js`, `SampleQueue-*.js`, etc.) instead of one large monolithic asset.

### B. Dynamic Step-Loading Lifecycle (AJAX Telemetry Simulation)
To simulate remote API lookups and database packet retrieval, [App.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/App.jsx) implements a multi-stage `PageLoader` component:
* Uses a `useEffect` hooked into the route `title` prop. Whenever the user switches routes, the loading sequence resets to phase 0.
* Transitions through three distinct states:
  1. **Phase 0 (0-300ms)**: `"CONNECTING TO TELEMETRY SYSTEM..."`
  2. **Phase 1 (300-700ms)**: `"AUTHENTICATING SECURE SCADA SESSION..."`
  3. **Phase 2 (700-1100ms)**: `"FETCHING LIVE GRID DATA PACKETS..."`
* Displays a pulsing message and loading spinner before mounting the component, demonstrating complex React state management and timer cleanup cycles.

### C. Global Toast Notifications (React Context API)
Toast notifications (success, warning, error, info) are handled globally using React Context:
* **`ToastContext`**: Provides a `showToast(message, type)` function globally.
* **`ToastProvider`**: Placed at the root of the React app tree, managing a queue of active toasts (capped at 3 maximum) and automatically dismissing them after 3 seconds using timeout cycles.

### D. Advanced React Hooks
* **`useState`**: Manages interactive telemetry states, node selections, command history buffers, and UI toggles.
* **`useMemo`**: Memoizes computationally heavy operations, such as sorting lists, recalculating stats, and filtering lists on keystrokes. This prevents unnecessary re-calculations on every render.
* **`useRef`**: Targets specific DOM elements for direct manipulation by GSAP animation engines, ensuring animations cleanly clean up on unmount.
* **`useEffect`**: Coordinates live clock intervals, fake sensor jitter streams, and sets up/clears async timeouts.

---

## 2. Core Algorithmic Features & Modules

The application is structured into **8 distinct, algorithmically driven features** nested inside the `/console` namespace:

### 1. Chemical & Pipe Search (Trie Prefix Indexer)
* **File**: [ChemicalSearch.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/ChemicalSearch.jsx)
* **Algorithm**: **Trie (Prefix Tree) Search**
* **Details**: Indexes 40+ chemicals and pipes. Characters typed in the search bar trigger an $O(k)$ prefix match lookup (where $k$ is search length), returning results instantly regardless of total dataset size. It uses a **HashMap** to cache duplicates and categories.

### 2. Valve Matrix Control (LIFO Undo Stack)
* **File**: [ValveControl.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/ValveControl.jsx)
* **Algorithm**: **LIFO (Last-In-First-Out) Transaction Stack**
* **Details**: Tracks valve state changes (OPEN/CLOSED/throttle %). Each state change is pushed onto a transaction history stack. The operator can click "Undo Last Action" to pop the stack head and revert the system's valve configuration back to its previous state.

### 3. Lab Sample Priority (FIFO Queue Scheduler)
* **File**: [SampleQueue.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/SampleQueue.jsx)
* **Algorithm**: **FIFO (First-In-First-Out) Queue**
* **Details**: Manages incoming wastewater samples sequentially in a laboratory queue. Processing items extracts them from the front of the queue (`dequeue`), while adding new samples appends them to the end of the array (`enqueue`).

### 4. Sensor Checker (O(1) HashMap Registry)
* **File**: [SensorChecker.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/SensorChecker.jsx)
* **Algorithm**: **O(1) Direct-Access HashMap Lookup**
* **Details**: Validates sensor hardware pings. By storing 50 sensor nodes inside a JavaScript key-value object, validation queries check `sensorRegistry[sensorId]` in constant time ($O(1)$) to determine if the hardware is ACTIVE, FAULTY, or INVALID.

### 5. Pump Station Sorter (Max-Heap Risk Ranking)
* **File**: [OverflowSorter.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/OverflowSorter.jsx)
* **Algorithm**: **Max-Heap Priority Extraction**
* **Details**: Sorts and monitors 12 pump stations. By prioritizing stations by capacity fill percentages (descending), it simulates extracting high-risk nodes (Risk Rank #1 and #2) to ensure emergency crews are dispatched to overflowing stations first.

### 6. Pipeline Network Topology (Adjacency List Graph)
* **File**: [PipeMapHub.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/PipeMapHub.jsx)
* **Algorithm**: **Graph Adjacency List Reconstruction**
* **Details**: Renders an SVG network topology map. Reconstructs nodes (hubs) and edges (pipes) into an adjacency list structure to instantly map out-degree (outgoing) and in-degree (incoming) connections for any selected junction.

### 7. Gravity Route Planner (BFS & Dijkstra Pathfinding)
* **File**: [GravityPlanner.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/GravityPlanner.jsx)
* **Algorithm**: **Dijkstra's Shortest Path & BFS**
* **Details**: Calculates optimal flow drainage routes through the pipe network. Evaluates conduit distances and elevation losses (slopes) to find the path that maximizes gravity-assisted flow, minimizing the need for electrical pumps.

### 8. Chemical Dosing Balancer (Greedy Feed Balancer)
* **File**: [ChemicalBalancer.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/ChemicalBalancer.jsx)
* **Algorithm**: **Greedy Matching Heuristic**
* **Details**: Evaluates chemical neutralizer reagents against active dosing tanks. Computes assignments by sorting elements by compatibility constraints ascending (fewest options first) and greedily binding them to active mixing chambers to neutralize pH levels.

---

## 3. Visual Styling & Animations

### A. Design Tokens & Styling (Vanilla CSS)
* **Files**: [variables.css](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/styles/variables.css) and [globals.css](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/styles/globals.css)
* **Theme**: Light Professional Enterprise theme. It relies on clean, high-contrast Slate grays (`#f8fafc`, `#ffffff`, `#0f172a`), subtle cards shadows, clean borders (`#e2e8f0`), and standard accent indicators (Cyan, Green, Yellow, Red) for SCADA monitoring.
* **Fonts**: Displays text in the modern sans-serif typography `Inter` instead of retro-neon monospaced fonts, resulting in a clean and polished SaaS layout.

### B. Dynamic Animations (GSAP)
* **File**: [LandingPage.jsx](file:///Users/sahilpandey/Downloads/react%20js%20project/wastewater-matrix/src/components/features/LandingPage.jsx)
* **Library**: `gsap` (GreenSock Animation Platform)
* **Animations**:
  * **Entrance Reveals**: The navbar, hero title lines, subtitle, and CTA buttons load sequentially using a GSAP timeline with `power4.out` easing.
  * **Interactive Widgets**: Slide-ins from the left/right for the mock terminal and telemetry panel.
  * **Grid Staggers**: Metrics and feature cards fade up in sequence.
  * **Drifting Glows**: Background radial gradients float infinitely using randomized coordinates and `sine.inOut` looping.

---

## 4. Codebase Directory Map

```
wastewater-matrix/
├── package.json               # Project scripts and library dependencies (gsap, lucide-react)
├── vite.config.js             # Vite compilation and HMR settings
├── index.html                 # Main HTML entry point mounting the root React virtual node
└── src/
    ├── main.jsx               # Boots React DOM tree and attaches the App component
    ├── App.jsx                # Router config, dynamic lazy loads, and Suspense wrapper
    ├── hooks/
    │   └── useHistory.js      # Custom LIFO stack transaction ledger state hook
    ├── utils/
    │   └── graphUtils.js      # BFS/Dijkstra path planners and adjacency converters
    ├── data/
    │   └── mockData.js        # Named exports containing raw municipal grid datasets
    ├── styles/
    │   ├── variables.css      # CSS variables (slate, colors, margins, font-family)
    │   └── globals.css        # CSS Resets, grid structures, and core layout classes
    ├── components/
    │   ├── layout/
    │   │   ├── Layout.jsx     # Side-by-side dashboard structure with outlet injection
    │   │   ├── Header.jsx     # Upper navigation panel showing page title and stats ticker
    │   │   └── Sidebar.jsx    # Primary control panel linking to the 8 feature routes
    │   ├── ui/
    │   │   ├── Card.jsx       # Standard visual container with custom glow borders
    │   │   ├── Button.jsx     # Button wrapper with hover glows and loading spinner
    │   │   ├── Badge.jsx      # Colored badges showing statuses
    │   │   ├── LoadingSpinner.jsx # Pulsing text spinner for Suspense / PageLoader
    │   │   └── Toast.jsx      # Context and hooks for Toast notifications
    │   └── features/
    │       ├── LandingPage.jsx # Premium SaaS product page with CLI / SVG simulators
    │       ├── DashboardOverview.jsx # Main SCADA dashboard console summary view
    │       ├── ChemicalSearch.jsx    # Trie prefix query hub
    │       ├── ValveControl.jsx      # LIFO stack controller
    │       ├── SampleQueue.jsx       # FIFO laboratory queue
    │       ├── SensorChecker.jsx     # O(1) diagnostic registry
    │       ├── OverflowSorter.jsx    # Max-Heap priority risk ranking
    │       ├── PipeMapHub.jsx        # Graph adjacency list pipeline renderer
    │       ├── GravityPlanner.jsx    # BFS & Dijkstra path planner
    │       └── ChemicalBalancer.jsx  # Greedy feed balancing heuristic
```

---

## 5. Local Setup & Production Compilation

### Installation
To install project dependencies (including `gsap` and `lucide-react`):
```bash
npm install
```

### Run Development Server
To launch the hot-reloading development server on `http://localhost:3000/`:
```bash
npm run dev
```

### Compile Production Assets
To execute production optimizations, bundle scripts, and chunk the codebase into modular lazy loading files:
```bash
npm run build
```
