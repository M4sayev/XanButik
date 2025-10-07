import React, { useContext } from "react";
import XanCoin from "../../../../assets/game/xn_coin.svg?react";
import GoldXanCoin from "../../../../assets/game/xn_coin_gold.svg?react";
import "./ExchangeOption.css";
import { GameContext } from "../../../../context/GameContext";
import { toast } from "react-toastify";

function ExchangeOption({ isDropDownOpen, price, offer, coinAttrbs, id }) {
  const { balance, setIsConfirmationOpen, setCouponSelected } =
    useContext(GameContext);

  function handleSelectOption() {
    if (price.value > balance[price.coinValue]) {
      const notify = () => toast.error("Not enough coins on balance");
      notify();
    } else {
      setIsConfirmationOpen(true);
      setCouponSelected(id);
    }
  }
  return (
    <li>
      <button
        onClick={handleSelectOption}
        tabIndex={isDropDownOpen ? 0 : -1}
        disabled={!isDropDownOpen}
        type="button"
        className={`exchange-option-btn ${price.coinValue}`}
        aria-label={`Exchange ${price.value} ${price.coinValue} Xan coins for ${offer.value} ${offer.text}`}
      >
        <span className="exchange-options-price-container">
          <span style={{ height: "15px" }}>{price.value}</span>
          {price.coinValue === "silver" ? (
            <XanCoin {...coinAttrbs} />
          ) : (
            <GoldXanCoin {...coinAttrbs} />
          )}
        </span>
        <span className="coupon-offer coupon-offer-active ">
          {offer.value} {offer.text}
        </span>
      </button>
    </li>
  );
}

export default ExchangeOption;
