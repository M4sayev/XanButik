import React, { useContext, useEffect, useState } from "react";
import XanCoin from "../../../assets/game/xn_coin.svg?react";
import GoldXanCoin from "../../../assets/game/xn_coin_gold.svg?react";
import { GameContext } from "../../../context/GameContext";
import { coinSize } from "../../../constants/gameConstants";
import { randomInBetween } from "../../../utils/utils";

function CoinButton({ coordinates, removeCoin, id, type }) {
  const { setBalance } = useContext(GameContext);

  function handleCoinClicked(event) {
    const type = event.currentTarget.dataset.type;
    setBalance((prev) => ({ ...prev, [type]: prev[type] + 1 }));

    removeCoin(id);
    // remove coin from the seen set and the coins array
  }

  return (
    <button
      data-type={type}
      className="coin-btn"
      style={{ ...coordinates }}
      onClick={handleCoinClicked}
    >
      {type === "silver" ? (
        <XanCoin style={{ width: coinSize, height: coinSize }} />
      ) : (
        <GoldXanCoin style={{ width: coinSize, height: coinSize }} />
      )}
    </button>
  );
}

export default CoinButton;
