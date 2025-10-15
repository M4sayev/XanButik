import React, { useContext, useState } from "react";
import "./ExchangeDropdown.css";
import ExchangeOption from "./ExchangeOption";
import ConfirmationPopup from "./ConfirmationPopup";

import { GameContext } from "../../../../context/GameContext";
import { defaultCoupons } from "../../../../assets/game/gameAssets";

function ExchangeDropdown({
  dropdownRef,
  isDropDownOpen,
  dropdownClass,
  coinAttrbs,
  confiramtionPopupRef,
  isConfirmationOpen,
}) {
  const { coupons } = useContext(GameContext);
  // to be implemented
  // When this game page is finished (save coupons in the global context and add)
  const [boughtCoupons, setBoughtCoupons] = useState(() => {
    const storedBoughtCoupons = localStorage.getItem("boughtCoupons");
    return storedBoughtCoupons ? JSON.parse(storedBoughtCoupons) : [];
  });

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
        {defaultCoupons.map((coupon) => {
          const isBought = !coupons.includes(coupon.id);
          return (
            <ExchangeOption
              isBought={isBought}
              {...coupon}
              key={coupon.id}
              coinAttrbs={coinAttrbs}
              isDropDownOpen={isDropDownOpen}
              boughtCoupons={boughtCoupons}
            />
          );
        })}
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
