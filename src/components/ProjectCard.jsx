function ProjectCard({ name, technologies, date, description, images = [] }) {
  return (
    <article className="project-card">
      <h3>{name}</h3>

      <p>
        {technologies} | {date}
      </p>

      <ul>
        {description.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>

        {images.length > 0 && (
        <div className="project-images">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={'${name} preview ${index + 1}'}
            />
          ))}
        </div>
      )}

      <hr></hr>
    </article>
  )
}

export default ProjectCard