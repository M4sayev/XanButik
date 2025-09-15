import React from "react";
import { ImCheckmark } from "react-icons/im";
import FilterButtonDesktopOption from "./FilterButtonDesktopOption";
import { camelCaseToLabel } from "../../../../utils/utils";

function FilterButtonDesktop({
  sortCategory,
  toggleDropDown,
  openDropdown,
  dropdownRefs,
  isDropDownOverflowing,
  filters,
  handleSelectAllFilterOptions,
  handleClearFilterOptions,
  selectFilterOption,
  data,
}) {
  return (
    <li
      className={`refinement-list-element ${
        filters[sortCategory].length ? "refinement-head-btn--selected" : ""
      }`}
      data-type={sortCategory}
    >
      <div
        className={`refinement-dropdown-container ${
          openDropdown === sortCategory ? "rl-dropdown--active" : ""
        }`}
      >
        <button
          className="refinement-head-btn"
          onClick={() => toggleDropDown(sortCategory)}
        >
          <span>{camelCaseToLabel(sortCategory)}</span>
        </button>
        <div
          className={`rl-dropdown ${
            isDropDownOverflowing ? "dropdown-left" : ""
          }`}
          ref={(el) => {
            dropdownRefs.current[sortCategory] = el;
          }}
        >
          <header className="rl-dropdown-header">
            <div className="dropdown-selected-preview-container">
              <p>({filters[sortCategory].length}) selected </p>
              <span className="rl-dropdown-header-preview">
                {filters[sortCategory].join(", ")}
              </span>
            </div>
            {!filters[sortCategory].length ? (
              <button
                className="std-button rl-dropdown-header-btn"
                onClick={() => handleSelectAllFilterOptions(sortCategory)}
              >
                <ImCheckmark style={{ height: "10px" }} />
                ALL
              </button>
            ) : (
              <button
                className="std-button rl-dropdown-header-btn"
                onClick={() => handleClearFilterOptions(sortCategory)}
              >
                CLEAR
              </button>
            )}
          </header>
          <ul className="rl-dropdown-sort-options-list">
            {data.map((option, index) => {
              const isSelected = filters[sortCategory].includes(option);

              return (
                <FilterButtonDesktopOption
                  isSelected={isSelected}
                  sortCategory={sortCategory}
                  option={option}
                  selectFilterOption={selectFilterOption}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default FilterButtonDesktop;
