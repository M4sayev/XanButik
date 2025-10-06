import React from "react";
import "./ConfirmationPopup.css";
import { useEscapeKey } from "../../../../hooks/useEscapeKey";

function ConfirmationPopup({ setIsConfirmationOpen, confiramtionPopupRef }) {
  const handleBuyCoupon = () => {
    // to be implemented
    setIsConfirmationOpen(false);
  };

  return (
    <div
      ref={confiramtionPopupRef}
      className="confirmation-popup"
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirmation-popup-heading"
      aria-describedby="confirmation-popup-description"
    >
      <div className="confirmation-popup-contents">
        <h2
          className="confimartion-popup-heading"
          id="confirmation-popup-heading"
        >
          Are you sure?
        </h2>

        <p id="confirmation-popup-description" className="std-paragraph">
          You won't be able to get your coins back after this
        </p>
        <div className="confimation-popup-btns-container">
          <button className="std-hud-btn yes-btn" onClick={handleBuyCoupon}>
            YES
          </button>
          <button
            className="std-hud-btn no-btn"
            onClick={() => setIsConfirmationOpen(false)}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationPopup;
