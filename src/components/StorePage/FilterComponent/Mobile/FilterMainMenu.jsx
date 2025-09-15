import {
  DEFAULT_PRICE_RANGE_MAX,
  DEFAULT_PRICE_RANGE_MIN,
} from "../../../../constants/constants";

function FilterMainMenu({
  handleClearAll,
  handleSelectFilterCategory,
  camelCaseToLabel,
  handleOptionsSelected,
  initialValues,
  secondaryFilters,
  secondaryPriceRange,
}) {
  return (
    <div className="mr-menu">
      <header className="mr-header">
        <h1>filter</h1>
        <button className="mr-clear-btn" onClick={handleClearAll}>
          clear all
        </button>
      </header>
      <div className="mr-menu-body">
        {Object.keys(initialValues).map((filter) => {
          // check if the category doesn't have that sort option
          if (!initialValues[filter].length) return;
          return (
            <button
              key={filter}
              className="mr-filter-btn"
              onClick={() => handleSelectFilterCategory(filter)}
            >
              <p>{camelCaseToLabel(filter)}</p>
              {secondaryFilters[filter].length ? (
                <span className="mr-filter-btn-preview">
                  {secondaryFilters[filter].join(", ")}
                </span>
              ) : (
                ""
              )}
            </button>
          );
        })}
        <button
          className="mr-filter-btn"
          onClick={() => handleSelectFilterCategory("Price Range")}
        >
          <p>Price Range</p>
          {secondaryPriceRange[0] !== DEFAULT_PRICE_RANGE_MIN ||
          secondaryPriceRange[1] !== DEFAULT_PRICE_RANGE_MAX ? (
            <span className="mr-filter-btn-preview">{`${secondaryPriceRange[0]}$ - ${secondaryPriceRange[1]}$`}</span>
          ) : (
            ""
          )}
        </button>
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

export default FilterMainMenu;
