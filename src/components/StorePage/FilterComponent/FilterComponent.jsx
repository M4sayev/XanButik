import React from 'react'
import "./FilterComponent.css"
import { GiCheckMark } from 'react-icons/gi'

function FilterComponent() {
  return (
    <search className='sort-filter-component'>
        <div className='sort-filter-container' style={{display: "none"}}>
            <div className='sort-container'>
                <label htmlFor="sortProductBy" className="sort-dropdown-btn " tabIndex={0}>Sort</label>
                <select name="sort" id="sortProductBy">
                    <option value="recommended">Recommended</option>
                    <option value="new">What's New</option>
                    <option value="price-high-to-low">Price high to low</option>
                    <option value="price-low-to-high">Price low to high</option>
                </select>
            </div>
            <div className='filter-container'>
                <button className='filter-btn'>
                    Filter
                    <GiCheckMark aria-hidden="true" style={{marginLeft: "3px", width: "13px", height: "13px"}}/>
                </button>
            </div>
        </div>
    </search>
  )
}

export default FilterComponent
