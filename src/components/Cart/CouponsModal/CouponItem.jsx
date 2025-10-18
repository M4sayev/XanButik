import React from "react";
import "./CouponItem.css";

function CouponItem(theme = "silver") {
  return (
    <button
      className="coupon-item"
      style={
        theme === "silver"
          ? { background: "var(--gradient-silver)" }
          : { background: "var(--gradient-gold)" }
      }
    >
      <div className="item-info-wrapper">
        <div className="coupon-item-info">
          <p className="coupon-offer-value">25%</p>
          <span className="coupon-bg-text">25</span>
          <p className="coupon-offer-text">OFF</p>
        </div>
      </div>
      <div className="coupon-item-removable-part"></div>
    </button>
  );
}

export default CouponItem;
