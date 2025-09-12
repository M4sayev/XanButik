import React, { useState } from 'react'
import ReactRangeSliderInput from 'react-range-slider-input'
import 'react-range-slider-input/dist/style.css';

const DEFAULT_PRICE_RANGE_MIN = 0;
const DEFAULT_PRICE_RANGE_MAX = 1500;

function PriceRangeDropdown({toggleDropDown, isDropDownOverflowing, openDropdown, dropdownRefs}) {
    const [priceRange, setPriceRange] = useState([DEFAULT_PRICE_RANGE_MIN, DEFAULT_PRICE_RANGE_MAX]);

  return (
    <li 
        className={`refinement-list-element 
            ${(priceRange[0] !== DEFAULT_PRICE_RANGE_MIN ||
                priceRange[1] !== DEFAULT_PRICE_RANGE_MAX) 
                ? "refinement-head-btn--selected" : ""
            }
            `}
    >
        <div className={`refinement-dropdown-container price-range ${openDropdown === "Price Range" ? "rl-dropdown--active" : ""}`}>
            <button 
                className='refinement-head-btn' 
                onClick={() => toggleDropDown("Price Range")}
            >
                <span>Price Range</span>
            </button>
            <div 
                className={`rl-dropdown ${isDropDownOverflowing ? "dropdown-left" : ""}`}
                ref={(el) => { dropdownRefs.current["Price Range"] = el }}
            >
                <header className='rl-dropdown-header'>
                    <p>Price Range Selected </p>
                    <p className='rl-dropdown-header-preview'>
                        ${priceRange[0]} - ${priceRange[1]}
                    </p>
                </header>
                <div className='range-slider-dropdown'>
                    <div className='range-slider-dropdown-container'>
                        <div className='thumb-label-container'>
                            <div className="thumb-label-left-label">
                                ${priceRange[0]}
                            </div>
                            <div className="thumb-label-right-label">
                                ${priceRange[1]}
                            </div>
                        </div>
                        <ReactRangeSliderInput 
                            id="price-range-slider"
                            min={0}
                            max={1500}
                            step={1}
                            value={priceRange}
                            onInput={setPriceRange}
                        />

                    </div>
                </div>
            </div>
        </div>
    </li>
  )
}

export default PriceRangeDropdown
