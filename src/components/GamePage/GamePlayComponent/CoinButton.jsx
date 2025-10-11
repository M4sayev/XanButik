import React, { useContext, useEffect, useState } from "react";
import XanCoin from "../../../assets/game/xn_coin.svg?react";
import { GameContext } from "../../../context/GameContext";
import { coinSize } from "../../../constants/gameConstants";
import { randomInBetween } from "../../../utils/utils";

function CoinButton({ gameSectionRef }) {
  const { setBalance } = useContext(GameContext);
  const [coordinates, setCoordinates] = useState({
    top: 0,
    left: 0,
  });
  const spawnCoin = () => {
    if (!gameSectionRef.current) return;

    const rect = gameSectionRef.current.getBoundingClientRect();
    const sectionWidth = rect.width;
    const sectionHeight = rect.height;

    const randomTop = randomInBetween(0, sectionHeight);
    const randomLeft = randomInBetween(0, sectionWidth);

    setCoordinates({ top: randomTop, left: randomLeft });
    return { top: randomTop, left: randomLeft };
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
    <button
      data-type="silver"
      className="coin-btn"
      style={{}}
      onClick={handleCoinClicked}
    >
      <XanCoin style={{ width: coinSize, height: coinSize }} />
    </button>
  );
}

export default CoinButton;
