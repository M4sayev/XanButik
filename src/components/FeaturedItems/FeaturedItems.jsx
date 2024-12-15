import React, { useContext } from 'react';
import "./FeaturedItems.css";
import { favoriteItems } from "../../assets/assets.js";
import { useInView } from 'react-intersection-observer';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function FeaturedItems() {

  const {ref: titleRef, inView: titleInView} = useInView();
  const {ref: btnRef, inView: btnInView} = useInView();
  const { setCurrentPage } = useContext(StoreContext);

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
          <div className={`featured-items-btn  ${btnInView ? "animate-in" : ""}`} ref={btnRef}>
            <Button id="ViewMoreHome" as={Link} to="/Cart" tabIndex="11" className="featured-items-view-more-btn button">view more</Button>
          </div>
        </div>
    </section>
  )
}

export default FeaturedItems
