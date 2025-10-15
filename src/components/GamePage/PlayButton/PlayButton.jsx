import React, { useContext } from "react";
import PlayIcon from "./PlayIcon";
import "./PlayButton.css";
import { GameContext } from "../../../context/GameContext";

function PlayButton({ setStartTime }) {
  const { setIsGameGoing, setIsGamePlayedToday } = useContext(GameContext);
  const handlePlayButton = () => {
    const startTime = new Date().getTime();
    setStartTime(startTime);

    setIsGameGoing(true);
    // for the reset
    setIsGamePlayedToday(() => {
      localStorage.setItem("gameplayed", JSON.stringify(true));
      return true;
    });
  };
  return (
    <button
      className="std-button start-game-btn"
      onClick={handlePlayButton}
      aria-label="Start the game"
    >
      <PlayIcon aria-hidden="true" />
      <span className="play-btn-text">Start Game</span>
    </button>
  );
}

export default PlayButton;
