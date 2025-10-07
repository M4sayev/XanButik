import React, { useContext, useEffect, useRef, useState } from "react";
import XanCoin from "../../../assets/game/xn_coin.svg?react";
import GoldXanCoin from "../../../assets/game/xn_coin_gold.svg?react";
import "./ExchangeCoinsBtn.css";
import ExchangeDropdown from "./ExchangeDropdown/ExchangeDropdown";
import { useEscapeKey } from "../../../hooks/useEscapeKey";
import { useFocusTrap } from "../../../hooks/useTrapFocus";
import { GameContext } from "../../../context/GameContext";

const coinAttrbs = {
  "aria-hidden": "true",
  style: {
    height: "25px",
    width: "25px",
  },
};

function ExchangeCoinsBtn() {
  const balanceButtonRef = useRef(null);
  const dropdownRef = useRef(null);
  const confiramtionPopupRef = useRef(null);
  const { isConfirmationOpen, setIsConfirmationOpen } = useContext(GameContext);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const toggleDropdown = () => {
    setIsDropDownOpen((prev) => !prev);
    setIsTouched(true);
  };

  const dropdownClass = isTouched
    ? isDropDownOpen
      ? "dropdown-active"
      : "dropdown-disabled"
    : "";

  function handleClickOutside(event) {
    const dropdownEl = dropdownRef.current;
    const buttonEl = balanceButtonRef.current;
    const confirmEl = confiramtionPopupRef.current;

    if (isDropDownOpen) {
      if (
        !dropdownEl.contains(event.target) &&
        !buttonEl.contains(event.target) &&
        (!confirmEl || !confirmEl.contains(event.target))
      ) {
        setIsConfirmationOpen(false);
        setIsDropDownOpen(false);
      }
    }
  }
  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [isDropDownOpen]);

  function closeDropdowns() {
    setIsConfirmationOpen(false);
    setIsDropDownOpen(false);
  }
  useEscapeKey(() => (!isDropDownOpen ? undefined : closeDropdowns()));
  useFocusTrap(dropdownRef, isDropDownOpen);

  return (
    <div style={{ position: "relative" }}>
      <button
        aria-haspopup="dialog"
        aria-controls="exchange-coins-dropdown-wrapper"
        className="std-hud-btn buy-coins-btn"
        type="button"
        aria-label="you have 100 silver coins and 0 gold coins"
        onClick={toggleDropdown}
        ref={balanceButtonRef}
      >
        <span>100</span>
        <XanCoin {...coinAttrbs} className="hud-silver-coin" />
        <span>0</span>
        <GoldXanCoin {...coinAttrbs} />
      </button>
      <div id="exchange-coins-dropdown-wrapper">
        <ExchangeDropdown
          dropdownRef={dropdownRef}
          coinAttrbs={coinAttrbs}
          dropdownClass={dropdownClass}
          isDropDownOpen={isDropDownOpen}
          confiramtionPopupRef={confiramtionPopupRef}
          isConfirmationOpen={isConfirmationOpen}
          setIsConfirmationOpen={setIsConfirmationOpen}
        />
      </div>
    </div>
  );
}

export default ExchangeCoinsBtn;
