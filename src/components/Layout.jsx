
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css"
import Menu from "./Menu"

export default function Layout() {
    return (
        <div className="app-shell">
            <header className="header">
                <h1 className="header-indentiy">Christopher J. Snelling</h1>
                <p>Software Developer</p>
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
                <div className="footer-links">
                    <a href="https://github.com/chrisjs23">GitHub</a>
                    <a>Resume</a>
                    <a href="mailto:christopher.j.snelling@gmail.com">Email</a>
                </div>
                <p>© 2026 Christopher J. Snelling</p>
            </footer>
        </div>
    )
}