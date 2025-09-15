import React from 'react'
import { DEFAULT_SORT } from '../../../constants/constants'

function SortDropdown({ sortOptions, openDropdown, toggleDropDown, isDropDownOverflowing, dropdownRefs, handleOptionsDelegation }) {
  return (
    <li className={`refinement-list-element ${sortOptions !== DEFAULT_SORT ? "refinement-head-btn--selected" : ""}`}>
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
                    {["Recommended", "What's new", "Price low to high", "Price high to low"].map((option, index) => {
                        return (
                                <li 
                                className={`rl-dropdown-sort-option ${sortOptions === option ? "rl-dropdown-sort-option--selected" : ""}`}
                                data-option={option}
                                key={index}
                            >{option}</li>
                        )
                    })}

                </ul>
            </div>
        </div>
    </li>
  )
}

export default SortDropdown
