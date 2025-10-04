import React from "react";
import PlayButton from "../PlayIcon/PlayButton";
import { LuTrophy } from "react-icons/lu";
import backgroundImage from "../../../assets/game/game_bg.png";
import "./StartMenu.css";
import GoBackButton from "../GoBackButton/GoBackButton";

function StartMenu() {
  return (
    <div
      className="game-start-menu-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="game-contents-overlay"></div>
      <div className="game-start-menu">
        <LuTrophy aria-hidden="true" className="trophy-icon" />
        <h1 className="std-heading">The ultimate tapping challenge</h1>
        <p className="std-paragraph mi-auto">
          <span className="warning-span">Avoid bombs! </span>
          Tapping a bomb will cost you coins
        </p>
        <p className="std-paragraph coin-balance-preview">
          Gold coins give you more
        </p>
        <PlayButton />
      </div>
    </div>
  );
}

export default StartMenu;
