{/* Our navigation bar for the Pubtopia website. */}

import { Outlet, NavLink } from "react-router"

function Layout() {
  return (
    <div className="app-shell">
      <nav className="sidebar">
        <NavLink to="/" end className="sidebar-link">🏠 Home</NavLink>
        <NavLink to="about" className="sidebar-link">ℹ️ About</NavLink>
        <a href="https://www.openbrewerydb.org/" target="_blank" rel="noreferrer" className="sidebar-link"> 📍 API Source </a>
      </nav>
      <main className="page-content">
        <div className="page-inner">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
export default Layout