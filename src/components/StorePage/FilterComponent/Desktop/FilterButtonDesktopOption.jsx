import React from "react";
import { COLOR_MAP } from "../../../../constants/constants";

function FilterButtonDesktopOption({
  isSelected,
  sortCategory,
  option,
  selectFilterOption,
}) {
  return (
    <li
      className={`rl-dropdown-sort-option ${
        isSelected ? "rl-dropdown-sort-option--selected" : ""
      }`}
      data-option={option}
      style={
        sortCategory === "color"
          ? { "--before-color": COLOR_MAP[option] || "transparent" }
          : {}
      }
      onClick={() => selectFilterOption(sortCategory, option)}
    >
      {option}
    </li>
  );
}

export default FilterButtonDesktopOption;
