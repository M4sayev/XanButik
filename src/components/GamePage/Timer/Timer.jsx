import React, { useContext, useEffect, useState } from "react";
import HourGlass from "../../../assets/game/hourglass.svg?react";
import "./Timer.css";
import { formatTime } from "../../../utils/utils";
import { HOURGLASS_COLORS, TIMER } from "../../../constants/constants";
import { toast } from "react-toastify";
import { StoreContext } from "../../../context/StoreContext";

function Timer({ startTime, setStartTime }) {
  const { timeRemaining, setTimeRemaining } = useContext(StoreContext);
  const [hourglassColor, setHourglassColor] = useState("green");
  const notify = () => toast("Your time has ended!");
  useEffect(() => {
    let intervalID;
    if (startTime) {
      intervalID = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - startTime;
        if (elapsed >= TIMER) {
          setStartTime("");
          setTimeRemaining(TIMER);
          clearInterval(intervalID);
          notify();
          // reset timer color
          changeHourglassColor(0);
        } else {
          setTimeRemaining(() => TIMER - elapsed);
          changeHourglassColor(elapsed);
        }
      }, 100);
    }

    return () => clearInterval(intervalID);
  }, [startTime]);

  function changeHourglassColor(time) {
    console.log({ time });
    if (time >= TIMER - 10000) {
      setHourglassColor("red");
    } else if (time >= TIMER - 20000) {
      setHourglassColor("orange");
    } else {
      setHourglassColor("green");
    }
  }
  return (
    <div className={`hud-timer std-hud-btn ${startTime ? "started" : ""}`}>
      <span>{formatTime(timeRemaining)}</span>
      <HourGlass
        className="hourglass-icon"
        style={{
          height: "24px",
          width: "24px",
          "--svg-clr-bg":
            HOURGLASS_COLORS[hourglassColor] || HOURGLASS_COLORS["green"],
        }}
      />
    </div>
  );
}

export default Timer;
