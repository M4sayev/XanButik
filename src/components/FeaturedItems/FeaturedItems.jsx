import React from 'react'
import { assets } from "../../assets/assets.js"

function FeaturedItems() {
  return (
    <section className='featured-items'>
        <div className='featured-items-title'>
            <p className='featured-items-heading'>Featured items</p>
            <h1 className='featured-items-title'>Everyone's favourite</h1>
        </div>
        <div className='featured-items-content'>
            <img src={assets.} alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </section>
  )
}

export default FeaturedItems
