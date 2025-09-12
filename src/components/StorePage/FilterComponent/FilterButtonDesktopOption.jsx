import React from 'react'

const COLOR_MAP = {
    Red: "#b23939ff",
    Brown: "#4d2121ff",
    Green: "#387638ff",
    Blue: "#331285ff",
    Yellow: "#c1a83dff",
    Pink: "#dd4c70ff"
}

function FilterButtonDesktopOption({isSelected, sortCategory, option, selectFilterOption}) {

  
  return (
    <li 
        className={`rl-dropdown-sort-option ${isSelected ? "rl-dropdown-sort-option--selected" : ""}`}
        data-option={option}
        style={ 
            sortCategory === "Color" 
            ? { "--before-color": COLOR_MAP[option] || "transparent" } 
            : {}
        }
        onClick={() => selectFilterOption(sortCategory, option)}
    >
        {(option)}
    </li>
  )
}

export default FilterButtonDesktopOption
