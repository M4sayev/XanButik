import { useCallback, useEffect, useRef, useState } from "react";
import "./GamePlayComponent.css";
import CoinButton from "./CoinButton";
import {
  getCoordinateKey,
  getRandomCoinType,
  randomInBetween,
} from "../../../utils/utils";
import {
  coinLifeTime,
  coinSpawnRate,
  coinSize,
  bombSize,
  bombSpawnRate,
  bombLifeTime,
} from "../../../constants/gameConstants";
import Bomb from "./Bomb";

function GamePlayComponent() {
  const coinMap = useRef(new Map());
  const bombMap = useRef(new Map());

  const initialSpawned = useRef(false);
  const gameSectionRef = useRef(null);
  const [coins, setCoins] = useState([]);

  const [bombs, setBombs] = useState([]);

  function spawnObject({
    objectSize,
    lifetime,
    setObjects,
    objectMap,
    extraCheckMaps = [],
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

      const allMaps = [objectMap, ...extraCheckMaps];

      const overlapping = allMaps.some((map) =>
        Array.from(map.values()).some(([t, l, size]) => {
          const existing = {
            top: t,
            left: l,
            bottom: t + size,
            right: l + size,
          };
          return !(
            newRect.right < existing.left ||
            newRect.top > existing.bottom ||
            newRect.bottom < existing.top ||
            newRect.left > existing.right
          );
        })
      );
      if (!overlapping) {
        const key = getCoordinateKey(top, left);
        const newObject = createObjectFn(top, left, key);

        setObjects((prev) => [...prev, newObject]);
        objectMap.set(key, [top, left, objectSize]);

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
    spawnObject({
      objectSize: coinSize,
      lifetime: coinLifeTime,
      setObjects: setCoins,
      objectMap: coinMap.current,
      extraCheckMaps: [bombMap.current],
      gameSectionRef,
      createObjectFn: (top, left, key) => ({
        top,
        left,
        date: Date.now(),
        id: key,
        type: getRandomCoinType(),
      }),
    });
  }, [gameSectionRef, setCoins]);

  const addBomb = useCallback(() => {
    spawnObject({
      objectSize: bombSize,
      lifetime: bombLifeTime,
      setObjects: setBombs,
      objectMap: bombMap.current,
      extraCheckMaps: [coinMap.current],
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

    for (let i = 0; i < 3; i++) {
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
  }, [addCoin]);

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
