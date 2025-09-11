import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./FilterComponent.css"
import { GiCheckMark } from 'react-icons/gi'
import { IoIosCheckmark, IoMdCheckmark, IoMdClose } from 'react-icons/io'
import { ImCheckmark } from 'react-icons/im'
import 'react-range-slider-input/dist/style.css';
import ReactRangeSliderInput from 'react-range-slider-input'

function FilterComponent() {

    const [priceRange, setPriceRange] = useState([0, 1500]);
    const [isDropDownOverflowing, setIsDropDownOverflowing] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef({});
    const [sortOptions, setSortOptions] = useState("Recommended");

    function toggleDropDown(dropdownName) {
        setOpenDropdown((prev) => prev === dropdownName ? null : dropdownName);
    }


    useLayoutEffect(() => {
        if (!openDropdown) {
            setIsDropDownOverflowing(false);
            return;
        }

        const dropdownEl = dropdownRefs.current[openDropdown];
        if (dropdownEl) {
            const rect = dropdownEl.getBoundingClientRect();
            const overflows = rect.right > window.innerWidth;
            if (overflows !== isDropDownOverflowing) {
                setIsDropDownOverflowing(overflows);
            }
        }
    }, [openDropdown]);

    function handleSortOptionSelect(option) {
        setSortOptions(option);
        setOpenDropdown(null);
    }

    function handleOptionsDelegation(e) {
        const li = e.target.closest('li');
        if (!li) return;

        const selectedOption = li.dataset.option;
        if (selectedOption) {
            handleSortOptionSelect(selectedOption);
        }
    }

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
                <div className={`refinement-dropdown-container ${openDropdown === "Sort" ? "rl-dropdown--active" : ""}`}>
                    <button 
                        className='refinement-head-btn'
                        onClick={() => toggleDropDown("Sort")}
                    >
                        <span>Sort</span>
                    </button>
                    <div 
                        className={`rl-dropdown ${isDropDownOverflowing ? "dropdown-left" : ""}`}
                        ref={(el) => { dropdownRefs.current["Sort"] = el }}
                    >
                        <ul className='rl-dropdown-sort-options-list'onClick={handleOptionsDelegation}>
                            {["Recommended", "What's new", "Price high to low", "Price low to high"].map(option => {
                                return (
                                     <li 
                                        className={`rl-dropdown-sort-option ${sortOptions === option ? "rl-dropdown-sort-option--selected" : ""}`}
                                        data-option={option}
                                    >{option}</li>
                                )
                            })}

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
