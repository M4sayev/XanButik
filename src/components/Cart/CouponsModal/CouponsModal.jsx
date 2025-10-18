import React, { useContext, useState } from "react";
import "./CouponsModal.css";
import { IoClose } from "react-icons/io5";
import CouponItem from "./CouponItem";
import { StoreContext } from "../../../context/StoreContext";

function CouponsModal({ setCouponModalOpen }) {
  const { boughtCoupons, setBoughtCoupons } = useContext(StoreContext);
  const [sortOption, setSortOption] = useState("date");

  const handleCloseModal = () => {
    setSortOption("date");
    setCouponModalOpen(false);
  };

  return (
    <div className="coupons-modal">
      <div className="coupons-modal-header">
        <fieldset>
          <legend className="visually-hidden">Sort Products</legend>
          <select
            name="coupon"
            id="couponSelect"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="date">by date</option>
            <option value="gold">gold first</option>
            <option value="silver">silver first</option>
          </select>
        </fieldset>
        <button
          className="icon-btn cross-icon"
          type="button"
          onClick={handleCloseModal}
          aria-label="Close login popup"
        >
          <IoClose
            className="cross"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </button>
      </div>
      <div className="coupons-modal-body">
        {boughtCoupons.map((coupon, index) => (
          <CouponItem {...coupon} key={`coupon-item-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default CouponsModal;
