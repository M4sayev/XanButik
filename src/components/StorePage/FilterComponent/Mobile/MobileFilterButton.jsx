import React from "react";
import { GiCheckMark } from "react-icons/gi";

function MobileFilterButton({ setSideFilterMenuOpen, sideFilterMenuOpen }) {
  return (
    <div className="filter-container">
      <button
        className="filter-btn"
        aria-haspopup="menu"
        aria-expanded={sideFilterMenuOpen}
        aria-controls="side-filter-menu"
        onClick={() => setSideFilterMenuOpen(true)}
      >
        Filter
        <GiCheckMark
          aria-hidden="true"
          style={{
            marginLeft: "3px",
            width: "13px",
            height: "13px",
          }}
        />
      </button>
    </div>
  );
}

export default MobileFilterButton;
