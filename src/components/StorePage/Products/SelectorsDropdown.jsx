import { useRef } from "react";
import ColorSelector from "../../ProductPage/ProductPageSelectors/ColorSelector";
import SizeSelector from "../../ProductPage/ProductPageSelectors/SizeSelector";
import "./SelectorsDropdown.css";
import { IoClose } from "react-icons/io5";
import { useFocusTrap } from "../../../hooks/useTrapFocus";
import { useEscapeKey } from "../../../hooks/useEscapeKey";

function SelectorsDropdown({
  selectorsDropdownOpen,
  setSelectorsDropdownOpen,
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
  reviews,
  description,
}) {
  const dropdownRef = useRef(null);
  useFocusTrap(dropdownRef, selectorsDropdownOpen);

  useEscapeKey(() => setSelectorsDropdownOpen(false));
  return (
    <div
      className={`selectors-dropdown ${
        selectorsDropdownOpen && "selectors-dropdown--active"
      }`}
      ref={dropdownRef}
    >
      <button
        className="icon-btn cross-icon"
        style={{ position: "absolute", right: "var(--spacing-sm)" }}
        type="button"
        onClick={() => setSelectorsDropdownOpen(false)}
        aria-label="Close dropdown popup"
        tabIndex={selectorsDropdownOpen ? 0 : -1}
        disabled={!selectorsDropdownOpen}
      >
        <IoClose
          className="cross"
          style={{ color: "var(--clr-primary-900)" }}
        />
      </button>
      {!selectorsDropdownOpen ? (
        ""
      ) : (
        <div className="selectors-container">
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
        </div>
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button
          tabIndex={selectorsDropdownOpen ? 0 : -1}
          disabled={!selectorsDropdownOpen}
          className="std-button selectors-add-to-cart-btn"
          style={{ width: "100%" }}
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
              reviews,
              description,
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
