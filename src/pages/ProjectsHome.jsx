import {Link} from "react-router-dom"

import "./ProjectsHome.css"

const domains = [
  "Machine Learning",
  "Natural Language Processing",
  "Software Development",
  "Game Development"
]

const featuredProjects = [
  {
    title: "Kuramoto Associative Memory",
    path: "/projects/kuramoto"
  },
  {
    title: "BERT Domain Shift",
    path: "/projects/bert"
  },
  {
    title: "Racetrack RL",
    path: "/projects/racetrack"
  }
]

export default function ProjectsHome() {
  return (
    <div className="projects-home">
      <h1>PROJECTS</h1>

      <div className="projects-hero">
        <img
          className="projects-hero-image"
          src=""
          alt=""
        />
      </div>

      <section className="project-domains">
        <h2>Project Domains</h2>

        <div className="domain-grid">
          {domains.map((domain) => (
            <div className="domain-item" key={domain}>
              <span className="domain-marker">◆</span>
              <span>{domain}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-projects">
        <h2>Featured Projects</h2>

        <div className="featured-grid">
          {featuredProjects.map((project) => (
            <Link
              className="featured-project"
              to={project.path}
              key={project.title}
            >
              <h3>{project.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <p className="projects-navigation-note">
        Select a project from the navigation menu to view additional details.
      </p>
    </div>
  )
}