import { useState } from "react";

function ProjectGallery({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return null;
  }

  const currentImage = images[currentIndex];

  function showPrevious() {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  }

  function showNext() {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  }

  return (
    <div className="project-gallery">
      <div className="project-gallery__image-container">
        <img
          src={currentImage.src}
          alt={currentImage.alt}
          className="project-gallery__image"
        />
      </div>

      {images.length > 1 && (
        <div className="project-gallery__controls">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous image"
          >
            &lt;
          </button>

          <span>
            {currentIndex + 1} / {images.length}
          </span>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next image"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;