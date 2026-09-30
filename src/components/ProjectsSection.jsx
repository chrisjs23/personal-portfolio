
import ProjectCard from './ProjectCard'
import projects from '../data/projects'

function ProjectsSection() {
  return (
    <main>
      <section className="tab-content">
        <h2>Projects</h2>

        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            technologies={project.technologies}
            date={project.date}
            description={project.description}
            images={project.images}
          />
        ))}
      </section>
    </main>
  )
}

export default ProjectsSection