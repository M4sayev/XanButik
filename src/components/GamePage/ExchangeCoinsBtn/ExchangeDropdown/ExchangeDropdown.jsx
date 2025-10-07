import React, { useEffect, useState } from "react";
import "./ExchangeDropdown.css";
import ExchangeOption from "./ExchangeOption";
import ConfirmationPopup from "./ConfirmationPopup";
import { coupons } from "../../../../assets/game/gameAssets";

function ExchangeDropdown({
  dropdownRef,
  isDropDownOpen,
  dropdownClass,
  coinAttrbs,
  confiramtionPopupRef,
  isConfirmationOpen,
}) {
  // to be implemented
  // When this game page is finished (save coupons in the global context and add)
  const [boughtCoupons, setBoughtCoupons] = useState(() => {
    const storedBoughtCoupons = localStorage.getItem("boughtCoupons");
    console.log({ storedBoughtCoupons });
    return storedBoughtCoupons ? JSON.parse(storedBoughtCoupons) : [];
  });

  useEffect(() => console.log(boughtCoupons), [boughtCoupons]);
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-expanded={isDropDownOpen}
      ref={dropdownRef}
      className={`exchange-coins-dropdown ${dropdownClass}`}
      style={{ position: "absolute", right: 0 }}
    >
      <p className="std-paragraph exchange-dropdown-text">
        Exchange your Xan coins for coupons
      </p>

      <ul className="coupouns-container">
        {coupons.map((coupon) => (
          <ExchangeOption
            {...coupon}
            key={coupon.id}
            coinAttrbs={coinAttrbs}
            isDropDownOpen={isDropDownOpen}
            boughtCoupons={boughtCoupons}
          />
        ))}
      </ul>
      {isConfirmationOpen && (
        <ConfirmationPopup
          confiramtionPopupRef={confiramtionPopupRef}
          setBoughtCoupons={setBoughtCoupons}
        />
      )}
    </div>
  );
}

export default ExchangeDropdown;
