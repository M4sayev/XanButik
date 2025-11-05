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
      role="option"
      aria-selected={isSelected}
    >
      <button
        data-option={option}
        style={
          sortCategory === "color"
            ? { "--before-color": COLOR_MAP[option] || "transparent" }
            : {}
        }
        onClick={() => selectFilterOption(sortCategory, option)}
      >
        {option}
      </button>
    </li>
  );
}

export default FilterButtonDesktopOption;
