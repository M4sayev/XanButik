import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./FilterComponent.css"
import { GiCheckMark } from 'react-icons/gi'
import { IoIosCheckmark, IoMdCheckmark, IoMdClose } from 'react-icons/io'
import { ImCheckmark } from 'react-icons/im'
import 'react-range-slider-input/dist/style.css';
import ReactRangeSliderInput from 'react-range-slider-input'
import { itemsList } from '../../../assets/itemsList'
import SortDropdown from './SortDropdown'

const DEFAULT_PRICE_RANGE_MIN = 0;
const DEFAULT_PRICE_RANGE_MAX = 1500;
const DEFAULT_SORT = "Recommended";


const COLOR_MAP = {
    Red: "#b23939ff",
    Brown: "#4d2121ff",
    Green: "#387638ff",
    Blue: "#331285ff",
    Yellow: "#c1a83dff",
    Pink: "#dd4c70ff"
}

function FilterComponent() {
    const [priceRange, setPriceRange] = useState([0, 1500]);
    const [isDropDownOverflowing, setIsDropDownOverflowing] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef({});
    const [sortOptions, setSortOptions] = useState(DEFAULT_SORT);

    const intitalValues = {
        "Color" : ["Red", "Brown", "Green", "Blue", "Yellow", "Pink" ]
    };

    const [filters, setFilters] = useState({
        "Brand": [],
        "Size": [],
        "Product Type": [],
        "Color": [],
        "Product Fit": [],
        "Sleeve Length": [],
        "Material": [],
        "Season": [],
        "Neckline": [],
        "Style": []
    })

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
    }, [openDropdown])

    // handle click outside dropdown
    useEffect(() => {
        const dropdownEl = dropdownRefs.current[openDropdown];
        let timeoutId;

        function handleClickOutside(e) {
            if (dropdownEl && !dropdownEl.contains(e.target)) {
                setOpenDropdown(null);
            }
        }

        timeoutId = setTimeout(() => {
            document.addEventListener("click", handleClickOutside);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            document.removeEventListener("click", handleClickOutside);
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
    
    function handleClearFilterOptions(filter) {
        setFilters((prev) => ({...prev, [filter]: []}));
    }

    function handleSelectAllFilterOptions(filter) {
        setFilters((prev) => ({...prev, [filter]: intitalValues[filter]}));
    }

    function selectFilterOption(filter, option) {

        setFilters((prev) => {
            const currentOptions = prev[filter] || [];
            const isSelected = currentOptions.includes(option);
    
            return {
                ...prev,
                [filter]: isSelected
                    ? currentOptions.filter(o => o !== option)
                    : [...currentOptions, option] 
            };
                
        });
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



        {/*desktop refinements */}
        <ul className='sort-refinements-list'>
            <SortDropdown 
                sortOptions={sortOptions} 
                openDropdown={openDropdown} 
                toggleDropDown={toggleDropDown} 
                isDropDownOverflowing={isDropDownOverflowing} 
                dropdownRefs={dropdownRefs} 
                handleOptionsDelegation={handleOptionsDelegation}
                DEFAULT_SORT={DEFAULT_SORT}
            />

            <li className={`refinement-list-element ${filters["Color"].length ? "refinement-head-btn--selected" : ""}`} data-type={"Color"}>
                <div 
                    className={`refinement-dropdown-container ${openDropdown === "Color" ? "rl-dropdown--active" : ""} color`}
                >
                    <button  
                        className='refinement-head-btn'
                        onClick={() => toggleDropDown("Color")}
                    >
                        <span>Color</span>
                    </button>
                    <div 
                        className={`rl-dropdown ${isDropDownOverflowing ? "dropdown-left" : ""}`}
                        ref={(el) => { dropdownRefs.current["Color"] = el }}
                    >
                        <header className='rl-dropdown-header'>
                            <div className='dropdown-selected-preview-container'>
                                <p>({filters["Color"].length}) selected </p>
                                <span className='rl-dropdown-header-preview'>
                                    {filters["Color"].join(", ")}
                                </span>
                            </div>
                            {
                                !filters["Color"].length ? 
                                <button 
                                    className='std-button rl-dropdown-header-btn'
                                    onClick={() => handleSelectAllFilterOptions("Color")}
                                >
                                    <ImCheckmark style={{paddingTop: "5px"}}/>
                                    ALL
                                </button> 
                                :
                                <button 
                                    className='std-button rl-dropdown-header-btn'
                                    onClick={() => handleClearFilterOptions("Color")}
                                >
                                    CLEAR
                                </button> 
                            }
                        </header>
                        {/* color for the color dropdown */}
                        <ul className='rl-dropdown-sort-options-list'>
                            {/* inject the color dynamically to the pseudoelement */}
                            {intitalValues["Color"].map((color, index) => {
                                const isSelected = filters["Color"].includes(color);

                                return (
                                    <li 
                                        className={`rl-dropdown-sort-option ${isSelected ? "rl-dropdown-sort-option--selected" : ""}`}
                                        data-option={color}
                                        style={{ "--before-color": COLOR_MAP[color] || "transparent" }}
                                        key={index}
                                        onClick={() => selectFilterOption("Color", color)}
                                    >
                                        {color}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </li>

            {["Brand", "Product Type", "Fit", "Size", "Sleeve Length", "Style", "Material", "Neckline", "Design"].map((sortBtn, index) => {
                return (
                    <li className='refinement-list-element' key={index}>
                        <div className='refinement-dropdown-container'>
                            <button className='refinement-head-btn'>
                                <span>{sortBtn}</span>
                            </button>
                        </div>
                    </li>
                )
                
            })
            }   
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
        </ul>
    </search>
  )
}

export default FilterComponent
