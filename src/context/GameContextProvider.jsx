import { useMemo, useRef, useState } from "react";
import { TIMER } from "../constants/gameConstants";
import useTimedResetState from "use-timed-reset-state";
import { defaultCoupons } from "../assets/game/gameAssets";
import { GameContext } from "./GameContext";

function GameContextProvider(props) {
  const [isGameGoing, setIsGameGoing] = useState(false);

  // interval actually supposed to be 1 day, but to test the game for viewers
  const [isGamePlayedToday, setIsGamePlayedToday] = useTimedResetState(
    false,
    { interval: "custom", msInterval: 3000 },
    "gameplayed",
  );
  // timer remaining time for the game page
  const [timeRemaining, setTimeRemaining] = useState(TIMER);

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance
      ? JSON.parse(storedBalance)
      : { silver: 2000, gold: 100 };
  });

  const [couponSelected, setCouponSelected] = useState();
  const [coupons, setCoupons] = useTimedResetState(
    () => defaultCoupons.map((coupon) => coupon.id),
    {
      interval: "week",
      dayOfWeek: 1,
      resetAtHours: 0,
      resetAtMinutes: 0,
    },
    "coupons",
  );

  const [isGameFrozen, setIsGameFrozen] = useState(false);
  const totalPausedRef = useRef(0);
  const currentFreezeRef = useRef(0);

  const contextValue = useMemo(
    () => ({
      timeRemaining,
      setTimeRemaining,
      isConfirmationOpen,
      setIsConfirmationOpen,
      balance,
      setBalance,
      couponSelected,
      setCouponSelected,
      setCoupons,
      coupons,
      isGameGoing,
      setIsGameGoing,
      isGamePlayedToday,
      setIsGamePlayedToday,
      isGameFrozen,
      setIsGameFrozen,
      totalPausedRef,
      currentFreezeRef,
    }),
    [
      timeRemaining,
      isConfirmationOpen,
      balance,
      couponSelected,
      coupons,
      isGameGoing,
      isGamePlayedToday,
      isGameFrozen,
    ],
  );

  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
