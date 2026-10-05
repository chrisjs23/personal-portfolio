import { NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/about">About</NavLink>
        </>
    )
}