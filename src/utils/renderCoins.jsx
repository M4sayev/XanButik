import XanCoin from "../assets/game/xn_coin.svg?react";
import GoldXanCoin from "../assets/game/xn_coin_gold.svg?react";
import FrozenXanCoin from "../assets/game/frozen.svg?react";
import { coinSize } from "../constants/gameConstants";

export function renderCoin(type) {
  const commonStyle = { width: coinSize, height: coinSize };

  switch (type) {
    case "silver":
      return <XanCoin style={commonStyle} />;
    case "gold":
      return <GoldXanCoin style={commonStyle} />;
    case "frozen":
      return <FrozenXanCoin style={commonStyle} />;
    default:
      return <XanCoin style={commonStyle} />;
  }
}
