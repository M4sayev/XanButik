import { DEFAULT_SORT } from "../../../../constants/constants";

function SortDropdown({
  sortOptions,
  openDropdown,
  toggleDropDown,
  isDropDownOverflowing,
  dropdownRefs,
  handleOptionsDelegation,
}) {
  return (
    <li
      aria-current={openDropdown === "sort"}
      className={`refinement-list-element ${
        sortOptions !== DEFAULT_SORT ? "refinement-head-btn--selected" : ""
      }`}
    >
      <div
        className={`refinement-dropdown-container ${
          openDropdown === "sort" ? "rl-dropdown--active" : ""
        }`}
      >
        <button
          className="refinement-head-btn"
          onClick={() => toggleDropDown("sort")}
          aria-haspopup="listbox"
          aria-expanded={openDropdown === "sort"}
          aria-controls="sort-dropdown"
        >
          <span>Sort</span>
        </button>
        <div
          className={`rl-dropdown ${
            isDropDownOverflowing ? "dropdown-left" : ""
          }`}
          ref={(el) => {
            dropdownRefs.current["sort"] = el;
          }}
          id="sort-dropdown"
          role="listbox"
          aria-labelledby="sort-label"
        >
          <h2 id="sort-label" className="visually-hidden">
            Sort Options
          </h2>
          <ul
            className="rl-dropdown-sort-options-list"
            onClick={handleOptionsDelegation}
          >
            {[
              "Recommended",
              "What's new",
              "Price low to high",
              "Price high to low",
            ].map((option, index) => {
              return (
                <li
                  role="option"
                  aria-selected={sortOptions === option}
                  className={`rl-dropdown-sort-option ${
                    sortOptions === option
                      ? "rl-dropdown-sort-option--selected"
                      : ""
                  }`}
                  data-option={option}
                  key={index}
                >
                  <button>{option}</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default SortDropdown;
