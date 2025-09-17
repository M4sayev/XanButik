import React, { useContext, useRef, useState } from "react";
import "./ProductPage.css";
import { StoreContext } from "../../context/StoreContext";
import ProductDescription from "../../components/ProductPage/ProductDescription/ProductDescription";
import MobileImgSwiper from "../../components/ProductPage/MobileImgSwiper/MobileImgSwiper";

function ProductPage() {
  const { currentProduct } = useContext(StoreContext);

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
    </main>
  );
}

export default ProductPage;
