import React from "react";
import "./OurClientsCarousel.css";
import { carousel } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import "swiper/swiper-bundle.css";

function OurClientsCarousel({bg}) {
  const { ref: carouselSecRef, inView: carouselSecInView } = useInView();

  return (
    <section className="carousel-section" data-type={bg}>
      <div
        ref={carouselSecRef}
        className={`carousel-section-contents ${
          carouselSecInView ? "animate-in" : ""
        }`}
      >
        <div className="text-container">
          <h1 className="text-container-title">Our Clients</h1>
          <p className="text-container-paragraph">
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
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={0}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            slidesPerView={3}
            breakpoints={{
              999: {
                slidesPerView: 6,
              },
              799: {
                slidesPerView: 5,
              },
              640: {
                slidesPerView: 4,
              }
            }}
          >
            {carousel.map((carouselItem, index) => {
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
