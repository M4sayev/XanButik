import React from 'react';
import "./FeaturedItems.css";
import { favoriteItems } from "../../../assets/assets.js";
import { useInView } from 'react-intersection-observer';
import Button from '../../Button/Button.jsx';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../../context/StoreContext.jsx';
import FeaturedItem from './FeaturedItem.jsx';
import { handleAnimation } from '../../../utils/utils.js';

function FeaturedItems() {

  const {ref: titleRef, inView: titleInView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  const {ref: btnRef, inView: btnInView} = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <section className='featured-items'>
        <div className='featured-items-content'>
          <div ref={titleRef} className={`featured-items-title ${handleAnimation(titleInView)}`}>
              <p className='std-paragraph std-subtitle-fs mi-auto'>Featured items</p>
              <h1 className='featured-items-heading std-heading'>Everyone's favourite</h1>
          </div>
          <div className="featured-items-imgs-grid">
            {
              favoriteItems.map((item, index) => {
                const layoutClass = `layout-${index}`;
                return (
                  <FeaturedItem 
                    key={index} 
                    {...item} 
                    layoutClass={layoutClass}
                  />
                )
              })
            }
          </div>
          <div className={`featured-items-btn-wrapper ${handleAnimation(btnInView)}`} ref={btnRef}>
            <Button 
              id="ViewMore" 
              as={Link} 
              to="/Store" 
              className="featured-items-view-more-btn std-button"
            >
              view more
            </Button>
          </div>
        </div>
    </section>
  )
}

export default FeaturedItems
