import { useContext, useEffect, useState } from "react";
import ReactRangeSliderInput from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import {
  DEFAULT_PRICE_RANGE_MAX,
  DEFAULT_PRICE_RANGE_MIN,
} from "../../../../constants/constants";
import { StoreContext } from "../../../../context/StoreContext";

function PriceRangeDropdown({
  toggleDropDown,
  isDropDownOverflowing,
  openDropdown,
  dropdownRefs,
}) {
  const { priceRange, setPriceRange } = useContext(StoreContext);
  const [localRange, setLocalRange] = useState(priceRange);

  useEffect(() => {
    setLocalRange(priceRange);
  }, [priceRange]);

  return (
    <li
      aria-current={openDropdown === "priceRange"}
      className={`refinement-list-element 
            ${
              priceRange[0] !== DEFAULT_PRICE_RANGE_MIN ||
              priceRange[1] !== DEFAULT_PRICE_RANGE_MAX
                ? "refinement-head-btn--selected"
                : ""
            }
            `}
    >
      <div
        className={`refinement-dropdown-container price-range ${
          openDropdown === "priceRange" ? "rl-dropdown--active" : ""
        }`}
      >
        <button
          className="refinement-head-btn"
          aria-haspopup="dialog"
          aria-expanded={openDropdown === "priceRange"}
          aria-controls="price-range-dropdown"
          onClick={() => toggleDropDown("priceRange")}
        >
          <span>Price Range</span>
        </button>
        <div
          className={`rl-dropdown ${
            isDropDownOverflowing ? "dropdown-left" : ""
          }`}
          ref={(el) => {
            dropdownRefs.current["priceRange"] = el;
          }}
          id="price-range-dropdown"
        >
          <header className="rl-dropdown-header">
            <p id="price-range-label">Price Range Selected </p>
            <p className="rl-dropdown-header-preview" aria-live="polite">
              ${localRange[0]} - ${localRange[1]}
            </p>
          </header>
          <div className="range-slider-dropdown">
            <div className="range-slider-dropdown-container">
              <div className="thumb-label-container">
                <div className="thumb-label-left-label">${localRange[0]}</div>
                <div className="thumb-label-right-label">${localRange[1]}</div>
              </div>
              <ReactRangeSliderInput
                id="price-range-slider"
                min={0}
                max={1500}
                step={1}
                value={localRange}
                onInput={setLocalRange}
                aria-labelledby="price-range-label"
                onThumbDragEnd={() => setPriceRange(localRange)}
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default PriceRangeDropdown;
