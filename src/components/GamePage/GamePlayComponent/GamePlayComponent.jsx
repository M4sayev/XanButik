import React, { useEffect, useRef, useState } from "react";
import "./GamePlayComponent.css";
import CoinButton from "./CoinButton";
import { randomInBetween } from "../../../utils/utils";

function GamePlayComponent() {
  const gameSectionRef = useRef(null);
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const [coins, setCoins] = useState([]);

  function addCoin(updateState = true) {
    if (!gameSectionRef.current) return;

    const rect = gameSectionRef.current.getBoundingClientRect();
    const sectionWidth = rect.width;
    const sectionHeight = rect.height;

    const newCoin = {
      top: randomInBetween(0, sectionHeight),
      left: randomInBetween(0, sectionWidth),
      id: Date.now(),
    };
    if (updateState) setCoins((prev) => [...prev, newCoin]);
    return newCoin;
  }

  useEffect(() => {
    if (!gameSectionRef.current) return;

    const initialCoins = Array(3)
      .fill(0)
      .map(() => addCoin(false));

    setCoins(initialCoins);
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <section className="game-play-section" ref={gameSectionRef}>
      {coins.map(({ id, ...coordinates }) => (
        <CoinButton key={id} coordinates={coordinates} />
      ))}
    </section>
  );
}

export default GamePlayComponent;
