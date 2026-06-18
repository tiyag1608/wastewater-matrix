import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'

function Layout() {
  const location = useLocation()

  // Dynamic route name mapping to set header page title
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/console':
        return 'System Overview Control Panel'
      case '/console/search':
        return 'Chemical & Pipe Query Hub'
      case '/console/valve-control':
        return 'Valve Matrix Controller'
      case '/console/sample-queue':
        return 'Lab Sample Priority Queue'
      case '/console/sensor-check':
        return 'Sensor Integrity Registry'
      case '/console/overflow':
        return 'Pump Station Sorter'
      case '/console/pipe-map':
        return 'Pipeline Network Topology'
      case '/console/gravity':
        return 'Gravity Route Planner'
      case '/console/balancer':
        return 'Chemical Dosing & Balancer'
      default:
        return 'Wastewater Matrix Control'
    }
  }

  return (
    <div className="layout-container" style={{ backgroundColor: 'var(--bg-primary)', minHeight: '100vh', display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <Header pageTitle={getPageTitle()} />
        <main className="main-content" style={{ flex: 1 }}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
