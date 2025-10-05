import React from "react";
import "./ExchangeDropdown.css";
import ExchangeOption from "./ExchangeOption";

const coupons = [
  {
    price: {
      value: 100,
      coinValue: "silver",
    },
    offer: {
      value: "5%",
      text: "OFF",
    },
  },
  {
    price: {
      value: 10,
      coinValue: "gold",
    },
    offer: {
      value: 10,
      text: "Voucher",
    },
  },
  {
    price: {
      value: 20,
      coinValue: "gold",
    },
    offer: {
      value: "20%",
      text: "OFF",
    },
  },
];

function ExchangeDropdown({
  dropdownRef,
  isDropDownOpen,
  dropdownClass,
  coinAttrbs,
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
            {...coupon}
            key={index}
            coinAttrbs={coinAttrbs}
            isDropDownOpen={isDropDownOpen}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExchangeDropdown;
