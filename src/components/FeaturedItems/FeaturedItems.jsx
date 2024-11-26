import React from 'react';
import "./FeaturedItems.css";
import { assets } from "../../assets/assets.js";

function FeaturedItems() {
  return (
    <section className='featured-items'>
        <div className='featured-items-content'>
          <div className='featured-items-title'>
              <p className='featured-items-heading'>Featured items</p>
              <h1 className='featured-items-title'>Everyone's favourite</h1>
          </div>
          <div className="featured-items-imgs-grid">
            <img src={assets.tie_image} alt="tie" />
            <img src={assets.shirts_img} alt="shirts" />
            <img src={assets.shirts_front} alt="shirts" />
            <img src={assets.bomber_home} alt="bomber jacket" />
          </div>
          <button className='featured-items-view-more-btn'>view more</button>
        </div>
    </section>
  )
}

export default FeaturedItems
