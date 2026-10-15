import ProjectGallery from "./ImageGallery";

export default function ProjectPage({
  title,
  subtitle,
  bullets,
  technologies,
  images = []
}) {
  const hasImages = images.length > 0;

  return (
    <article className="project-page">
      <header className="project-title">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>

      <div className="project-body">
        <section className="project-details">
          <ul>
            {bullets.map((bullet, index) => (
              <li key={index}>{bullet}</li>
            ))}
          </ul>

          <div className="project-tech">
            <h2>Technologies</h2>
            <p>{technologies.join(" • ")}</p>
          </div>
        </section>

        {hasImages && (
          <section className="project-gallery-section">
            <ProjectGallery images={images} />
          </section>
        )}
      </div>
    </article>
  );
}