import React, { useContext, useEffect, useRef, useState } from "react";
import HourGlass from "../../../assets/game/hourglass.svg?react";
import "./Timer.css";
import { formatTime } from "../../../utils/utils";
import { HOURGLASS_COLORS, TIMER } from "../../../constants/gameConstants";
import { toast } from "react-toastify";
import { GameContext } from "../../../context/GameContext";
import SnowFlake from "../../../assets/game/snow_flake.svg?react";

function Timer({ startTime, setStartTime }) {
  const {
    timeRemaining,
    setTimeRemaining,
    setIsGameGoing,
    balance,
    isGameFrozen,
    totalPausedRef,
    currentFreezeRef,
  } = useContext(GameContext);
  const [hourglassColor, setHourglassColor] = useState("green");
  const notify = () => toast("Your time has ended!");

  useEffect(() => {
    if (!startTime) return;
    const intervalID = setInterval(() => {
      // Skip timer updates if frozen
      if (isGameFrozen) {
        currentFreezeRef.current += 100;
        return;
      }

      const currentTime = new Date().getTime();
      const elapsed =
        currentTime -
        startTime -
        totalPausedRef.current -
        currentFreezeRef.current;

      if (elapsed >= TIMER) {
        setStartTime("");
        setTimeRemaining(TIMER);
        clearInterval(intervalID);
        setIsGameGoing(false);
        notify();
        // reset timer color
        changeHourglassColor(0);
        // save collected from the game balance to localStorage
        localStorage.setItem("balance", JSON.stringify(balance));
      } else {
        setTimeRemaining(() => TIMER - elapsed);
        changeHourglassColor(elapsed);
      }
    }, 100);

    return () => clearInterval(intervalID);
  }, [startTime, balance, isGameFrozen]);

  function changeHourglassColor(time) {
    if (time >= TIMER - 5000) {
      setHourglassColor("red");
    } else if (time >= TIMER - 10000) {
      setHourglassColor("orange");
    } else {
      setHourglassColor("green");
    }
  }
  return (
    <div
      className={`hud-timer std-hud-btn ${
        startTime && !isGameFrozen ? "started" : ""
      }`}
      role="timer"
      aria-live="polite"
      aria-label={`Time remaining: ${formatTime(timeRemaining)}`}
    >
      <span>{formatTime(timeRemaining)}</span>
      <HourGlass
        className="hourglass-icon"
        style={{
          height: "24px",
          width: "24px",
          "--svg-clr-bg":
            HOURGLASS_COLORS[hourglassColor] || HOURGLASS_COLORS["green"],
        }}
        aria-label={`Hourglass color: ${hourglassColor}`}
      />
      <div
        className={`snow-flakes-overlay ${isGameFrozen && "animate-flakes"}`}
        aria-hidden="true"
      >
        {Array.from({ length: 5 }).map((_, index) => (
          <span key={`timer-sf-${index}`}>
            <SnowFlake style={{ width: "20px", height: "20px" }} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default Timer;
