import React, { useContext, useMemo, useState } from "react";
import "./OrderSummary.css";
import Modal from "../../Modal/Modal";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import CouponsModal from "../CouponsModal/CouponsModal";
import { StoreContext } from "../../../context/StoreContext";
import { calculateDiscountPrice, formatPrice } from "../../../utils/utils";

function OrderSummary({ cartItems }) {
  const [appliedCouponId, setAppliedCouponId] = useState(() => {
    const storedId = localStorage.getItem("appliedCouponId");
    return storedId ? JSON.parse(storedId) : "";
  });
  const [couponsModalOpen, setCouponModalOpen] = useState(false);
  const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);

  const { boughtCoupons } = useContext(StoreContext);

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

  const couponInfo = useMemo(() => {
    if (!appliedCouponId || boughtCoupons.length === 0) return null;
    const foundCoupon = boughtCoupons.find(
      (coupon) => coupon.id == appliedCouponId
    );
    if (!foundCoupon) return null;
    const { text, value } = foundCoupon.offer;

    let discount = 0;
    let newValue = 0;

    if (text === "OFF") {
      const percent = parseFloat(value);
      if (!isNaN(percent)) {
        newValue = percent;
        discount = calculateDiscountPrice(percent, subTotalPrice);
      }
    } else if (text === "Voucher") {
      const numericValue = parseFloat(value);
      if (!isNaN(numericValue)) {
        newValue = numericValue;
        discount = numericValue;
      }
    }
    return { text, newValue, discount };
  }, [appliedCouponId, boughtCoupons, subTotalPrice]);

  const shippingCost = 5.0;
  const totalPrice = subTotalPrice + shippingCost - (couponInfo?.discount || 0);

  function formatCouponSummary(text, val) {
    if (text === "OFF") return `-${val}%`;
    if (text === "Voucher") return `-${formatPrice(val)}`;
    return "";
  }

  function handleRemoveCurrentCoupon() {
    setAppliedCouponId("");
    localStorage.removeItem("appliedCouponId");
  }
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
        <span>{formatPrice(subTotalPrice)}</span>
      </div>
      <div className="summary-item">
        <p>Shipping</p>
        <span>{formatPrice(shippingCost)}</span>
      </div>
      <div
        className="summary-item"
        style={couponInfo === null ? { display: "none" } : {}}
      >
        <p>
          Coupon Applied
          <button
            type="button"
            className="remove-coupon-btn"
            aria-label="Remove the current coupon"
            onClick={handleRemoveCurrentCoupon}
          >
            [remove]
          </button>
        </p>
        <span>
          {formatCouponSummary(couponInfo?.text, couponInfo?.newValue)}
        </span>
      </div>
      <div className="summary-item summary-total">
        <p>Total</p>
        <span>{formatPrice(totalPrice)}</span>
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
        <Modal maxWidth={"auto"}>
          <CouponsModal
            setCouponModalOpen={setCouponModalOpen}
            appliedCouponId={appliedCouponId}
            setAppliedCouponId={setAppliedCouponId}
            couponsModalOpen={couponsModalOpen}
          />
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
            appliedCouponId={appliedCouponId}
            handleRemoveCurrentCoupon={handleRemoveCurrentCoupon}
          />
        </Modal>
      )}
    </aside>
  );
}

export default OrderSummary;
