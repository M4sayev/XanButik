import React from "react";
import XanCoin from "../../../assets/game/xn_coin.svg?react";
import GoldXanCoin from "../../../assets/game/xn_coin_gold.svg?react";
import "./ExchangeCoinsBtn.css";
import { MdOpacity } from "react-icons/md";
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

const coinAttrbs = {
  "aria-hidden": "true",
  style: {
    height: "25px",
    width: "25px",
  },
};

function ExchangeCoinsBtn() {
  return (
    <div style={{ position: "relative" }}>
      <button
        className="std-hud-btn buy-coins-btn"
        type="button"
        aria-label="you have 100 silver coins and 0 gold coins"
      >
        <span>100</span>
        <XanCoin {...coinAttrbs} className="hud-silver-coin" />
        <span>0</span>
        <GoldXanCoin {...coinAttrbs} />
      </button>
      <div
        className="exchange-coins-dropdown"
        style={{ position: "absolute", right: 0 }}
      >
        <p className="std-paragraph exchange-dropdown-text">
          Exchange your Xan coins for coupons
        </p>

        <ul className="coupouns-container">
          {coupons.map((coupon, index) => (
            <ExchangeOption {...coupon} key={index} coinAttrbs={coinAttrbs} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExchangeCoinsBtn;
