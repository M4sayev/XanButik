import React, { useState } from 'react'
import "./FilterComponent.css"
import { GiCheckMark } from 'react-icons/gi'
import { IoIosCheckmark, IoMdCheckmark, IoMdClose } from 'react-icons/io'
import { ImCheckmark } from 'react-icons/im'
import 'react-range-slider-input/dist/style.css';
import ReactRangeSliderInput from 'react-range-slider-input'

function FilterComponent() {

    const [priceRange, setPriceRange] = useState([0, 1500]);
  return (
    <search className='sort-filter-component'>
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



        {/* desktop refinements */}
        <ul className='sort-refinements-list'>
            {/* just a structure (assets not implemented yet) rl-dropdown--active*/}
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                        <span>Sort</span>
                    </button>
                    <div className='rl-dropdown'>
                        <ul className='rl-dropdown-sort-options-list'>
                            <li className='rl-dropdown-sort-option rl-dropdown-sort-option--selected'>Recommended</li>
                            <li className='rl-dropdown-sort-option'>What's new</li>
                            <li className='rl-dropdown-sort-option'>Price high to low</li>
                            <li className='rl-dropdown-sort-option'>Price low to high</li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container '>
                    <button className='refinement-head-btn'>
                       <span>Brand</span>
                    </button>
                    <div className='rl-dropdown'>
                        <header className='rl-dropdown-header'>
                            <p>(0) selected </p>
                            <button className='std-button rl-dropdown-header-btn'>
                                <ImCheckmark style={{paddingTop: "5px"}}/>
                                ALL
                                {/* conditionally clear */}
                            </button>
                        </header>
                        <ul className='rl-dropdown-sort-options-list'>
                            <li className='rl-dropdown-sort-option rl-dropdown-sort-option--selected'>
                                Mado (1)
                            </li>
                            <li className='rl-dropdown-sort-option'>
                                Mado (1)
                            </li>
                            <li className='rl-dropdown-sort-option'>
                                Mado (1) 
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container  color'>
                    <button className='refinement-head-btn'>
                        <span>Color</span>
                    </button>
                    <div className='rl-dropdown'>
                        <header className='rl-dropdown-header'>
                            <p>(0) selected </p>
                            <button className='std-button rl-dropdown-header-btn'>
                                <ImCheckmark style={{paddingTop: "5px"}}/>
                                ALL
                                {/* conditionally clear */}
                            </button>
                        </header>
                        {/* color for the color dropdown */}
                        <ul className='rl-dropdown-sort-options-list'>
                            {/* inject the color dynamically to the pseudoelement */}
                            <li className='rl-dropdown-sort-option rl-dropdown-sort-option--selected' data-color="Red">
                                Red
                            </li>
                            <li className='rl-dropdown-sort-option'>
                                Green
                            </li>
                            <li className='rl-dropdown-sort-option'>
                                Purple
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                        <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                       <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                       <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element refinement-head-btn--selected'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                       <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                       <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                       <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                       <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container'>
                    <button className='refinement-head-btn'>
                       <span>Sort</span>
                    </button>
                </div>
            </li>
            <li className='refinement-list-element'>
                <div className='refinement-dropdown-container price-range rl-dropdown--active'>
                    <button className='refinement-head-btn'>
                       <span>Price Range</span>
                    </button>
                    <div className='rl-dropdown'>
                        <header className='rl-dropdown-header'>
                            <p>Price Range Selected </p>
                            <p className='range-preview'>
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
        </ul>
    </search>
  )
}

export default FilterComponent
