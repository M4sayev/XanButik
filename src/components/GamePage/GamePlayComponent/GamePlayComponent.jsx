import React, { useCallback, useEffect, useRef, useState } from "react";
import "./GamePlayComponent.css";
import CoinButton from "./CoinButton";
import { getCoordinateKey, randomInBetween } from "../../../utils/utils";
import {
  coinLifeTime,
  coinSpawnRate,
  coinSize,
  goldCoinSpawnPercent,
  bombSize,
  bombSpawnRate,
} from "../../../constants/gameConstants";
import Bomb from "./Bomb";

function GamePlayComponent() {
  const seen = useRef(new Map());
  const initialSpawned = useRef(false);
  const gameSectionRef = useRef(null);
  const [coins, setCoins] = useState([]);

  const [bombs, setBombs] = useState([]);

  function spawnObject({
    objectSize,
    lifetime,
    setObjects,
    objectMap,
    gameSectionRef,
    createObjectFn,
    tryCount = 10,
  }) {
    if (!gameSectionRef.current) return;

    const rect = gameSectionRef.current.getBoundingClientRect();
    const sectionWidth = rect.width;
    const sectionHeight = rect.height;

    for (let tries = 0; tries < tryCount; tries++) {
      const top = randomInBetween(0, sectionHeight - objectSize);
      const left = randomInBetween(0, sectionWidth - objectSize);

      const newRect = {
        top,
        left,
        bottom: top + objectSize,
        right: left + objectSize,
      };

      const overlapping = Array.from(objectMap.values()).some(([t, l]) => {
        const existing = {
          top: t,
          left: l,
          bottom: t + objectSize,
          right: l + objectSize,
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
        const newObject = createObjectFn(top, left, key);

        setObjects((prev) => [...prev, newObject]);
        objectMap.set(key, [top, left]);

        setTimeout(() => {
          setObjects((prev) =>
            prev.filter(({ date }) => Date.now() - date <= lifetime)
          );
          objectMap.delete(key);
        }, lifetime);

        // stop trying
        return;
      }
    }
  }

  const addCoin = useCallback(() => {
    const isSilver = Math.random() < 1 - goldCoinSpawnPercent / 100;
    spawnObject({
      objectSize: coinSize,
      lifetime: coinLifeTime,
      setObjects: setCoins,
      objectMap: seen.current,
      gameSectionRef,
      createObjectFn: (top, left, key) => ({
        top,
        left,
        date: Date.now(),
        id: key,
        type: isSilver ? "silver" : "gold",
      }),
    });
  }, [gameSectionRef, setCoins]);

  const addBomb = useCallback(() => {
    spawnObject({
      objectSize: bombSize,
      lifetime: coinLifeTime,
      setObjects: setBombs,
      objectMap: seen.current,
      gameSectionRef,
      createObjectFn: (top, left, key) => ({
        top,
        left,
        date: Date.now(),
        id: key,
        type: "bomb",
      }),
    });
  }, [gameSectionRef, setBombs]);

  useEffect(() => {
    if (!gameSectionRef.current || initialSpawned.current) return;

    for (let i = 0; i < 4; i++) {
      setTimeout(addCoin, i * 400);
    }
    initialSpawned.current = true;

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  function removeObject(id, type = "coin") {
    if (type === "coin") setCoins((prev) => prev.filter((c) => id !== c.id));
    else if (type === "bomb")
      setBombs((prev) => prev.filter((c) => id !== c.id));
    else console.log("No such object found");
  }

  function useSpawnInterval(callback, interval) {
    useEffect(() => {
      const id = setInterval(callback, interval);
      return () => clearInterval(id);
    }, [callback, interval]);
  }

  useSpawnInterval(addCoin, coinSpawnRate);
  useSpawnInterval(addBomb, bombSpawnRate);

  return (
    <section className="game-play-section" ref={gameSectionRef}>
      {coins.map(({ id, type, ...coordinates }) => (
        <CoinButton
          key={id}
          type={type}
          coordinates={coordinates}
          removeCoin={() => removeObject(id, "coin")}
        />
      ))}
      {bombs.map(({ id, type, ...coordinates }) => (
        <Bomb
          key={id}
          type={type}
          coordinates={coordinates}
          removeBomb={() => removeObject(id, "bomb")}
        />
      ))}
    </section>
  );
}

export default GamePlayComponent;
