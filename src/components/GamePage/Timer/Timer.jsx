import React from "react";
import HourGlass from "../../../assets/game/hourglass.svg?react";
import "./Timer.css";

function Timer() {
  return (
    <div className="hud-timer std-hud-btn">
      <span>10:00</span>
      <HourGlass
        className="hourglass-icon"
        style={{ height: "24px", width: "24px" }}
      />
    </div>
  );
}

export default Timer;
