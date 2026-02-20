import React from "react";
import "./Slideshow.css";

type ImageType = {
  src: string;
  alt?: string;
};

type SlideshowProps = {
  images: ImageType[];
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
  initialFullView = true,
}: SlideshowProps) => {
  const [currentImage, setCurrentImage] = React.useState(images[0]);
  const [isFullView, setFullView] = React.useState(initialFullView);

  // const toggleFullView = () => {
  //   if (window.innerWidth <= 480) return;
  //   setFullView(!isFullView);
  // };

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
          // onClick={toggleFullView}
          style={{
            // Add any additional custom styles here
            ...({
              "--maxBlockSize": isFullView ? "100%" : "600px",
            } as React.CSSProperties),
          }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.alt ?? "Slideshow image"}
            // style={{ cursor: isFullView ? "zoom-out" : "zoom-in" }}
            width={1280}
            height={720}
            loading="lazy"
          />
        </div>
        <div className="slideshow-thumbnails" role="group">
          {images.map((img, index) => {
            return (
              <span
                key={img.src}
                style={{
                  ...(img.src === currentImage.src
                    ? currentThumbnailStyle
                    : thumbnailStyle),
                }}
              >
                <img
                  tabIndex={0}
                  onClick={() => {
                    if (img.src === currentImage.src) return;
                    setCurrentImage(img);
                  }}
                  src={img.src}
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
