{/* Our navigation bar for the Pubtopia website. */}

import { Outlet, NavLink } from "react-router"

function Layout(){
  return (
    <div className="app-shell">
      <nav className="sidebar">
        <NavLink to="/" end className="sidebar-link">🏠 Home</NavLink>
        <NavLink to="about" className="sidebar-link">ℹ️ About</NavLink>
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