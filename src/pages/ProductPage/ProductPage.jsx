import { useContext, useEffect, useState } from "react";
import "./ProductPage.css";
import "../../components/ProductPage/ProductPageSelectors/ProductPageSelectors.css";
import { StoreContext } from "../../context/StoreContext";
import ProductDescription from "../../components/ProductPage/ProductDescription/ProductDescription";
import MobileImgSwiper from "../../components/ProductPage/MobileImgSwiper/MobileImgSwiper";
import SizeSelector from "../../components/ProductPage/ProductPageSelectors/SizeSelector";
import ColorSelector from "../../components/ProductPage/ProductPageSelectors/ColorSelector";
import ProductPageCta from "../../components/ProductPage/ProductPageCta/ProductPageCta.jsx";

import ImageGallery from "../../components/ProductPage/ImageGalery/ImageGallery.jsx";
import { ClipLoader } from "react-spinners";

function ProductPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(timeout);
  }, []);

  const { currentProduct } = useContext(StoreContext);

  const [currentSize, setCurrentSize] = useState("");
  const [currentColor, setCurrentColor] = useState("");
  const [currentImg, setCurrentImg] = useState(() => currentProduct.img[0]);

  function handleSelectSize(size) {
    setCurrentSize(() => (size === currentSize ? "" : size));
  }

  function handleSelectColor(color) {
    setCurrentColor(() => (color === currentColor ? "" : color));
  }

  function handleThumbSelected(img) {
    setCurrentImg(() => (img === currentImg ? currentProduct.img[0] : img));
  }

  return (
    <main>
      {loading ? (
        <div className="loading-overlay">
          <ClipLoader
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="pp-contents">
          <section>
            {/* Mobile Slider */}
            <MobileImgSwiper
              img={currentProduct.img}
              name={currentProduct.name}
            />
            {/* Desktop Gallery */}
            <ImageGallery
              img={currentProduct.img}
              currentImg={currentImg}
              handleThumbSelected={handleThumbSelected}
            />
          </section>

          {/* Description Box */}
          <div className="pp-details">
            <section>
              <ProductDescription description={currentProduct.description} />
            </section>

            <section>
              <div className="pp-info-container">
                <SizeSelector
                  size={currentProduct.size}
                  currentSize={currentSize}
                  handleSelectSize={handleSelectSize}
                />
                <ColorSelector
                  color={currentProduct.color}
                  currentColor={currentColor}
                  handleSelectColor={handleSelectColor}
                />
              </div>
            </section>

            <section>
              <ProductPageCta
                color={currentProduct.color}
                size={currentProduct.size}
                img={currentProduct.img}
                productId={currentProduct.id}
                name={currentProduct.name}
                price={currentProduct.price}
                discountPercent={currentProduct.discountPercent}
                reviews={currentProduct.reviews}
                currentColor={currentColor}
                currentSize={currentSize}
                setCurrentSize={setCurrentSize}
                setCurrentColor={setCurrentColor}
                description={currentProduct.description}
              />
            </section>
          </div>
        </div>
      )}
    </main>
  );
}

export default ProductPage;
