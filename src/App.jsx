import {Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Layout from "./components/Layout"

import ProjectsHome from "./components/ProjectsHome"
import NLPProject from "./components/NLPProject"
import RacetrackProject from "./components/RaceTrackProject"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="projects" element={<Projects />}>
          <Route index element={<ProjectsHome />} />
          <Route path="nlp" element={<NLPProject />} />
          <Route path="racetrack" element={<RacetrackProject />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
