import { COLOR_MAP } from "../../../constants/constants";

function ColorSelector({ color, currentColor, handleSelectColor }) {
  return (
    <fieldset className="pp-color-selector">
      <legend className="pp-heading">Color</legend>
      <div className="pp-size-btns-container">
        {color.map((clr) => (
          <button
            type="button"
            style={{ backgroundColor: COLOR_MAP[clr] }}
            className={`pp-color-btn ${
              currentColor === clr && "pp-color-btn--active"
            }`}
            key={clr}
            aria-pressed={clr === currentColor}
            onClick={() => handleSelectColor(clr)}
          ></button>
        ))}
      </div>
    </fieldset>
  );
}

export default ColorSelector;
