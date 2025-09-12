import React from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'

function SortFilterMobile() {
  return (
    <div className='sort-filter-controls-mobile'>
        <div className='sort-filter-container'>
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
        {/* mobile refinements */}
        <aside role='dialog' className='mr-menu-container'>
            <button className='close-mr-btn'>
                <IoMdClose aria-hidden="true" style={{height: "40px", width: "40px"}}/>
            </button>
            <div className='mr-menu'>
                <header className='mr-header'>
                    <h1>filter</h1>
                    <button className='mr-clear-all-btn'>clear all</button>
                </header>
                <div className='mr-menu-body'>
                    {/* just a structure (assets not implemented yet) */}
                    <button className='mr-filter-btn'>Brand</button>
                    <button className='mr-filter-btn'>Size</button>
                    <button className='mr-filter-btn'>Color</button>
                    <button className='mr-filter-btn'>Product Type</button>
                    <button className='mr-filter-btn'>Design</button>
                    <button className='mr-filter-btn'>Sleeve Length</button>
                    <button className='mr-filter-btn'>Brand</button>
                    <button className='mr-filter-btn'>Size</button>
                    <button className='mr-filter-btn'>Color</button>
                    <button className='mr-filter-btn'>Product Type</button>
                    <button className='mr-filter-btn'>Design</button>
                    <button className='mr-filter-btn'>Sleeve Length</button>
                </div>
                <footer className='mr-menu-footer'>
                    <button className='mr-view-items std-button'>view items</button>
                </footer>
            </div>
        </aside>
    </div>
  )
}

export default SortFilterMobile
