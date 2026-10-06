import { useLocation } from "react-router-dom" 

import MainMenu from "./MainMenu"
import ProjectsMenu from "./ProjectsMenu"

export default function Menu() {

    const location = useLocation()

    if (location.pathname.startsWith("/projects")){
        return <ProjectsMenu />
    }

    return <MainMenu />
}