import React, { useContext } from 'react';
import './TestimonialsReviewsCarousel.css';
import { clientReviews } from '../../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination } from 'swiper/modules';
import { useInView } from 'react-intersection-observer';
import { StoreContext } from '../../../context/StoreContext';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/a11y';

function TestimonialsReviewsCarousel() {

  const {ref:tReviewsCarouselRef, inView: tReviewsCarouselInView} = useInView();
  const {handleAnimation} = useContext(StoreContext);

  return (
    <section className='testimonials-reviews-carousel'>
        <div ref={tReviewsCarouselRef} className={`testimonials-reviews-carousel-contents ${handleAnimation(tReviewsCarouselInView)}`}>
            <h1 className="std-heading">What our clients say</h1>
            <Swiper id="reviewSwiper" className="reviews-carousel-container"
              modules={[Navigation, Pagination, A11y]}
              navigation
              pagination={{ clickable: true }}
              a11y
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
