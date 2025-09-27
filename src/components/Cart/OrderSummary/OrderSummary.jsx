import React, { useMemo } from "react";
import "./OrderSummary.css";
import { calculateDiscountPrice } from "../../../utils/utils";

function OrderSummary({ cartItems }) {
  const subTotalPrice = useMemo(
    () =>
      cartItems
        .map((item) => calculateDiscountPrice(item.price, item.discountPercent))
        .reduce((a, b) => a + b, 0),
    [cartItems]
  );

  const shippingCost = 5.0;
  const totalPrice = subTotalPrice + shippingCost;
  return (
    <section>
      <div className="order-summary">
        <h1 className="order-summary-heading">order Summary</h1>
        <div className="summary-item">
          <p>Subtotal</p>
          <span>${subTotalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <p>Shipping</p>
          <span>${shippingCost.toFixed(2)}</span>
        </div>
        <div className="summary-item summary-total">
          <p>Total</p>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button
          type="button"
          aria-label="Proceed to checkout"
          className="std-button checkout-btn"
          style={{ width: "100%" }}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}

export default OrderSummary;
