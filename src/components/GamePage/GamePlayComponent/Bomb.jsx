import React, { useContext } from "react";
import BombIcon from "../../../assets/game/bomb.svg?react";
import { bombFine, bombSize } from "../../../constants/gameConstants";
import { GameContext } from "../../../context/GameContext";

function Bomb({ removeBomb, coordinates, type }) {
  const { setBalance } = useContext(GameContext);
  const handleBombClicked = () => {
    setBalance((prev) => {
      if (prev.silver <= bombFine) return { ...prev, silver: 0 };
      return { ...prev, silver: prev.silver - bombFine };
    });
    removeBomb();
  };
  return (
    <button
      data-type={type}
      className="coin-btn"
      style={{ ...coordinates }}
      onClick={handleBombClicked}
    >
      <BombIcon style={{ width: bombSize, height: bombSize }} />
    </button>
  );
}

export default Bomb;
