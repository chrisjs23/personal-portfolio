
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <header>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>Footer</p>
            </footer>
        </>
    )
}