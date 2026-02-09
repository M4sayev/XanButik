import { useContext, useEffect, useState } from "react";
import XanCoin from "../../../../assets/game/xn_coin.svg?react";
import GoldXanCoin from "../../../../assets/game/xn_coin_gold.svg?react";
import "./ExchangeOption.css";
import { GameContext } from "../../../../context/GameContext";
import { toast } from "react-toastify";

function ExchangeOption({
  isDropDownOpen,
  price,
  offer,
  coinAttrbs,
  id,
  isBought,
}) {
  const { balance, setIsConfirmationOpen, setCouponSelected } =
    useContext(GameContext);

  const [isRevealed, setIsRevealed] = useState(false);

  const isTouchDevice =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;

  function handleSelectOption() {
    if (isTouchDevice) {
      if (!isRevealed) {
        setIsRevealed(true);
        return;
      }
    }

    if (price.value > balance[price.coinValue]) {
      toast.error("Not enough coins on balance");
    } else {
      setIsConfirmationOpen(true);
      setCouponSelected(id);
    }
  }

  useEffect(() => {
    if (!isDropDownOpen) setIsRevealed(false);
  }, [isDropDownOpen]);

  return (
    <li>
      <button
        onClick={handleSelectOption}
        tabIndex={isDropDownOpen ? 0 : -1}
        disabled={!isDropDownOpen || isBought}
        type="button"
        className={`exchange-option-btn ${price.coinValue} ${
          isBought ? "bought" : ""
        } ${isRevealed ? "revealed" : ""}`}
        aria-label={`Exchange ${price.value} ${price.coinValue} Xan coins for ${offer.value} ${offer.text}`}
      >
        <span className="exchange-options-price-container" aria-hidden="true">
          <span style={{ height: "15px" }}>{price.value}</span>
          {price.coinValue === "silver" ? (
            <XanCoin {...coinAttrbs} />
          ) : (
            <GoldXanCoin {...coinAttrbs} />
          )}
        </span>
        <span className="coupon-offer coupon-offer-active " aria-hidden="true">
          {offer.value} {offer.text}
        </span>
      </button>
    </li>
  );
}

export default ExchangeOption;
