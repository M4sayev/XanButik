import React from "react";
import PlayButton from "../PlayIcon/PlayButton";
import { LuTrophy } from "react-icons/lu";
import backgroundImage from "../../../assets/game/game_bg.png";
import "./StartMenu.css";

function StartMenu() {
  return (
    <div
      className="game-start-menu-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="game-contents-overlay"></div>
      <div className="game-start-menu">
        <LuTrophy
          aria-hidden="true"
          style={{ width: "50px", height: "50px", fontWeight: "bold" }}
        />
        <h1 className="std-heading">The ultimate tapping challenge</h1>
        <p className="std-paragraph mi-auto">
          <span className="warning-span">Avoid bombs! </span>
          Tapping a bomb will const you a life
        </p>
        <p className="std-paragraph coin-balance-preview">
          You have 100 XaN coins
        </p>
        <PlayButton />
      </div>
    </div>
  );
}

export default StartMenu;
