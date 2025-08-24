import React from 'react'
import "./Product.css"
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Product({id, price, category, name, img, description }) {
  return (
    <div className='str-product'>
        <div className="str-product-img-wrapper">
            <img className='str-preview-img' src={img[0]} alt={name} />
        </div>
        <div className="str-product-info-container">
            <div className="str-product-name-price">
                <p className='str-product-name'>{name}</p>
                <span className='str-product-price'>{price} USD</span>
            </div>
            <HiOutlineShoppingBag className='shopping-bag'/>
        </div>
    </div>
  )
}

export default Product
