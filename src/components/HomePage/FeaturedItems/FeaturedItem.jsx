import React from 'react'
import { useInView } from 'react-intersection-observer';

function FeaturedItem({img, name, price, handleAnimation}) {
    const {ref: gridElement, inView: inView} = useInView();
  return (
    <div className={handleAnimation(inView)} ref={gridElement}>
        <img src={img} alt={name} />
        <span className='price-popup'>
            <p className='item-name'>{name}</p>
            <p className='item-price-usd'>{price}<span>AZN</span></p>
        </span>
    </div>
  )
}

export default FeaturedItem
