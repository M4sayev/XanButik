import React, { useContext, useState } from "react";
import { StoreContext } from "../../../../context/StoreContext.jsx";
import { camelCaseToLabel } from "../../../../utils/utils.js";
import {
  DEFAULT_PRICE_RANGE_MAX,
  DEFAULT_PRICE_RANGE_MIN,
  DEFAULT_RESET_FILTER,
} from "../../../../constants/constants.js";
import MobileSortButton from "./MobileSortButton.jsx";
import MobileFilterButton from "./MobileFilterButton.jsx";
import FilterSidebar from "./FilterSidebar.jsx";

function SortFilterMobile({ initialValues }) {
  const { sortOptions, setSortOptions, setFilters, setPriceRange } =
    useContext(StoreContext);
  const [sideFilterMenuOpen, setSideFilterMenuOpen] = useState(false);
  const [isSecondaryNav, setIsSecondaryNav] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("");

  const [secondaryFilters, setSecondaryFilters] =
    useState(DEFAULT_RESET_FILTER);
  const [secondaryPriceRange, setSecondaryPriceRange] = useState([
    DEFAULT_PRICE_RANGE_MIN,
    DEFAULT_PRICE_RANGE_MAX,
  ]);

  function handleSelectSecendorayOption(option) {
    setSecondaryFilters((prev) => {
      const currentOptions = prev[currentFilter] || [];
      const isSelected = currentOptions.includes(option);
      return {
        ...prev,
        [currentFilter]: isSelected
          ? currentOptions.filter((o) => o !== option)
          : [...currentOptions, option],
      };
    });
  }

  function handleOptionsSelected() {
    setFilters(secondaryFilters);
    setPriceRange(secondaryPriceRange);
    setIsSecondaryNav(false);
    setSideFilterMenuOpen(false);
  }

  function handleClearAll() {
    setSecondaryFilters(DEFAULT_RESET_FILTER);
    setSecondaryPriceRange([DEFAULT_PRICE_RANGE_MIN, DEFAULT_PRICE_RANGE_MAX]);
  }

  function handleSelectFilterCategory(filter) {
    setCurrentFilter(filter);
    setIsSecondaryNav(true);
  }

  function handleClearAllPerFilter(filterCategory) {
    setSecondaryFilters((prev) => {
      return {
        ...prev,
        [filterCategory]: [],
      };
    });
  }

  function handleSelectAllBtn(filterCategory) {
    setSecondaryFilters((prev) => {
      return {
        ...prev,
        [filterCategory]: initialValues[filterCategory],
      };
    });
  }

  return (
    <div className="sort-filter-controls-mobile">
      <div className="sort-filter-container">
        <MobileSortButton
          sortOptions={sortOptions}
          setSortOptions={setSortOptions}
        />
        <MobileFilterButton setSideFilterMenuOpen={setSideFilterMenuOpen} />
      </div>
      <FilterSidebar
        sideFilterMenuOpen={sideFilterMenuOpen}
        setSideFilterMenuOpen={setSideFilterMenuOpen}
        handleClearAll={handleClearAll}
        handleSelectFilterCategory={handleSelectFilterCategory}
        camelCaseToLabel={camelCaseToLabel}
        handleOptionsSelected={handleOptionsSelected}
        isSecondaryNav={isSecondaryNav}
        setIsSecondaryNav={setIsSecondaryNav}
        currentFilter={currentFilter}
        handleSelectAllBtn={handleSelectAllBtn}
        handleClearAllPerFilter={handleClearAllPerFilter}
        secondaryPriceRange={secondaryPriceRange}
        setSecondaryPriceRange={setSecondaryPriceRange}
        handleSelectSecendorayOption={handleSelectSecendorayOption}
        initialValues={initialValues}
        secondaryFilters={secondaryFilters}
      />
    </div>
  );
}

export default SortFilterMobile;
