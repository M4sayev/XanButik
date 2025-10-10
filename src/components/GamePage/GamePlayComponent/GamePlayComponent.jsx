import React, { useContext, useEffect, useRef, useState } from "react";
import "./GamePlayComponent.css";
import XanCoin from "../../../assets/game/xn_coin.svg?react";
import { GameContext } from "../../../context/GameContext";
import { PiFunctionFill } from "react-icons/pi";

const coinSize = 48;
const maxCoins = 8;
const spawInterval = 1000;
const coinLifetime = 3000;

const coorsMap = new Map();

function randomInBetween(lower, upper) {
  return Math.floor(Math.random() * (upper - lower - coinSize)) + lower;
}

function GamePlayComponent() {
  const { setBalance } = useContext(GameContext);
  const [coordinates, setCoordinates] = useState({ top: 0, left: 0 });
  const gameSectionRef = useRef(null);
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const spawnCoin = () => {
    if (!gameSectionRef.current) return;

    const rect = gameSectionRef.current.getBoundingClientRect();
    const sectionWidth = rect.width;
    const sectionHeight = rect.height;

    const randomTop = randomInBetween(0, sectionHeight);
    const randomLeft = randomInBetween(0, sectionWidth);

    setCoordinates({ top: randomTop, left: randomLeft });
  };

  function handleCoinClicked(event) {
    const type = event.currentTarget.dataset.type;
    setBalance((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  }

  useEffect(() => {
    spawnCoin();

    const interval = setInterval(() => {
      spawnCoin();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="game-play-section" ref={gameSectionRef}>
      <button
        data-type="silver"
        className="coin-btn"
        style={{ ...coordinates }}
        onClick={handleCoinClicked}
      >
        <XanCoin style={{ width: coinSize, height: coinSize }} />
      </button>
    </section>
  );
}

export default GamePlayComponent;
