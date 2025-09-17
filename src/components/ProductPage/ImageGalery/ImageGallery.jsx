import React from "react";
import "./ImageGallery.css";

function ImageGallery({ currentImg, img, handleThumbSelected }) {
  return (
    <div className="pp-image-gallery">
      <div className="main-image">
        <img src={currentImg} alt="Product" />
      </div>

      <div className="gallery-thumbs">
        {img.map((img, index) => {
          return (
            <button
              className="gallery-thumb"
              onClick={() => handleThumbSelected(img)}
              aria-label={`Thumbnail ${index + 1}`}
              aria-current={img === currentImg}
            >
              <img
                className={`${currentImg === img && "gallery-thumb--active"}`}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                aria-hidden="true"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ImageGallery;
