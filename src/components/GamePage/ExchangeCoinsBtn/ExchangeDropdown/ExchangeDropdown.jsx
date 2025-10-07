import React, { useState } from "react";
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
  setIsConfirmationOpen,
  isConfirmationOpen,
}) {
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
        {coupons.map((coupon, index) => (
          <ExchangeOption
            setIsConfirmationOpen={setIsConfirmationOpen}
            {...coupon}
            key={index}
            coinAttrbs={coinAttrbs}
            isDropDownOpen={isDropDownOpen}
          />
        ))}
      </ul>
      {isConfirmationOpen && (
        <ConfirmationPopup
          confiramtionPopupRef={confiramtionPopupRef}
          setIsConfirmationOpen={setIsConfirmationOpen}
        />
      )}
    </div>
  );
}

export default ExchangeDropdown;
