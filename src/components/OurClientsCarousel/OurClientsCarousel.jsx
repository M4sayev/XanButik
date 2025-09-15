import React from "react";
import "./OurClientsCarousel.css";
import { ourBrandCompanies } from "../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, A11y } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import "swiper/swiper-bundle.css";
import { handleAnimation } from "../../utils/utils";

function OurClientsCarousel({bg}) {
  const { ref: carouselSecRef, inView: carouselSecInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className="carousel-section" data-type={bg} aria-labelledby="our-clients-heading">
      <div
        ref={carouselSecRef}
        className={`carousel-section-contents ${handleAnimation(carouselSecInView)}`}
      >
        <div className="text-container">
          <h1 id="our-clients-heading" className="text-container-title std-heading">Our Clients</h1>
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
            modules={[Pagination, Autoplay, A11y ]}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 3,
              },
              640: {
                slidesPerView: 5,
              },
              999: {
                slidesPerView: 6,
              },
            }}
            loop={true}
            a11y={{
              enabled: true,
            }}
            role="region"
            aria-label="Client logos carousel"
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
          >
            {ourBrandCompanies.length ? (
              ourBrandCompanies.map(({ brandName, img},  index) => (
                <SwiperSlide key={index}>
                  <img 
                    src={img} 
                    loading="lazy"
                    alt={`${brandName} logo`}
                    aria-hidden="true"
                  />
                </SwiperSlide>
              ))
            ) : (
              <p>No client logos available at the moment.</p>
            )}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default OurClientsCarousel;
