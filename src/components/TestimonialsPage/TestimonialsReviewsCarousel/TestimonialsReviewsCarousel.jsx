import "./TestimonialsReviewsCarousel.css";
import { clientReviews } from "../../../assets/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import { useInView } from "react-intersection-observer";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/a11y";
import { handleAnimation } from "../../../utils/utils";

const reviewFallback = {
  id: "no-item-fallback",
  review: "No review provided",
  name: "No name provided",
  occupation: "No occupation provided",
  img: "no-pic.avif",
};

function TestimonialsReviewsCarousel() {
  const { ref: tReviewsCarouselRef, inView: tReviewsCarouselInView } =
    useInView({
      threshold: 0.2,
      triggerOnce: true,
    });

  return (
    <section className="testimonials-reviews-carousel">
      <div
        ref={tReviewsCarouselRef}
        className={`testimonials-reviews-carousel-contents ${handleAnimation(
          tReviewsCarouselInView,
        )}`}
      >
        <h2 className="std-heading">What our clients say</h2>
        <Swiper
          id="reviewSwiper"
          className="reviews-carousel-container"
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          a11y={{
            prevSlideMessage: "Previous testimonial",
            nextSlideMessage: "Next testimonial",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            777: {
              slidesPerView: 2,
            },
          }}
        >
          {clientReviews.map((reviewItem) => {
            const { review, name, occupation, img, id } =
              reviewItem ?? reviewFallback;
            return (
              <SwiperSlide key={id}>
                <article className="review-item">
                  <p className="std-paragraph">{review}</p>
                  <div className="reviewer-info-container">
                    <img
                      src={img}
                      alt={`Photo of ${name}, ${occupation}`}
                      className="reviewer-pp"
                      loading="lazy"
                    />
                    <div className="reviewer-name-job-container">
                      <p className="reviewer-name">{name}</p>
                      <p className="std-paragraph">{occupation}</p>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialsReviewsCarousel;
