import { useContext, useEffect, useMemo, useRef, useState } from "react";
import "./CouponsModal.css";
import { IoClose } from "react-icons/io5";
import CouponItem from "./CouponItem";
import { StoreContext } from "../../../context/StoreContext";
import { useEscapeKey } from "../../../hooks/useEscapeKey";
import { useFocusTrap } from "../../../hooks/useTrapFocus";
import NoCoupons from "./NoCoupons";

function CouponsModal({
  setCouponModalOpen,
  setAppliedCouponId,
  appliedCouponId,
}) {
  const { boughtCoupons } = useContext(StoreContext);
  const couponModalRef = useRef(null);
  const firstEl = useRef(null);

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

  useFocusTrap(couponModalRef, true, firstEl);

  useEffect(() => {
    let timeout;
    function handleClickOutside(e) {
      if (!couponModalRef.current.contains(e.target)) {
        setCouponModalOpen(false);
      }
    }

    timeout = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setCouponModalOpen]);

  return (
    <div className="coupons-modal" ref={couponModalRef}>
      <div className="coupons-modal-header">
        <button
          className="icon-btn cross-icon"
          type="button"
          onClick={handleCloseModal}
          aria-label="Close login popup"
          ref={firstEl}
        >
          <IoClose
            className="cross"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </button>
        <fieldset className={boughtCoupons.length === 0 ? "hidden" : ""}>
          <legend className="visually-hidden">Sort Products</legend>
          <select
            tabIndex={!boughtCoupons.length ? -1 : 0}
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
      </div>
      <div className="coupons-modal-body">
        {boughtCoupons.length === 0 ? (
          <NoCoupons />
        ) : (
          sortedCoupons.map((coupon, index) => (
            <CouponItem
              {...coupon}
              key={coupon.id}
              setAppliedCouponId={setAppliedCouponId}
              appliedCouponId={appliedCouponId}
              handleCloseModal={handleCloseModal}
              index={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default CouponsModal;
