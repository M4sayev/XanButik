import React, { useContext, useState } from "react";
import BombIcon from "../../../assets/game/xan_bomb.svg?react";
import { bombFine, bombSize } from "../../../constants/gameConstants";
import { GameContext } from "../../../context/GameContext";
import { divIcon } from "leaflet";

function Bomb({ removeBomb, coordinates, type }) {
  const [lostScorePopup, setLostScorePopup] = useState(false);
  const { setBalance } = useContext(GameContext);
  const handleBombClicked = () => {
    setBalance((prev) => {
      if (prev.silver <= bombFine) return { ...prev, silver: 0 };
      return { ...prev, silver: prev.silver - bombFine };
    });
    setLostScorePopup(true);
    setTimeout(() => removeBomb(), 500);
  };
  return (
    <div className="bomb-btn-container" style={{ ...coordinates }}>
      <button
        data-type={type}
        className="coin-btn"
        onClick={handleBombClicked}
        onTouchStart={handleBombClicked}
      >
        <BombIcon style={{ width: bombSize, height: bombSize }} />
      </button>
      <span
        className={`lost-score-popup ${
          lostScorePopup ? "lost-score-popup-animate" : ""
        }`}
      >
        -3
      </span>
    </div>
  );
}

export default Bomb;
