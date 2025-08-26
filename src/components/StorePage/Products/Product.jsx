import React, { useRef, useState } from 'react'
import "./Product.css"
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Product({id, price, category, name, img, description, index, discountPercent }) {
  const animationDelay = `${index * 0.2}s`;
  const [image, setImage] = useState(img[0]);
  const intervalRef = useRef(null);
  const imgIndexRef = useRef(0);

  function calculateDiscountPrice(price) {
    return price * (1 - (discountPercent || 0) / 100);
  }

  function handleMouseEnter() {
    if (img.length < 2) return;

    intervalRef.current = setInterval(() => {
      imgIndexRef.current++;
      
      if (imgIndexRef.current >= img.length) imgIndexRef.current = 0;
      setImage(img[imgIndexRef.current]);
    }, 800)
    
  }

  function handleMouseLeave() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    imgIndexRef.current = 0;
    setImage(img[0]);
  }

  return (
    <article className='str-product' style={{ animationDelay }} >
        <div className="str-product-img-wrapper" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {discountPercent === 0 ? "" : <span className='product-sale'>Sale</span>}
            <img className='str-preview-img' src={image} alt={name} />
        </div>
        <div className="str-product-info-container">
            <div className="str-product-name-price">
                <p className='str-product-name'>{name}</p>
                {discountPercent === 0 ? 
                  <span className='str-product-price'>{price.toFixed(2)}$</span>
                  :
                  <div className='str-discount-price-container'>
                    <span className='str-product-price' style={{textDecoration: "line-through"}}>{price.toFixed(2)}$</span>
                    <span className='str-product-price' style={{color: "var(--clr-validation-err)"}}>{calculateDiscountPrice(price).toFixed(2)}$</span>
                  </div>
                }
                
            </div>
            <HiOutlineShoppingBag className='shopping-bag'/>
        </div>
    </article>
  )
}

export default Product
