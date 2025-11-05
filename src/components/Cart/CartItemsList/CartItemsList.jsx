import { useContext } from "react";
import "./CartItemsList.css";
import { FaTrashCan } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { calculateDiscountPrice, formatPrice } from "../../../utils/utils";
import { StoreContext } from "../../../context/StoreContext";

function CartItemsList({ cartItems, setCartItems }) {
  const { openProductPage } = useContext(StoreContext);

  function handleDeleteCartItem(id, currentColor, currentSize) {
    const newItems = cartItems.filter(
      (item) =>
        item.id !== id ||
        item.currentColor !== currentColor ||
        item.currentSize !== currentSize
    );
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  }

  function handleIncreaseItemCount(id, currentColor, currentSize) {
    const newItems = cartItems.map((item) => {
      if (
        item.id === id &&
        item.currentColor === currentColor &&
        item.currentSize === currentSize
      ) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  }

  function handleDecreaseItemCount(
    id,
    currentCount,
    currentColor,
    currentSize
  ) {
    if (currentCount <= 1) {
      handleDeleteCartItem(id, currentColor, currentSize);
      return;
    } else {
      const newItems = cartItems.map((item) => {
        if (
          item.id === id &&
          item.currentColor === currentColor &&
          item.currentSize === currentSize
        ) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  return (
    <ul className="cart-items-list" role="region" aria-label="Cart Items List">
      {cartItems.map((item) => {
        const {
          id,
          img,
          name,
          currentSize,
          count,
          price,
          discountPercent,
          currentColor,
          reviews,
          description,
          size,
          color,
        } = item;
        const totalPrice = calculateDiscountPrice(price, discountPercent);
        return (
          <li
            onClick={(e) =>
              openProductPage(e, {
                id,
                name,
                price,
                discountPercent,
                img,
                size,
                color,
                reviews,
                description,
              })
            }
            tabIndex={0}
            key={id + currentColor + currentSize}
            role="listitem"
            className="cart-item"
          >
            <div className="cart-item-info-container">
              <div className="img-wrapper">
                <img src={img[0]} alt="" />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-selectors">
                  Size: {currentSize} | Color: {currentColor}
                </p>
                <p className="cart-item-price">
                  {formatPrice(totalPrice)} each
                </p>
              </div>
            </div>
            <div className="cart-item-controls">
              <div
                className="cart-item-count-controls"
                role="group"
                aria-label={`Adjust quantity of ${name}`}
              >
                <button
                  className="decrease-item-count"
                  type="button"
                  aria-label={`Decrease quantity of ${name}`}
                  aria-controls={`item-count-${id}`}
                  onClick={() =>
                    handleDecreaseItemCount(
                      id,
                      count,
                      currentColor,
                      currentSize
                    )
                  }
                >
                  <FiMinus
                    aria-hidden="true"
                    style={{ color: "var(--clr-primary-900)" }}
                  />
                </button>
                <span
                  className="item-count"
                  aria-live="polite"
                  aria-atomic="true"
                  id={`item-count-${id}`}
                >
                  {count}
                </span>
                <button
                  className="increase-item-count"
                  type="button"
                  aria-label={`Increase quantity of ${name}`}
                  aria-controls={`item-count-${id}`}
                  onClick={() =>
                    handleIncreaseItemCount(id, currentColor, currentSize)
                  }
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
                onClick={() =>
                  handleDeleteCartItem(id, currentColor, currentSize)
                }
              >
                <FaTrashCan aria-hidden="true" />
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CartItemsList;
