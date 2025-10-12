import React, { useEffect, useRef, useState } from "react";
import "./GamePlayComponent.css";
import CoinButton from "./CoinButton";
import { randomInBetween } from "../../../utils/utils";
import { coinLifetime } from "../../../constants/gameConstants";

function GamePlayComponent() {
  const initialSpawned = useRef(false);
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
      date: Date.now(),
      id: Date.now() + Math.random(),
    };
    if (updateState) setCoins((prev) => [...prev, newCoin]);
    return newCoin;
  }

  useEffect(() => {
    if (!gameSectionRef.current || initialSpawned.current) return;

    for (let i = 0; i < 3; i++) {
      setTimeout(() => {
        const newCoin = addCoin(false);
        newCoin.date = Date.now() + i * coinLifetime;
        setCoins((prev) => [...prev, newCoin]);
      }, i * 500);
    }
    initialSpawned.current = true;
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    console.log("coins:", coins);
  }, [coins]);

  function removeExpiredCoin() {
    setCoins((prev) =>
      prev.filter(({ date }) => Date.now() - date <= coinLifetime)
    );
  }
  // Remove the coins passed the lifetime add a coin
  useEffect(() => {
    let removeIntervalId;
    const timeout = setTimeout(() => {
      removeIntervalId = setInterval(removeExpiredCoin, coinLifetime);
    }, coinLifetime);
    return () => {
      clearInterval(removeIntervalId);
      clearTimeout(timeout);
    };
  }, []);

  function removeCoin(id) {
    setCoins((prev) => prev.filter((c) => c.id !== id));
    // remove the items from the seen set also later
  }

  useEffect(() => {
    const intervalId = setInterval(() => addCoin(), coinLifetime / 4);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="game-play-section" ref={gameSectionRef}>
      {coins.map(({ id, ...coordinates }) => (
        <CoinButton
          key={id}
          coordinates={coordinates}
          removeCoin={removeCoin}
          id={id}
        />
      ))}
    </section>
  );
}

export default GamePlayComponent;
