import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./FilterComponent.css"

import { itemsList } from '../../../assets/itemsList'
import SortDropdown from './SortDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import SortFilterMobile from './SortFilterMobile'
import FilterButtonDesktop from './FilterButtonDesktop';

const DEFAULT_SORT = "Recommended";

function FilterComponent() {
    const [isDropDownOverflowing, setIsDropDownOverflowing] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef({});
    const [sortOptions, setSortOptions] = useState(DEFAULT_SORT);

    const intitalValues = {
        "Brand" : ["Mado", "Adidas", "Nike"],
        "Size" : ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        "Product Type" : ["Outerwear"],
        "Color" : ["Red", "Brown", "Green", "Blue", "Yellow", "Pink" ],
        "Product Fit": ["Regular", "Slim", "Loose"],
        "Sleeve Length": ["Long Sleeve", "Short Sleeve"],
        "Material": ["Cotton", "Linen", "Polyester", "Plastic"],
        "Season": ["Winter", "Summer", "Fall", "Spring"],
        "Neckline": ["Round", "Crew", "V-Neck"],
        "Style": ["Casual", "Formal"]
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
        <SortFilterMobile />

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

            {
            Object.entries(intitalValues).map(([sortCategory, data]) => {
                return <FilterButtonDesktop 
                            sortCategory={sortCategory}
                            data={data}
                            toggleDropDown={toggleDropDown}
                            openDropdown={openDropdown}
                            dropdownRefs={dropdownRefs} 
                            isDropDownOverflowing={isDropDownOverflowing} 
                            filters={filters} 
                            handleSelectAllFilterOptions={handleSelectAllFilterOptions} 
                            handleClearFilterOptions={handleClearFilterOptions}
                            selectFilterOption={selectFilterOption}
                            key={sortCategory}
                        />
            })}  
            <PriceRangeDropdown 
                toggleDropDown={toggleDropDown} 
                isDropDownOverflowing={isDropDownOverflowing} 
                openDropdown={openDropdown} 
                dropdownRefs={dropdownRefs}
            />
        </ul>
    </search>
  )
}

export default FilterComponent
