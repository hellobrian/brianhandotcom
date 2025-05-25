import React from "react";
import "./Slideshow.css";

type SlideshowProps = {
  columns?: number;
  images: string[];
};

const SlideshowComponent = ({ columns = 2, images }: SlideshowProps) => {
  const [currentImage, setCurrentImage] = React.useState(images[0]);

  return (
    <div className="slideshow-container">
      <div className="slideshow-content">
        <div className="slideshow-highlight">
          <img src={currentImage} alt="Slideshow image" />
          <a href={currentImage} target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <path d="M33.406 0c-.55.05-.957.543-.906 1.094.05.55.543.957 1.094.906h12.968L25.689 22.906a1 1 0 0 0-.348 1.004c.086.371.379.664.75.75.375.086.762-.05 1.004-.348L48 3.439v12.968c-.004.36.184.696.496.88.313.179.695.179 1.008 0 .312-.184.5-.52.496-.88V0H33.406M2 10c-.523 0-1.059.184-1.437.563C.183 10.94 0 11.477 0 12v36c0 .523.184 1.059.563 1.438C.94 49.816 1.477 50 2 50h36c.523 0 1.059-.184 1.438-.562.378-.38.562-.915.562-1.438V18a1 1 0 0 0-.496-.879 1.01 1.01 0 0 0-1.008 0c-.312.184-.5.52-.496.879v30H2V12h30c.36.004.695-.184.879-.496a1.01 1.01 0 0 0 0-1.008c-.184-.312-.52-.5-.879-.496Z"></path>
            </svg>
          </a>
        </div>
        <div
          className="slideshow-thumbnails"
          style={{ ["--columns" as any]: columns }}
        >
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
                style={src === currentImage ? { opacity: 1 } : { opacity: 0.5 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SlideshowComponent;
