import React from 'react'
import "./Product.css"
import { itemsList } from '../../../assets/itemsList'
import { HiOutlineShoppingBag } from "react-icons/hi2";

function Product() {
    const item = itemsList[2];
  return (
    <div className='str-product'>
        <div className="str-product-img-wrapper">
            <img className='str-preview-img' src={item.imgs[0]} alt={item.name} />
        </div>
        <div className="str-product-info-container">
            <div className="str-product-name-price">
                <p className='str-product-name'>{item.name}</p>
                <span className='str-product-price'>{item.price} USD</span>
            </div>
            <HiOutlineShoppingBag className='shopping-bag'/>
        </div>
    </div>
  )
}

export default Product
