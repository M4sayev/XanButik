import React, { useContext, useMemo, useState } from "react";
import "./CouponsModal.css";
import { IoClose } from "react-icons/io5";
import CouponItem from "./CouponItem";
import { StoreContext } from "../../../context/StoreContext";
import { useEscapeKey } from "../../../hooks/useEscapeKey";

function CouponsModal({
  setCouponModalOpen,
  couponModalRef,
  setAppliedCouponId,
  appliedCouponId,
}) {
  const { boughtCoupons, setBoughtCoupons } = useContext(StoreContext);

  const [sortOption, setSortOption] = useState("date");

  const sortedCoupons = useMemo(() => {
    let coupons = [...boughtCoupons];
    switch (sortOption) {
      case "silver":
        coupons = coupons.toSorted((a, b) => {
          if (a.price.coinValue === b.price.coinValue) return 0;
          return a.price.coinValue === "silver" ? -1 : 1;
        });
        break;
      case "gold":
        coupons = coupons.toSorted((a, b) => {
          if (a.price.coinValue === b.price.coinValue) return 0;
          return a.price.coinValue === "gold" ? -1 : 1;
        });
        break;
      case "date":
        coupons = coupons.toSorted((a, b) => b.date - a.date);
        break;
    }
    return coupons;
  }, [sortOption, boughtCoupons]);

  const handleCloseModal = () => {
    setSortOption("date");
    setCouponModalOpen(false);
  };

  useEscapeKey(() => setCouponModalOpen(false));

  return (
    <div className="coupons-modal" ref={couponModalRef}>
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
        {sortedCoupons.map((coupon, index) => (
          <CouponItem
            {...coupon}
            key={coupon.id}
            setAppliedCouponId={setAppliedCouponId}
            appliedCouponId={appliedCouponId}
            handleCloseModal={handleCloseModal}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default CouponsModal;
