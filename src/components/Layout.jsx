
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css"
import Menu from "./Menu"

export default function Layout() {
    return (
        <div className="app-shell">
            <header className="header">
                Header
            </header>

            <div className="main-layout">
                <nav className="sidebar">
                    <Menu />
                </nav>

                <main className="content">
                    <Outlet />
                </main>
            </div>

            <footer className="footer">
                <p>Footer</p>
            </footer>
        </div>
    )
}