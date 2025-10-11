import React, { useContext, useEffect, useState } from "react";
import XanCoin from "../../../assets/game/xn_coin.svg?react";
import { GameContext } from "../../../context/GameContext";
import { coinSize } from "../../../constants/gameConstants";
import { randomInBetween } from "../../../utils/utils";

function CoinButton({ coordinates }) {
  const { setBalance } = useContext(GameContext);

  function handleCoinClicked(event) {
    const type = event.currentTarget.dataset.type;
    setBalance((prev) => ({ ...prev, [type]: prev[type] + 1 }));

    // remove coin from the seen set and the coins array
  }

  console.log(coordinates);
  return (
    <button
      data-type="silver"
      className="coin-btn"
      style={{ ...coordinates }}
      onClick={handleCoinClicked}
    >
      <XanCoin style={{ width: coinSize, height: coinSize }} />
    </button>
  );
}

export default CoinButton;
