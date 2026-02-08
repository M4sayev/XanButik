import { FaArrowLeftLong } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { COLOR_MAP } from "../../../../constants/constants";
import PriceRangeSliderMobile from "./PriceRangeSliderMobile.jsx";

function FilterSecondaryMenu({
  isSecondaryNav,
  setIsSecondaryNav,
  camelCaseToLabel,
  currentFilter,
  handleSelectAllBtn,
  handleClearAllPerFilter,
  secondaryPriceRange,
  setSecondaryPriceRange,
  handleSelectSecondaryOption,
  handleOptionsSelected,
  secondaryFilters,
  initialValues,
  secondaryMenuRef,
}) {
  return (
    <nav
      className={`mr-menu secondary-sort-menu ${
        isSecondaryNav ? "secondary--active" : ""
      }`}
      ref={secondaryMenuRef}
      aria-label="Filter secondary menu"
    >
      <header className="mr-header">
        <button
          className="mr-header-go-back"
          onClick={() => setIsSecondaryNav(false)}
          aria-label={`Go back from ${camelCaseToLabel(currentFilter)} filter`}
        >
          <FaArrowLeftLong
            aria-hidden="true"
            style={{
              height: "25px",
              width: "20px",
              paddingTop: "3px",
              color: "var(--clr-primary-900)",
            }}
          />
          <p style={{ color: "var(--clr-primary-900)" }}>
            {camelCaseToLabel(currentFilter)}
          </p>
        </button>

        {currentFilter === "Price Range" ? null : currentFilter &&
          !secondaryFilters[currentFilter].length ? (
          <button
            className="mr-all-btn"
            onClick={() => handleSelectAllBtn(currentFilter)}
          >
            <GiCheckMark
              aria-hidden="true"
              style={{
                height: "12px",
                paddingBottom: "3px",
              }}
            />
            All
          </button>
        ) : (
          <button
            className="mr-all-btn"
            onClick={() => handleClearAllPerFilter(currentFilter)}
          >
            clear
          </button>
        )}
      </header>
      <div className="mr-menu-body">
        {currentFilter === "Price Range" ? (
          <PriceRangeSliderMobile
            secondaryPriceRange={secondaryPriceRange}
            setSecondaryPriceRange={setSecondaryPriceRange}
          />
        ) : (
          <></>
        )}
        {currentFilter !== "" && currentFilter !== "Price Range" ? (
          initialValues[currentFilter].map((option, index) => {
            const isSelected = secondaryFilters[currentFilter].includes(option);
            return (
              <button
                key={index}
                className={`mr-filter-btn mr-secondary-filter-btn ${
                  isSelected && "selected"
                }`}
                onClick={() => handleSelectSecondaryOption(option)}
                data-option={currentFilter}
                aria-pressed={isSelected}
                style={
                  currentFilter === "color"
                    ? {
                        "--menu-before-clr": COLOR_MAP[option] || "transparent",
                      }
                    : {}
                }
              >
                <p>{option}</p>
                {isSelected ? <GiCheckMark aria-hidden="true" /> : ""}
              </button>
            );
          })
        ) : (
          <></>
        )}
      </div>
      <footer className="mr-menu-footer">
        <button
          className="mr-view-items std-button"
          onClick={handleOptionsSelected}
        >
          view items
        </button>
      </footer>
    </nav>
  );
}

export default FilterSecondaryMenu;
