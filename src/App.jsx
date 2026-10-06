import {Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Layout from "./components/Layout"

import ProjectsHome from "./pages/ProjectsHome"
import KuramotoProject from "./pages/projects/KuramotoProject"
import BERTProject from "./pages/projects/BERTProject"
import NLPProject from "./pages/projects/NLPProject"
import RacetrackProject from "./pages/projects/RacetrackProject"
import NeuralNetworkProject from "./pages/projects/NeuralNetworkProject"
import DecisionTreeProject from "./pages/projects/DecisionTreeProject"
import ClueLessProject from "./pages/projects/ClueLessProject"
import TriviaGPTProject from "./pages/projects/TriviaGPTProject"
import MediaServerProject from "./pages/projects/MediaServerProject"
import PlatformerProject from "./pages/projects/PlatformerProject"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="projects" element={<Projects />}>
          <Route index element={<ProjectsHome />} />
          <Route path="kuramoto" element={<KuramotoProject />} />
          <Route path="bert" element={<BERTProject />} />
          <Route path="nlp" element={<NLPProject />} />
          <Route path="racetrack" element={<RacetrackProject />} />
          <Route path="neural-network" element={<NeuralNetworkProject />} />
          <Route path="decision-tree" element={<DecisionTreeProject />} />
          <Route path="clueless" element={<ClueLessProject />} />
          <Route path="triviagpt" element={<TriviaGPTProject />} />
          <Route path="media-server" element={<MediaServerProject />} />
          <Route path="platformer" element={<PlatformerProject />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
