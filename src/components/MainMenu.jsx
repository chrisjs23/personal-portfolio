import { NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <>
            <NavLink to="/" end className="menu-link">
                Home
            </NavLink>
            <NavLink to="/projects" end className="menu-link">
                Projects
            </NavLink>
            <NavLink to="/about" className="menu-link">
                About
            </NavLink>
        </>
    )
}