import React from 'react'
import "./CategoryButtons.css";
import { categoryPreviewMap } from '../../../assets/assets';

function CategoryButtons({categoryMap}) {
    
  return (
    <section className='category-btns-section'>
      <div className='category-btns-container'>
        {
          Object.entries(categoryMap).map(([category, products], index) => {
            let imgSrc;
            if (categoryPreviewMap[category] == undefined) imgSrc = products[0].img[0];
            else imgSrc = categoryPreviewMap[category];
            return (
                <button className='category-btn' key={index}>
                    <div className='category-img-wrapper'>
                        <img 
                            className="category-preview-img"
                            src={imgSrc} 
                            alt={category} 
                        />
                    </div>
                    <div className='category-btn-overlay'>
                        <h1>{category}</h1>
                    </div>
                </button>
            )
          })  
        }
        
      </div>
    </section>
  )
}

export default CategoryButtons
