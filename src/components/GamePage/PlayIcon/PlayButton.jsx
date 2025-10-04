import React from "react";
import PlayIcon from "./PlayIcon";
import "./PlayButton.css";

function PlayButton() {
  return (
    <button className="std-button start-game-btn">
      <PlayIcon />
      <span className="play-btn-text">Start Game</span>
    </button>
  );
}

export default PlayButton;
