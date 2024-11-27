import React from 'react';
import "./FeaturedItems.css";
import { assets } from "../../assets/assets.js";

function FeaturedItems() {
  return (
    <section className='featured-items'>
        <div className='featured-items-content'>
          <div className='featured-items-title'>
              <p className='featured-items-paragraph'>Featured items</p>
              <h1 className='featured-items-heading'>Everyone's favourite</h1>
          </div>
          <div className="featured-items-imgs-grid">
            <div>
              <img src={assets.tie_image} alt="tie" />
              <span></span>
            </div>
            <div>
              <img src={assets.shirts_img} alt="shirts" />
            </div>
            <div>
              <img src={assets.shirts_front} alt="shirts" />
            </div>
            <div>
              <img src={assets.bomber_home} alt="bomber jacket" />
            </div>
          </div>
          <button className='featured-items-view-more-btn'>view more</button>
        </div>
    </section>
  )
}

export default FeaturedItems
