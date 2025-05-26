import React from "react";
import "./Slideshow.css";
import SlideshowDialog from "./SlideshowDialog";

type SlideshowProps = {
  images: string[];
};

const SlideshowComponent = ({ images }: SlideshowProps) => {
  const [currentImage, setCurrentImage] = React.useState(images[0]);

  return (
    <>
      <div className="slideshow-container">
        <div className="slideshow-content">
          <div className="slideshow-highlight">
            <img src={currentImage} alt="Slideshow image" />
            {/* <SlideshowDialog image={currentImage} /> */}
          </div>
          <div className="slideshow-thumbnails">
            {images.map((src, index) => {
              return (
                <img
                  onClick={() => {
                    if (src === currentImage) return;
                    setCurrentImage(src);
                  }}
                  src={src}
                  key={index}
                  alt={`Slideshow thumbnail ${index + 1}`}
                  style={
                    src === currentImage ? { opacity: 1 } : { opacity: 0.5 }
                  }
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideshowComponent;
