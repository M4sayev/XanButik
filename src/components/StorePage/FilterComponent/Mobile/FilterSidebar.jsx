import { IoMdClose } from "react-icons/io";
import FilterSecondaryMenu from "./FilterSecondaryMenu";
import FilterMainMenu from "./FilterMainMenu";

function FilterSidebar({
  sideFilterMenuOpen,
  setSideFilterMenuOpen,
  handleClearAll,
  handleSelectFilterCategory,
  camelCaseToLabel,
  handleOptionsSelected,
  isSecondaryNav,
  setIsSecondaryNav,
  currentFilter,
  handleSelectAllBtn,
  handleClearAllPerFilter,
  secondaryPriceRange,
  setSecondaryPriceRange,
  handleSelectSecendorayOption,
  initialValues,
  secondaryFilters,
}) {
  return (
    <aside
      role="dialog"
      className={`mr-menu-container ${
        sideFilterMenuOpen ? "mr-menu-container--active" : ""
      }`}
    >
      <button
        className="close-mr-btn"
        onClick={() => setSideFilterMenuOpen(false)}
      >
        <IoMdClose
          aria-hidden="true"
          style={{
            height: "40px",
            width: "40px",
          }}
        />
      </button>

      <div className="menus-container">
        <FilterMainMenu
          handleClearAll={handleClearAll}
          handleSelectFilterCategory={handleSelectFilterCategory}
          camelCaseToLabel={camelCaseToLabel}
          handleOptionsSelected={handleOptionsSelected}
          initialValues={initialValues}
          secondaryFilters={secondaryFilters}
          secondaryPriceRange={secondaryPriceRange}
        />
        <FilterSecondaryMenu
          isSecondaryNav={isSecondaryNav}
          setIsSecondaryNav={setIsSecondaryNav}
          camelCaseToLabel={camelCaseToLabel}
          currentFilter={currentFilter}
          handleSelectAllBtn={handleSelectAllBtn}
          handleClearAllPerFilter={handleClearAllPerFilter}
          secondaryPriceRange={secondaryPriceRange}
          setSecondaryPriceRange={setSecondaryPriceRange}
          handleSelectSecendorayOption={handleSelectSecendorayOption}
          handleOptionsSelected={handleOptionsSelected}
        />
      </div>
    </aside>
  );
}

export default FilterSidebar;
