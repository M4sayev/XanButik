import React from "react";
import "./CouponsModal.css";
import { IoClose } from "react-icons/io5";

function CouponsModal({ setCouponModalOpen }) {
  return (
    <div className="coupons-modal">
      <div className="coupons-modal-header">
        <select name="coupon" id="couponSelect">
          <option value="date">by date</option>
          <option value="gold">gold first</option>
          <option value="silver">silver first</option>
        </select>
        <button
          className="icon-btn cross-icon"
          type="button"
          onClick={() => setCouponModalOpen(false)}
          aria-label="Close login popup"
        >
          <IoClose
            className="cross"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </button>
      </div>
      <div className="coupons-modal-body">
        <div className="coupon-item">
          <div className="coupon-item-info">
            <p className="coupon-offer-value">25%</p>
            <span className="coupon-bg-text">25</span>
            <p className="coupon-offer-text">OFF</p>
          </div>
          <div className="coupon-item-removable-part"></div>
        </div>
      </div>
    </div>
  );
}

export default CouponsModal;
