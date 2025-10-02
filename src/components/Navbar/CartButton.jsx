import React from "react";
import { PiShoppingBagLight } from "react-icons/pi";

function CartButton({ cartItems, active = false, navigate }) {
  return (
    <button className="icon-btn shopping-cart-icon" onClick={navigate}>
      <PiShoppingBagLight
        color={active ? "#387638ff" : "var(--clr-primary-900)"}
        aria-label="shopping bag"
        className="btns-icon"
      />
      <span aria-live="polite" className="shopping-cart-item-count">
        {cartItems.map((item) => item.count).reduce((a, b) => a + b, 0)}
      </span>
    </button>
  );
}

export default CartButton;
