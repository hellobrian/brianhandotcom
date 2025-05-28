import React from "react";
import "./Slideshow.css";

type SlideshowProps = {
  images: string[];
  initialFullView?: boolean;
};

const currentThumbnailStyle = {
  opacity: 1,
  outline: "4px solid var(--accent-light)",
  boxShadow: "var(--box-shadow)",
};

const thumbnailStyle = {
  opacity: 0.5,
};

const SlideshowComponent = ({
  images,
  initialFullView = false,
}: SlideshowProps) => {
  const [currentImage, setCurrentImage] = React.useState(images[0]);
  const [isFullView, setFullView] = React.useState(initialFullView);

  const toggleFullView = () => {
    if (window.innerWidth <= 480) return;
    setFullView(!isFullView);
  };

  return (
    <>
      <div
        className="slideshow-container"
        style={{
          // Add any additional custom styles here
          ...({
            "--thumbnailColumnSize": images.length > 8 ? "144px" : "48px",
          } as React.CSSProperties),
        }}
      >
        <div
          className="slideshow-highlight"
          role="group"
          tabIndex={0}
          onClick={toggleFullView}
          style={{
            // Add any additional custom styles here
            ...({
              "--maxBlockSize": isFullView ? "100%" : "600px",
            } as React.CSSProperties),
          }}
        >
          <img
            src={currentImage}
            alt="Slideshow image"
            style={{ cursor: isFullView ? "zoom-out" : "zoom-in" }}
            width={900}
            height={600}
            loading="lazy"
          />
        </div>
        <div className="slideshow-thumbnails" role="group">
          {images.map((src, index) => {
            return (
              <span
                style={{
                  ...(src === currentImage
                    ? currentThumbnailStyle
                    : thumbnailStyle),
                }}
              >
                <img
                  tabIndex={0}
                  onClick={() => {
                    if (src === currentImage) return;
                    setCurrentImage(src);
                    // setFullView(false);
                  }}
                  src={src}
                  key={index}
                  alt={`Slideshow thumbnail ${index + 1}`}
                />
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SlideshowComponent;
