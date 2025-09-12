import React from 'react'

const COLOR_MAP = {
    "Black": "#191414ff",
    "Red": "#b23939ff",
    "Mustard": "#c1a83dff",
    "Dark Green": "#1d331dff",
    "Brown": "#4d2121ff",
    "Green": "#387638ff",
    "Blue": "#5e33ccff",
    "Yellow": "#ffe675ff",
    "Beige": "#f5f5dc",
    "Navy": "#000080",
    "Gray": "#787373ff",
    "Light Brown": "#d2b48cff",
    "Light Green": "#90ee90ff",
    "Dark Blue": "#00008bff",
    "Light Blue": "#add8e6ff",
    "Burgundy": "#800020ff",
    "Teal": "#008080ff",
    "Light Gray": "#e6e4e4ff",
    "Murky Blue": "#4a646cff"
}

function FilterButtonDesktopOption({isSelected, sortCategory, option, selectFilterOption}) {

  
  return (
    <li 
        className={`rl-dropdown-sort-option ${isSelected ? "rl-dropdown-sort-option--selected" : ""}`}
        data-option={option}
        style={ 
            sortCategory === "color" 
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
