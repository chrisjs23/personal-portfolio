import {Routes, Route} from "react-router-dom"

import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Layout from "./components/Layout"

function App() {

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  )
}

export default App
