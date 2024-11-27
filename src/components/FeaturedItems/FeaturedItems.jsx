import React from 'react';
import "./FeaturedItems.css";
import { favoriteItems } from "../../assets/assets.js";
import { useInView } from 'react-intersection-observer';

function FeaturedItems() {

  const {ref: titleRef, inView: titleInView} = useInView();
  const {ref: btnRef, inView: btnInView} = useInView();

  return (
    <section className='featured-items'>
        <div className='featured-items-content'>
          <div ref={titleRef} className={`featured-items-title ${titleInView ? "animate-in" : ""}`}>
              <p className='featured-items-paragraph'>Featured items</p>
              <h1 className='featured-items-heading'>Everyone's favourite</h1>
          </div>
          <div className="featured-items-imgs-grid">
            {
              favoriteItems.map((item, index) => {
                const {name, img, price} = item;
                const {ref: gridElement, inView: inView} = useInView();
                return (
                  <div className={inView ? "animate-in" : ""} ref={gridElement} key={index}>
                    <img src={img} alt={name} />
                    <span className='price-popup'>
                      <p className='item-name'>{name}</p>
                      <p className='item-price-usd'>{price}<span>AZN</span></p>
                    </span>
                  </div>
                )
              })
            }
          </div>
          <button ref={btnRef} className={`featured-items-view-more-btn ${btnInView ? "animate-in" : ""}`}>view more</button>
        </div>
    </section>
  )
}

export default FeaturedItems
