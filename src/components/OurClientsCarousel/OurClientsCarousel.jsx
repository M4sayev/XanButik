import React, { useContext } from "react";
import "./OurClientsCarousel.css";
import { ourBrandCompanies } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import "swiper/swiper-bundle.css";
import { StoreContext } from "../../context/StoreContext";

function OurClientsCarousel({bg}) {
  const { ref: carouselSecRef, inView: carouselSecInView } = useInView();
  const {handleAnimation} = useContext(StoreContext);

  return (
    <section className="carousel-section" data-type={bg}>
      <div
        ref={carouselSecRef}
        className={`carousel-section-contents ${handleAnimation(carouselSecInView)}`}
      >
        <div className="text-container">
          <h1 className="text-container-title std-heading">Our Clients</h1>
          <p className="text-container-paragraph std-paragraph mi-auto">
            Welcome to our clients section - the perfect place for
            fashionably-minded men everywhere! Here you can explore an array of
            stylish clothes that will update your wardrobe. Whether you're
            looking for a classic staple or something trendier, there's
            something here just for you.
          </p>
        </div>
        <div className="carousel-container">
          <Swiper
            className="carousel"
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              999: {
                slidesPerView: 6,
              },
              640: {
                slidesPerView: 5,
              }
            }}
            loop={true}
            slidesPerView={3}
          >
            {ourBrandCompanies.map((carouselItem, index) => {
              const { brandName, img } = carouselItem;
              return (
                <SwiperSlide key={index}>
                  <img tabIndex={index + 16} src={img} alt={brandName} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurClientsCarousel;
