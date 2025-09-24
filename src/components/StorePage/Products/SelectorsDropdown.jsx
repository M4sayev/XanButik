import { useState } from "react";
import ColorSelector from "../../ProductPage/ProductPageSelectors/ColorSelector";
import SizeSelector from "../../ProductPage/ProductPageSelectors/SizeSelector";

function SelectorsDropdown({
  selectorsModalOpen,
  color,
  handleSelectColor,
  size,
  handleSelectSize,
  name,
  price,
  discountPercent,
  img,
  id,
  selectedColor,
  selectedSize,
  handleAddToCart,
}) {
  return (
    <div
      className={`shopping-bag-dropdown ${
        selectorsModalOpen && "shopping-bag-dropdown--active"
      }`}
    >
      <ColorSelector
        color={color}
        currentColor={selectedColor}
        handleSelectColor={handleSelectColor}
      />
      <SizeSelector
        size={size}
        currentSize={selectedSize}
        handleSelectSize={handleSelectSize}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          className="std-button"
          onClick={() =>
            handleAddToCart({
              id,
              img,
              name,
              price,
              discountPercent,
              currentColor: selectedColor,
              currentSize: selectedSize,
              color,
              size,
            })
          }
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default SelectorsDropdown;
