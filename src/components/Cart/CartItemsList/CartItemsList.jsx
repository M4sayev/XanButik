import React from "react";
import "./CartItemsList.css";
import { FaTrashCan } from "react-icons/fa6";

function CartItemsList({ cartItems }) {
  return (
    <ul role="region" aria-label="Cart Items List">
      {cartItems.map((item) => {
        const { id, img, name, selectedSize, count, price, selectedColor } =
          item;
        return (
          <li key={id} role="listitem" className="cart-item">
            <div className="cart-item-info-container">
              <div className="img-wrapper">
                <img src={img[0]} alt="" />
              </div>
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-selectors">
                  Size: {selectedSize} | Color: {selectedColor}
                </p>
                <p className="cart-item-price">${price.toFixed(2)} each</p>
              </div>
            </div>
            <div className="cart-item-controls">
              <div className="cart-item-count-controls">
                <button
                  className="decrease-item-count"
                  type="button"
                  aria-label={`Decrease quantity of ${name}`}
                  aria-controls={`item-count-${id}`}
                >
                  -
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
                >
                  +
                </button>
              </div>
              <p className="cart-item-total-price" aria-label="Price per item">
                ${(price * count).toFixed(2)}
              </p>
              <button
                className="remove-cart-item"
                type="button"
                aria-label={`Remove ${name} from cart`}
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
