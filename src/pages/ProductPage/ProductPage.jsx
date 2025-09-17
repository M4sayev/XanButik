import React, { useContext, useState } from "react";
import "./ProductPage.css";
import "../../components/ProductPage/ProductPageSelectors/ProductPageSelectors.css";
import { StoreContext } from "../../context/StoreContext";
import ProductDescription from "../../components/ProductPage/ProductDescription/ProductDescription";
import MobileImgSwiper from "../../components/ProductPage/MobileImgSwiper/MobileImgSwiper";
import SizeSelector from "../../components/ProductPage/ProductPageSelectors/SizeSelector";
import ColorSelector from "../../components/ProductPage/ProductPageSelectors/ColorSelector";
import ProductPageCta from "../../components/ProductPage/ProductPageCta/ProductPageCta.jsx";

function ProductPage() {
  const { currentProduct } = useContext(StoreContext);

  const [currentSize, setCurrentSize] = useState("");
  const [currentColor, setCurrentColor] = useState("transparent");

  function handleSelectSize(size) {
    setCurrentSize(() => (size === currentSize ? "" : size));
  }

  function handleSelectColor(color) {
    setCurrentColor(() => (color === currentColor ? "" : color));
  }

  return (
    <main>
      <section>
        {/* Mobile Slider */}
        <MobileImgSwiper img={currentProduct.img} name={currentProduct.name} />
        {/* Desktop Gallery */}
        {/* <div className="hidden">
          <DesktopGallery images={images} />
      </div> */}
      </section>

      {/* Description Box */}
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
          name={currentProduct.name}
          price={currentProduct.price}
          discountPercent={currentProduct.discountPercent}
        />
      </section>
    </main>
  );
}

export default ProductPage;
