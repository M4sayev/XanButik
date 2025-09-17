import React from "react";
import { SIZE_ORDER_MAP } from "../../../constants/constants";

function SizeSelector({ size, handleSelectSize, currentSize }) {
  return (
    <div className="pp-size-selector">
      <h1 className="pp-heading">Size</h1>
      <div className="pp-size-btns-container">
        {size
          .toSorted((a, b) => SIZE_ORDER_MAP[a] - SIZE_ORDER_MAP[b])
          .map((item, index) => (
            <button
              className={`pp-size-btn ${
                item === currentSize && "pp-size-btn--active"
              }`}
              key={index}
              onClick={() => handleSelectSize(item)}
            >
              {item}
            </button>
          ))}
      </div>
    </div>
  );
}

export default SizeSelector;
