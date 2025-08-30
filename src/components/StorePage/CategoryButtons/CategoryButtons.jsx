import React from 'react'
import "./CategoryButtons.css";
import { categoryPreviewMap } from '../../../assets/assets';
import tshirtPreview from './tshirt_category_preview.jpg';

function CategoryButtons({categoryMap}) {
    
  return (
    <section>
      <div className='category-btns-container'>
        <button className='category-btn'>
            <div className='category-contents'>
                <img className="category-preview-img" src={tshirtPreview} alt="category" />
            </div>
            <div className='category-btn-overlay'>
                <h1>T-Shirts</h1>
            </div>
        </button>
        <button className='category-btn'>
            <div className='category-contents'>
                <img className="category-preview-img" src={tshirtPreview} alt="category" />
            </div>
            <div className='category-btn-overlay'>
                <h1>T-Shirts</h1>
            </div>
        </button>
        <button className='category-btn'>
            <div className='category-contents'>
                <img className="category-preview-img" src={tshirtPreview} alt="category" />
            </div>
            <div className='category-btn-overlay'>
                <h1>T-Shirts</h1>
            </div>
        </button>
        <button className='category-btn'>
            <div className='category-contents'>
                <img className="category-preview-img" src={tshirtPreview} alt="category" />
            </div>
            <div className='category-btn-overlay'>
                <h1>T-Shirts</h1>
            </div>
        </button>
        <button className='category-btn'>
            <div className='category-contents'>
                <img className="category-preview-img" src={tshirtPreview} alt="category" />
            </div>
            <div className='category-btn-overlay'>
                <h1>T-Shirts</h1>
            </div>
        </button>
      </div>
    </section>
  )
}

export default CategoryButtons
