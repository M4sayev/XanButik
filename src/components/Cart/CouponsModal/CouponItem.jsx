import React, { useState } from "react";
import "./CouponItem.css";

function CouponItem({
  price,
  offer,
  appliedCouponId,
  setAppliedCouponId,
  id,
  handleCloseModal,
}) {
  function handleApplyCoupon() {
    setAppliedCouponId(id);
    localStorage.setItem("appliedCouponId", JSON.stringify(id));
    handleCloseModal();
  }

  return (
    <button
      className={`coupon-item ${appliedCouponId == id && "used"}`}
      style={
        price.coinValue === "silver"
          ? { background: "var(--gradient-silver)" }
          : { background: "var(--gradient-gold)" }
      }
      onClick={handleApplyCoupon}
    >
      <div className="item-info-wrapper">
        <div className="coupon-item-info">
          <p className="coupon-offer-value">{offer.value}</p>
          <span className="coupon-bg-text">{offer.value}</span>
          <p className="coupon-offer-text">{offer.text}</p>
        </div>
      </div>
      <div className="coupon-item-removable-part"></div>
    </button>
  );
}

export default CouponItem;
