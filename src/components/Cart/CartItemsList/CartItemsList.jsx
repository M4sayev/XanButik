import React from "react";
import "./CartItemsList.css";
import { FaTrashCan } from "react-icons/fa6";
import { FiMinus, FiPlus } from "react-icons/fi";
import { calculateDiscountPrice, formatPrice } from "../../../utils/utils";

function CartItemsList({ cartItems, setCartItems }) {
  function handleDeleteCartItem(id) {
    const newItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  }

  function handleIncreaseItemCount(id) {
    const newItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  }

  function handleDecreaseItemCount(id, currentCount) {
    if (currentCount <= 1) {
      console.log(currentCount);
      handleDeleteCartItem(id);
      return;
    } else {
      const newItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  function handleCartItemKeyDown(event) {}
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
        } = item;
        const totalPrice = calculateDiscountPrice(price, discountPercent);
        return (
          <li tabIndex={0} key={id} role="listitem" className="cart-item">
            <div className="cart-item-info-container">
              <div className="img-wrapper">
                <img src={img[0]} alt="" />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-selectors">
                  Size: {currentSize.join(", ")} | Color:{" "}
                  {currentColor.join(", ")}
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
                  onClick={() => handleDecreaseItemCount(id, count)}
                >
                  <FiMinus aria-hidden="true" />
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
                  onClick={() => handleIncreaseItemCount(id)}
                >
                  <FiPlus aria-hidden="true" />
                </button>
              </div>
              <p className="cart-item-total-price" aria-label="Price per item">
                {formatPrice(totalPrice * count)}
              </p>
              <button
                className="remove-cart-item"
                type="button"
                aria-label={`Remove ${name} from cart`}
                onClick={() => handleDeleteCartItem(id)}
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
