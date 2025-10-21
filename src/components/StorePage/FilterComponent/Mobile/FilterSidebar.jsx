import { IoMdClose } from "react-icons/io";
import FilterSecondaryMenu from "./FilterSecondaryMenu";
import FilterMainMenu from "./FilterMainMenu";
import { useFocusTrap } from "../../../../hooks/useTrapFocus";
import { useContext, useRef } from "react";
import { StoreContext } from "../../../../context/StoreContext";

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
  handleSelectSecondaryOption,
  initialValues,
  secondaryFilters,
  setSecondaryFilters,
}) {
  const mainMenuRef = useRef(null);
  const secondaryMenuRef = useRef(null);
  const firstEl = useRef(null);
  const { filters } = useContext(StoreContext);
  useFocusTrap(
    isSecondaryNav ? secondaryMenuRef : mainMenuRef,
    sideFilterMenuOpen,
    firstEl
  );

  function handleSidebarClose() {
    setSideFilterMenuOpen(false);
    // set the filters to default because view items wasn't clicked
    setSecondaryFilters(filters);
  }

  return (
    <aside
      role="dialog"
      className={`mr-menu-container ${
        sideFilterMenuOpen ? "mr-menu-container--active" : ""
      }`}
      aria-hidden={!sideFilterMenuOpen}
      inert={sideFilterMenuOpen ? undefined : ""}
      aria-labelledby="filter-sidebar-label"
      aria-modal="true"
    >
      <button
        className="close-mr-btn"
        aria-label="Close filter menu"
        onClick={handleSidebarClose}
        ref={firstEl}
      >
        <IoMdClose
          aria-hidden="true"
          style={{
            height: "40px",
            width: "40px",
          }}
        />
      </button>

      <h2 id="filter-sidebar-label" className="visually-hidden">
        Filter Menu
      </h2>

      <div className="menus-container">
        <FilterMainMenu
          handleClearAll={handleClearAll}
          handleSelectFilterCategory={handleSelectFilterCategory}
          camelCaseToLabel={camelCaseToLabel}
          handleOptionsSelected={handleOptionsSelected}
          initialValues={initialValues}
          secondaryFilters={secondaryFilters}
          secondaryPriceRange={secondaryPriceRange}
          isSecondaryNav={isSecondaryNav}
          mainMenuRef={mainMenuRef}
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
          handleSelectSecondaryOption={handleSelectSecondaryOption}
          handleOptionsSelected={handleOptionsSelected}
          secondaryFilters={secondaryFilters}
          initialValues={initialValues}
          secondaryMenuRef={secondaryMenuRef}
        />
      </div>
    </aside>
  );
}

export default FilterSidebar;
