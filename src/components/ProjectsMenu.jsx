import { NavLink } from "react-router-dom";

export default function ProjectsMenu() {
  return (
    <>
      <NavLink to="/" end className="menu-link back-link">Back</NavLink>
      <NavLink to="/projects" end className="menu-link">Projects Overview</NavLink>
      <NavLink to="/projects/kuramoto" className="menu-link">Kuramoto Associative Memory</NavLink>
      <NavLink to="/projects/bert" className="menu-link">BERT Domain Shift</NavLink>
      <NavLink to="/projects/nlp" className="menu-link">NLP Project</NavLink>
      <NavLink to="/projects/racetrack" className="menu-link">Racetrack RL</NavLink>
      <NavLink to="/projects/neural-network" className="menu-link">Neural Network</NavLink>
      <NavLink to="/projects/decision-tree" className="menu-link">Decision Tree</NavLink>
      <NavLink to="/projects/clueless" className="menu-link">Clue-Less</NavLink>
      <NavLink to="/projects/triviagpt" className="menu-link">TriviaGPT</NavLink>
      <NavLink to="/projects/media-server" className="menu-link">Personal Media Server</NavLink>
      <NavLink to="/projects/platformer" className="menu-link">2D Platformer</NavLink>
    </>
  );
}