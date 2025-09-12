import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import "./FilterComponent.css"

import { filterConfig } from '../../../assets/filterConfig'
import SortDropdown from './SortDropdown'
import PriceRangeDropdown from './PriceRangeDropdown'
import SortFilterMobile from './SortFilterMobile'
import FilterButtonDesktop from './FilterButtonDesktop';

const DEFAULT_SORT = "Recommended";

function FilterComponent({ currentCategory }) {
    const [isDropDownOverflowing, setIsDropDownOverflowing] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const dropdownRefs = useRef({});
    const [sortOptions, setSortOptions] = useState(DEFAULT_SORT);
    const [intitalValues, setInitialValues] = useState(() => filterConfig[currentCategory]);
    
    useEffect(() => {
        console.log("currentCategory:", currentCategory);
        const newInitialValues = filterConfig[currentCategory] || {};
        console.log(newInitialValues);
        setInitialValues(newInitialValues);

        // Reset filters
        const resetFilters = {};
        for (const key in newInitialValues) {
            resetFilters[key] = [];
        }

        setFilters(resetFilters);
    }, [currentCategory]);

    const [filters, setFilters] = useState({
        "size": [],
        "productType": [],
        "color": [],
        "fit": [],
        "sleeveLength": [],
        "material": [],
        "design": [],
        "season": [],
        "neckline": [],
        "style": []
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
                if (!data.length) return;
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
