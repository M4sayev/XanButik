import { useContext, useRef } from "react";
import { GameContext } from "../../../context/GameContext";
import { renderCoin } from "../../../utils/renderCoins";
import { freezeTime } from "../../../constants/gameConstants";

function CoinButton({ coordinates, removeCoin, type }) {
  const { setBalance, setIsGameFrozen, currentFreezeRef, totalPausedRef } =
    useContext(GameContext);
  const freezeTimeoutRef = useRef(null);

  function handleCoinClicked(event) {
    const type = event.currentTarget.dataset.type;

    if (type === "frozen") {
      setIsGameFrozen(true);

      // reset pauseElapsed for Timer
      totalPausedRef.current += currentFreezeRef.current;
      currentFreezeRef.current = 0;

      if (freezeTimeoutRef.current) clearTimeout(freezeTimeoutRef.current);

      freezeTimeoutRef.current = setTimeout(() => {
        setIsGameFrozen(false);
        freezeTimeoutRef.current = null;
      }, freezeTime);
    } else {
      setBalance((prev) => ({ ...prev, [type]: prev[type] + 1 }));
    }

    removeCoin();
  }

  return (
    <button
      data-type={type}
      className="coin-btn"
      style={{ ...coordinates }}
      onClick={handleCoinClicked}
      onTouchStart={handleCoinClicked}
      aria-label={`collect ${type} coin`}
    >
      {renderCoin(type)}
    </button>
  );
}

export default CoinButton;
