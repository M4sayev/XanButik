import React from 'react';
import './TestimonialsReviewsCarousel.css';
import { clientReviews } from '../../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';
import { handleAnimation } from '../../../utils/utils';

function TestimonialsReviewsCarousel() {

  const reviewFallback = {
    review: "No review provided",
    name: "No name provided",
    occupation: "No occupation provided",
    img: "no-pic.avif"
  }

  const {ref:tReviewsCarouselRef, inView: tReviewsCarouselInView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section 
      className='testimonials-reviews-carousel' 
      aria-label="Client testimonials carousel"
    >
        <div ref={tReviewsCarouselRef} className={`testimonials-reviews-carousel-contents ${handleAnimation(tReviewsCarouselInView)}`}>
            <h1 className="std-heading">What our clients say</h1>
            <Swiper id="reviewSwiper" className="reviews-carousel-container"
              modules={[Navigation, Pagination, A11y, Autoplay ]}
              navigation
              pagination={{ clickable: true }}
              a11y={{
                prevSlideMessage: 'Previous testimonial',
                nextSlideMessage: 'Next testimonial'
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
                  slidesPerView: 2
                }
              }}
            >
              {
                clientReviews.map((reviewItem, index) => {
                  const {review, name, occupation, img} = reviewItem;
                  return (
                    <SwiperSlide key={index}>
                      <article className='review-item'>
                        <p className="std-paragraph">{review || reviewFallback.review}</p>
                        <div className="reviewer-info-container">
                          <img 
                            src={img || reviewFallback.img} 
                            alt={`Photo of ${name}, ${occupation}`} 
                            className='reviewer-pp'
                            loading='lazy'
                          />
                          <div className="reviewer-name-job-container">
                            <p className="reviewer-name">{name || reviewFallback.name}</p>
                            <p className="std-paragraph">{occupation || reviewFallback.occupation}</p>
                          </div>
                        </div>
                      </article>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
        </div>
    </section>
  )
}

export default TestimonialsReviewsCarousel;
