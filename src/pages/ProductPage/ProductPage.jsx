import React, { useContext, useRef, useState } from "react";
import "./ProductPage.css";
import { StoreContext } from "../../context/StoreContext";
import ProductDescription from "../../components/ProductPage/ProductDescription/ProductDescription";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductPage() {
  const { currentProduct } = useContext(StoreContext);

  return (
    <main>
      {/* Mobile Slider */}

      <section>
        <div className="imgs-swiper-wrapper">
          <Swiper
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {currentProduct.img.map((i) => (
              <SwiperSlide>
                <img src={i} alt="product image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Desktop Gallery */}
      {/* <div className="hidden">
        <DesktopGallery images={images} />
    </div> */}

      {/* Description Box */}
      <section>
        <ProductDescription description={currentProduct.description} />
      </section>
    </main>
  );
}

export default ProductPage;
