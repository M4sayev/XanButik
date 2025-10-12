import React, { useEffect, useRef, useState } from "react";
import "./GamePlayComponent.css";
import CoinButton from "./CoinButton";
import { getCoordinateKey, randomInBetween } from "../../../utils/utils";
import {
  coinLifetime,
  coinSpawnRate,
  coinSize,
} from "../../../constants/gameConstants";

const seen = new Map();

function GamePlayComponent() {
  const initialSpawned = useRef(false);
  const gameSectionRef = useRef(null);
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };
  const [coins, setCoins] = useState([]);

  function addCoin() {
    if (!gameSectionRef.current) return;

    const rect = gameSectionRef.current.getBoundingClientRect();
    const sectionWidth = rect.width;
    const sectionHeight = rect.height;

    // ten tries to place the coin
    for (let tries = 0; tries < 10; tries++) {
      const top = randomInBetween(0, sectionHeight - coinSize);
      const left = randomInBetween(0, sectionWidth - coinSize);

      const newRect = {
        top,
        left,
        bottom: top + coinSize,
        right: left + coinSize,
      };

      const overlapping = Array.from(seen.values()).some(([t, l]) => {
        const existing = {
          top: t,
          left: l,
          bottom: t + coinSize,
          right: l + coinSize,
        };

        return !(
          newRect.right < existing.left ||
          newRect.top > existing.bottom ||
          newRect.bottom < existing.top ||
          newRect.left > existing.right
        );
      });
      if (!overlapping) {
        const key = getCoordinateKey(top, left);
        const newCoin = {
          top,
          left,
          date: Date.now(),
          id: key,
        };
        setCoins((prev) => [...prev, newCoin]);

        seen.set(key, [top, left]);

        setTimeout(() => {
          setCoins((prev) =>
            prev.filter(({ date }) => Date.now() - date <= coinLifetime)
          );
          seen.delete(key);
        }, coinLifetime);

        // stop trying
        return;
      }
    }
  }

  useEffect(() => {
    if (!gameSectionRef.current || initialSpawned.current) return;

    for (let i = 0; i < 4; i++) {
      setTimeout(addCoin, i * 400);
    }

    initialSpawned.current = true;
  }, []);

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function removeCoin(id) {
    setCoins((prev) => prev.filter((c) => id !== c.id));
  }

  useEffect(() => {
    console.log(seen);
  }, [coins]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      addCoin();
    }, coinSpawnRate);
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
