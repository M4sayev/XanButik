import React from "react";
import XanCoin from "../../../assets/game/xn_coin.svg?react";
import GoldXanCoin from "../../../assets/game/xn_coin_gold.svg?react";
import "./BuyCoinsBtn.css";

function BuyCoinsBtn() {
  return (
    <button
      className="std-hud-btn buy-coins-btn"
      type="button"
      aria-label="you have 100 silver coins and 0 gold coins"
    >
      <span>100</span>
      <XanCoin
        aria-hidden="true"
        style={{
          height: "25px",
          width: "25px",
          marginRight: "5px",
          opacity: 0.8,
        }}
      />
      <span>0</span>
      <GoldXanCoin
        aria-hidden="true"
        style={{ height: "25px", width: "25px" }}
      />
    </button>
  );
}

export default BuyCoinsBtn;
