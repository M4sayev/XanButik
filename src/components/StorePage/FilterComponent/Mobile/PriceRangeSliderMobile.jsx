import ReactRangeSliderInput from "react-range-slider-input";

function PriceRangeSliderMobile({
  secondaryPriceRange,
  setSecondaryPriceRange,
}) {
  return (
    <div className="range-slider-dropdown-container mobile">
      <div className="thumb-label-container">
        <div className="thumb-label-left-label">${secondaryPriceRange[0]}</div>
        <div className="thumb-label-right-label">${secondaryPriceRange[1]}</div>
      </div>
      <ReactRangeSliderInput
        id="price-range-slider"
        min={0}
        max={1500}
        step={1}
        value={secondaryPriceRange}
        onInput={setSecondaryPriceRange}
        aria-labelledby="price-range-labels"
      />
    </div>
  );
}

export default PriceRangeSliderMobile;
