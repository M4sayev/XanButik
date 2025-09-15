import React, { useContext, useState } from 'react'
import { GiCheckMark } from 'react-icons/gi'
import { IoMdClose } from 'react-icons/io'
import { StoreContext } from '../../../context/StoreContext'
import { camelCaseToLabel } from "../../../utils/utils.js";
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { DEFAULT_RESET_FILTER } from '../../../constants/constants.js';

function SortFilterMobile({initialValues}) {
    const { sortOptions, setSortOptions } = useContext(StoreContext); 
    const [ sideFilterMenuOpen, setSideFilterMenuOpen ] = useState(false);
    const [ isSecondaryNav, setIsSecondaryNav ] = useState(false);
    const [ currentOption, setCurrentOption ] = useState("");

    const [ secondaryFilters, setSecondaryFilters ] = useState(DEFAULT_RESET_FILTER);

  return (
    <div className='sort-filter-controls-mobile'>
        <div className='sort-filter-container'>
            <div className='sort-container'>
                <label 
                    htmlFor="sortProductBy" 
                    className="sort-dropdown-btn " 

                    tabIndex={0}
                >Sort</label>
                <select 
                    name="sort" 
                    id="sortProductBy"
                    value={sortOptions}
                    onChange={(e) => setSortOptions(e.target.value)}
                >
                    <option value="Recommended">Recommended</option>
                    <option value="What's new">What's New</option>
                    <option value="Price high to low">Price high to low</option>
                    <option value="Price low to high">Price low to high</option>
                </select>
            </div>
            <div className='filter-container'>
                <button 
                    className='filter-btn'
                    onClick={() => setSideFilterMenuOpen(true)}
                >
                    Filter
                    <GiCheckMark aria-hidden="true" style={{marginLeft: "3px", width: "13px", height: "13px"}}/>
                </button>
            </div>   
        </div>
        {/* mobile refinements */}
        <aside 
            role='dialog' 
            className={`mr-menu-container ${sideFilterMenuOpen ? "mr-menu-container--active" : ""}`}
        >
            <button 
                className='close-mr-btn'
                onClick={() => setSideFilterMenuOpen(false)}
            >
                <IoMdClose aria-hidden="true" style={{height: "40px", width: "40px"}}/>
            </button>

            <div className='menus-container'>
                <div className="mr-menu">
                    <header className='mr-header'>
                        <h1>filter</h1>
                        <button className='mr-clear-btn'>clear all</button>
                    </header>
                    <div className='mr-menu-body'>
                        {
                            Object.keys(initialValues).map((filter) => {
                                return (
                                    <button 
                                        key={filter} 
                                        className='mr-filter-btn'
                                        onClick={() => {
                                            setCurrentOption(filter);
                                            setIsSecondaryNav(true);
                                        }}
                                    >
                                        <p>{camelCaseToLabel(filter)}</p>
                                        {false && <span className="mr-filter-btn-preview"></span>}
                                    </button>
                                )
                            })
                        }
                    </div>
                    <footer className='mr-menu-footer'>
                        <button className='mr-view-items std-button'>view items</button>
                    </footer>
                </div>
                <div className={`mr-menu secondary-sort-menu ${isSecondaryNav ? "secondary--active" : ""}`}>
                    <header className='mr-header'>
                        <button className="mr-header-go-back" onClick={() => setIsSecondaryNav(false)}>
                            <FaArrowLeftLong style={{height:"25px", width: "20px", paddingTop: "3px"}}/>
                            <p>{currentOption}</p>
                        </button>
                        <button className='mr-all-btn'>
                            <GiCheckMark style={{height: "12px", paddingBottom: "3px"}}/>
                            All
                        </button>
                    </header>
                    <div className='mr-menu-body'>
                        {
                            currentOption !== "" ?
                            initialValues[currentOption].map((option, index) => {
                                return <button 
                                        key={index} 
                                        className='mr-filter-btn'>
                                        <p>{option}</p>
                                    </button>
                            })
                            : ""
                        }
                    </div>
                    <footer className='mr-menu-footer'>
                        <button className='mr-view-items std-button'>view items</button>
                    </footer>
                </div>
            </div>

        </aside>
    </div>
  )
}

export default SortFilterMobile
