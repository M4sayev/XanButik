import React, { useEffect } from 'react';
import './TestimonialsReviewsCarousel.css';
import { clientReviews } from '../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';

function TestimonialsReviewsCarousel() {

  return (
    <section className='testimonials-reviews-carousel'>
        <div className="testimonials-reviews-carousel-contents">
            <h1 className="std-heading">What our clients say</h1>
            <Swiper className="reviews-carousel-container"
              spaceBetween={50}
              slidesPerView={1}
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
                        <p className="std-paragraph">{review}</p>
                        <div className="reviewer-info-container">
                          <img src={img} alt={name} className='reviewer-pp'/>
                          <div className="reviewer-name-job-container">
                            <p className="reviewer-name">{name}</p>
                            <p className="std-paragraph">{occupation}</p>
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
