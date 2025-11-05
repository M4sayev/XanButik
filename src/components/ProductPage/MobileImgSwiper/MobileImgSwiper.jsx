import "./MobileImgSwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function MobileImgSwiper({ img, name }) {
  return (
    <div className="imgs-swiper-wrapper">
      <Swiper
        slidesPerView={1}
        modules={[Pagination, A11y]}
        pagination={{ clickable: true }}
      >
        {img.map((i, index) => (
          <SwiperSlide key={`mobile-swiper-slide-${index}`}>
            <img src={i} alt={`${name} img ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileImgSwiper;
