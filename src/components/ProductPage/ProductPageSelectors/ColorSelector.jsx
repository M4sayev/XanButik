import React from "react";
import { COLOR_MAP } from "../../../constants/constants";

function ColorSelector({ color, currentColor, handleSelectColor }) {
  return (
    <div className="pp-color-selector">
      <h1 className="pp-heading">Color</h1>
      <div className="pp-size-btns-container">
        {color.map((clr, index) => (
          <button
            style={{ backgroundColor: COLOR_MAP[clr] }}
            className={`pp-color-btn ${
              currentColor === clr && "pp-color-btn--active"
            }`}
            key={index}
            onClick={() => handleSelectColor(clr)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default ColorSelector;
