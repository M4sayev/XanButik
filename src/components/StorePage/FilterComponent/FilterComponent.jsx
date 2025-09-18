import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import "./FilterComponent.css";

import { filterConfig } from "../../../assets/filterConfig";
import SortDropdown from "./Desktop/SortDropdown";
import PriceRangeDropdown from "./Desktop/PriceRangeDropdown";
import SortFilterMobile from "./Mobile/SortFilterMobile";
import FilterButtonDesktop from "./Desktop/FilterButtonDesktop";

import { StoreContext } from "../../../context/StoreContext";
import { useFocusTrap } from "../../../hooks/useTrapFocus";
import { useEscapeKey } from "../../../hooks/useEscapeKey";

function FilterComponent({ currentCategory, setCurrentPage }) {
  const [isDropDownOverflowing, setIsDropDownOverflowing] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const { sortOptions, setSortOptions, filters, setFilters } =
    useContext(StoreContext);
  const dropdownRefs = useRef({});

  const [initialValues, setInitialValues] = useState(
    () => filterConfig[currentCategory]
  );

  useEffect(() => {
    const newInitialValues = filterConfig[currentCategory] || {};
    setInitialValues(newInitialValues);

    // Reset filters
    const resetFilters = {};
    for (const key in newInitialValues) {
      resetFilters[key] = [];
    }

    setFilters(resetFilters);
  }, [currentCategory]);

  function toggleDropDown(dropdownName) {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
    setIsDropDownOverflowing(false);
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

  // handle click outside dropdown
  useEffect(() => {
    const dropdownEl = dropdownRefs.current[openDropdown];
    let timeoutId;

    function handleClickOutside(e) {
      if (dropdownEl && !dropdownEl.contains(e.target)) {
        setOpenDropdown(null);
        setIsDropDownOverflowing(false);
      }
    }

    timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [openDropdown]);

  function handleSortOptionSelect(option) {
    setSortOptions(option);
    setOpenDropdown(null);
  }

  function handleOptionsDelegation(e) {
    const li = e.target.closest("li");
    if (!li) return;

    const selectedOption = li.dataset.option;
    if (selectedOption) {
      handleSortOptionSelect(selectedOption);
    }
  }

  function handleClearFilterOptions(filter) {
    setFilters((prev) => ({ ...prev, [filter]: [] }));
  }

  function handleSelectAllFilterOptions(filter) {
    setFilters((prev) => ({ ...prev, [filter]: initialValues[filter] }));
  }

  function selectFilterOption(filter, option) {
    setFilters((prev) => {
      const currentOptions = prev[filter] || [];
      const isSelected = currentOptions.includes(option);

      // Set the page to the first
      setCurrentPage(1);

      return {
        ...prev,
        [filter]: isSelected
          ? currentOptions.filter((o) => o !== option)
          : [...currentOptions, option],
      };
    });
  }

  useFocusTrap(
    { current: dropdownRefs.current[openDropdown] },
    openDropdown !== null
  );

  useEscapeKey(() => setOpenDropdown(null));

  return (
    <search className="sort-filter-component">
      <SortFilterMobile initialValues={initialValues} />

      {/*desktop refinements */}
      <ul className="sort-refinements-list">
        <SortDropdown
          sortOptions={sortOptions}
          openDropdown={openDropdown}
          toggleDropDown={toggleDropDown}
          isDropDownOverflowing={isDropDownOverflowing}
          dropdownRefs={dropdownRefs}
          handleOptionsDelegation={handleOptionsDelegation}
        />

        {Object.entries(initialValues).map(([sortCategory, data]) => {
          if (!data.length) return;
          return (
            <FilterButtonDesktop
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
          );
        })}
        <PriceRangeDropdown
          toggleDropDown={toggleDropDown}
          isDropDownOverflowing={isDropDownOverflowing}
          openDropdown={openDropdown}
          dropdownRefs={dropdownRefs}
        />
      </ul>
    </search>
  );
}

export default FilterComponent;
