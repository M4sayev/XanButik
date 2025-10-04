import React from "react";
import PlayIcon from "./PlayIcon";
import "./PlayButton.css";

function PlayButton({ setStartTime }) {
  const handlePlayButton = () => {
    const startTime = new Date().getTime();
    setStartTime(startTime);
    // to be implemented
    // change the start menu to the game
  };
  return (
    <button className="std-button start-game-btn" onClick={handlePlayButton}>
      <PlayIcon />
      <span className="play-btn-text">Start Game</span>
    </button>
  );
}

export default PlayButton;
