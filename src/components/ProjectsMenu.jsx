import { NavLink } from "react-router-dom";

export default function ProjectsMenu() {
  return (
    <>
      <NavLink to="/">Back</NavLink>

      <NavLink to="/projects/nlp">NLP Project</NavLink>
      <NavLink to="/projects/racetrack">Racetrack RL</NavLink>
    </>
  );
}