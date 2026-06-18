import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'

// Lazy load feature components for optimal bundle code splitting
const ChemicalSearch = React.lazy(() => import('./components/features/ChemicalSearch.jsx'))
const ValveControl = React.lazy(() => import('./components/features/ValveControl.jsx'))
const SampleQueue = React.lazy(() => import('./components/features/SampleQueue.jsx'))
const SensorChecker = React.lazy(() => import('./components/features/SensorChecker.jsx'))
const OverflowSorter = React.lazy(() => import('./components/features/OverflowSorter.jsx'))
const PipeMapHub = React.lazy(() => import('./components/features/PipeMapHub.jsx'))
const GravityPlanner = React.lazy(() => import('./components/features/GravityPlanner.jsx'))
const ChemicalBalancer = React.lazy(() => import('./components/features/ChemicalBalancer.jsx'))
const DashboardOverview = React.lazy(() => import('./components/features/DashboardOverview.jsx'))
const LandingPage = React.lazy(() => import('./components/features/LandingPage.jsx'))

// Import UI additions
import LoadingSpinner from './components/ui/LoadingSpinner.jsx'
import { ToastProvider } from './components/ui/Toast.jsx'

// Dynamic step loader simulating live remote data fetching
function PageLoader({ children, title }) {
  const [phase, setPhase] = React.useState(0)

  React.useEffect(() => {
    // Reset phase when page changes
    setPhase(0)
    
    const t1 = setTimeout(() => setPhase(1), 300)
    const t2 = setTimeout(() => setPhase(2), 700)
    const t3 = setTimeout(() => setPhase(3), 1100)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [title])

  if (phase < 3) {
    let msg = `CONNECTING TO ${title} TELEMETRY SYSTEM...`
    if (phase === 1) msg = `AUTHENTICATING SECURE SCADA SESSION...`
    if (phase === 2) msg = `FETCHING LIVE GRID DATA PACKETS...`
    
    return <LoadingSpinner message={msg} />
  }

  return children
}

function App() {
  return (
    <ToastProvider>
      <BrowserRouter>
        <React.Suspense fallback={<LoadingSpinner message="LOADING CONSOLE ENGINE..." />}>
          <Routes>
            <Route path="/" element={<PageLoader title="LANDING PAGE"><LandingPage /></PageLoader>} />
            <Route path="/console" element={<Layout />}>
              <Route index element={<PageLoader title="SYSTEM OVERVIEW"><DashboardOverview /></PageLoader>} />
              <Route path="search" element={<PageLoader title="CHEMICAL SEARCH"><ChemicalSearch /></PageLoader>} />
              <Route path="valve-control" element={<PageLoader title="VALVE MATRIX"><ValveControl /></PageLoader>} />
              <Route path="sample-queue" element={<PageLoader title="LAB QUEUE"><SampleQueue /></PageLoader>} />
              <Route path="sensor-check" element={<PageLoader title="SENSOR DIAGNOSTICS"><SensorChecker /></PageLoader>} />
              <Route path="overflow" element={<PageLoader title="STATION SORTER"><OverflowSorter /></PageLoader>} />
              <Route path="pipe-map" element={<PageLoader title="PIPELINE TOPOLOGY"><PipeMapHub /></PageLoader>} />
              <Route path="gravity" element={<PageLoader title="GRAVITY PLANNER"><GravityPlanner /></PageLoader>} />
              <Route path="balancer" element={<PageLoader title="CHEMICAL BALANCER"><ChemicalBalancer /></PageLoader>} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </React.Suspense>
      </BrowserRouter>
    </ToastProvider>
  )
}

export default App
