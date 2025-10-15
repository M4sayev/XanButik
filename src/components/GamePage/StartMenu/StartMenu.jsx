import React from "react";
import PlayButton from "../PlayButton/PlayButton";
import { LuTrophy } from "react-icons/lu";
import backgroundImage from "../../../assets/game/game_bg.png";
import "../CurrentGamePage/GameScreens.css";

function StartMenu({ setStartTime }) {
  return (
    <div
      className="game-screen-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="game-contents-overlay"></div>
      <div className="game-screen">
        <LuTrophy aria-hidden="true" className="trophy-icon" />
        <h1 className="std-heading">The ultimate tapping challenge</h1>
        <p className="std-paragraph mi-auto">
          <span className="warning-span">Avoid bombs! </span>
          Tapping a bomb will cost you coins
        </p>
        <p className="std-paragraph coin-balance-preview">
          Gold coins give you more
        </p>
        <PlayButton setStartTime={setStartTime} />
      </div>
    </div>
  );
}

export default StartMenu;
