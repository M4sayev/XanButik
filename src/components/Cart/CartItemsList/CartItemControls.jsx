import { FiMinus, FiPlus } from "react-icons/fi";
import { formatPrice } from "../../../utils/utils";
import { FaTrashCan } from "react-icons/fa6";

function CartItemControls({
  handleDecreaseItemCount,
  handleDeleteCartItem,
  name,
  id,
  currentColor,
  currentSize,
  count,
  handleIncreaseItemCount,
  totalPrice,
}) {
  return (
    <div className="cart-item-controls">
      <div className="cart-item-count-controls">
        <button
          className="decrease-item-count"
          type="button"
          aria-label={`Decrease quantity of ${name}`}
          aria-controls={`item-count-${id}`}
          onClick={() =>
            handleDecreaseItemCount(id, count, currentColor, currentSize)
          }
        >
          <FiMinus
            aria-hidden="true"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </button>
        <span className="item-count" aria-live="polite" id={`item-count-${id}`}>
          {count}
        </span>
        <button
          className="increase-item-count"
          type="button"
          aria-label={`Increase quantity of ${name}`}
          aria-controls={`item-count-${id}`}
          onClick={() => handleIncreaseItemCount(id, currentColor, currentSize)}
        >
          <FiPlus
            aria-hidden="true"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </button>
      </div>
      <p className="cart-item-total-price" aria-label="Price per item">
        {formatPrice(totalPrice * count)}
      </p>
      <button
        className="remove-cart-item"
        type="button"
        aria-label={`Remove ${name} from cart`}
        onClick={() => handleDeleteCartItem(id, currentColor, currentSize)}
      >
        <FaTrashCan aria-hidden="true" />
      </button>
    </div>
  );
}

export default CartItemControls;
