import { useContext } from "react";
import "./ExchangeDropdown.css";
import ExchangeOption from "./ExchangeOption";
import ConfirmationPopup from "./ConfirmationPopup";

import { GameContext } from "../../../../context/GameContext";
import { defaultCoupons } from "../../../../assets/game/gameAssets";
import { StoreContext } from "../../../../context/StoreContext";

function ExchangeDropdown({
  dropdownRef,
  isDropDownOpen,
  dropdownClass,
  coinAttrbs,
  confiramtionPopupRef,
  isConfirmationOpen,
}) {
  const { coupons } = useContext(GameContext);
  const { boughtCoupons, setBoughtCoupons } = useContext(StoreContext);

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
          boughtCoupons={boughtCoupons}
        />
      )}
    </div>
  );
}

export default ExchangeDropdown;
