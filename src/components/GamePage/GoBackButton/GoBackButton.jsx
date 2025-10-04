import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./GoBackButton.css";

function GoBackButton() {
  const navigate = useNavigate();
  function handleGoBack() {
    navigate(-1);
  }
  return (
    <button className="start-menu-go-back-btn" onClick={handleGoBack}>
      <IoIosArrowRoundBack aria-hidden="true" className="arrow-icon" />
      <span>Go back</span>
    </button>
  );
}

export default GoBackButton;
