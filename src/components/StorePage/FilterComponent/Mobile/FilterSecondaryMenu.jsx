import { FaArrowLeftLong } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { COLOR_MAP } from "../../../../constants/constants";

function FilterSecondaryMenu({
  isSecondaryNav,
  setIsSecondaryNav,
  camelCaseToLabel,
  currentFilter,
  handleSelectAllBtn,
  handleClearAllPerFilter,
  secondaryPriceRange,
  setSecondaryPriceRange,
  handleSelectSecendorayOption,
  handleOptionsSelected,
}) {
  return (
    <div
      className={`mr-menu secondary-sort-menu ${
        isSecondaryNav ? "secondary--active" : ""
      }`}
    >
      <header className="mr-header">
        <button
          className="mr-header-go-back"
          onClick={() => setIsSecondaryNav(false)}
        >
          <FaArrowLeftLong
            style={{
              height: "25px",
              width: "20px",
              paddingTop: "3px",
            }}
          />
          <p>{camelCaseToLabel(currentFilter)}</p>
        </button>

        {currentFilter === "Price Range" ? null : currentFilter &&
          !secondaryFilters[currentFilter].length ? (
          <button
            className="mr-all-btn"
            onClick={() => handleSelectAllBtn(currentFilter)}
          >
            <GiCheckMark
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
                onClick={() => handleSelectSecendorayOption(option)}
                data-option={currentFilter}
                style={
                  currentFilter === "color"
                    ? {
                        "--menu-before-clr": COLOR_MAP[option] || "transparent",
                      }
                    : {}
                }
              >
                <p>{option}</p>
                {isSelected ? <GiCheckMark /> : ""}
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
    </div>
  );
}

export default FilterSecondaryMenu;
