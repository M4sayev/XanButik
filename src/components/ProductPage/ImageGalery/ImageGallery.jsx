import "./ImageGallery.css";

function ImageGallery({ currentImg, img, handleThumbSelected }) {
  return (
    <div className="pp-image-gallery">
      <div className="main-image">
        <img src={currentImg} alt="Currently selected product image" />
      </div>

      <div
        className="gallery-thumbs"
        role="group"
        aria-label="Product image thumbnails"
      >
        {img.map((img, index) => {
          return (
            <button
              key={img}
              type="button"
              className="gallery-thumb"
              onClick={() => handleThumbSelected(img)}
              aria-label={`Thumbnail ${index + 1}`}
              aria-current={img === currentImg}
            >
              <img
                className={`${currentImg === img && "gallery-thumb--active"}`}
                src={img}
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
