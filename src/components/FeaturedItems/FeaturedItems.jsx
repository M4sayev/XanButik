import React from 'react';
import "./FeaturedItems.css";
import { favoriteItems } from "../../assets/assets.js";

function FeaturedItems() {
  return (
    <section className='featured-items'>
        <div className='featured-items-content'>
          <div className='featured-items-title'>
              <p className='featured-items-paragraph'>Featured items</p>
              <h1 className='featured-items-heading'>Everyone's favourite</h1>
          </div>
          <div className="featured-items-imgs-grid">
            {
              favoriteItems.map((item, index) => {
                const {name, img, price} = item;
                return (
                  <div key={index}>
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
          <button className='featured-items-view-more-btn'>view more</button>
        </div>
    </section>
  )
}

export default FeaturedItems
