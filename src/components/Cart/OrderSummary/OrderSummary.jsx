import React, { useMemo, useState } from "react";
import "./OrderSummary.css";
import { calculateDiscountPrice } from "../../../utils/utils";
import Modal from "../../Modal/Modal";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import CouponsModal from "../CouponsModal/CouponsModal";

function OrderSummary({ cartItems }) {
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [couponsModalOpen, setCouponModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const subTotalPrice = useMemo(
    () =>
      cartItems
        .map((item) =>
          calculateDiscountPrice(item.price * item.count, item.discountPercent)
        )
        .reduce((a, b) => a + b, 0),
    [cartItems]
  );

  function checkout() {
    setConfirmationModalOpen(true);

    // For demonstration purposes, we'll just log the cart items and total price
    console.log({ cartItems, totalPrice, shippingCost });
  }

  const shippingCost = 5.0;
  const totalPrice = subTotalPrice + shippingCost;
  return (
    <aside
      className="order-summary"
      aria-labelledby="order-summary-heading"
      role="complementary"
    >
      <h1 className="order-summary-heading" id="order-summary-heading">
        order Summary
      </h1>
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
        aria-label="Apply a coupon"
        className="std-button apply-coupon-btn"
        style={{ width: "100%", marginBottom: "var(--spacing-sm)" }}
        data-type="inverted"
        onClick={() => setCouponModalOpen(true)}
      >
        Apply Coupon
      </button>
      {couponsModalOpen && (
        <Modal>
          <CouponsModal setCouponModalOpen={setCouponModalOpen} />
        </Modal>
      )}
      <button
        type="button"
        aria-label="Proceed to checkout"
        className="std-button checkout-btn"
        style={{ width: "100%" }}
        onClick={checkout}
      >
        Proceed to Checkout
      </button>
      {confirmationModalOpen && (
        <Modal>
          <ConfirmationModal
            setConfirmationModalOpen={setConfirmationModalOpen}
            cartItems={cartItems}
            totalPrice={totalPrice}
          />
        </Modal>
      )}
    </aside>
  );
}

export default OrderSummary;
