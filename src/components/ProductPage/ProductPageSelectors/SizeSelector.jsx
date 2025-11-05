import { SIZE_ORDER_MAP } from "../../../constants/constants";

function SizeSelector({ size, handleSelectSize, currentSize }) {
  return (
    <fieldset className="pp-size-selector">
      <legend className="pp-heading">Size</legend>
      <div className="pp-size-btns-container" role="group" aria-label="Sizes">
        {size
          .toSorted((a, b) => SIZE_ORDER_MAP[a] - SIZE_ORDER_MAP[b])
          .map((item, index) => {
            return (
              <button
                type="button"
                className={`pp-size-btn ${
                  item === currentSize && "pp-size-btn--active"
                }`}
                key={index}
                onClick={() => handleSelectSize(item)}
                aria-pressed={item === currentSize}
              >
                {item}
              </button>
            );
          })}
      </div>
    </fieldset>
  );
}

export default SizeSelector;
