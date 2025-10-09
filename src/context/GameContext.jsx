import React, { createContext, useEffect, useState } from "react";
import { TIMER } from "../constants/constants";
import useTimedResetState from "use-timed-reset-state";
import { defaultCoupons } from "../assets/game/gameAssets";

export const GameContext = createContext(null);

function GameContextProvider(props) {
  // timer remaining time for the game page
  const [timeRemaining, setTimeRemaining] = useState(TIMER);

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const [balance, setBalance] = useState(() => {
    const storedBalance = localStorage.getItem("balance");
    return storedBalance ? JSON.parse(storedBalance) : { silver: 0, gold: 0 };
  });

  const [couponSelected, setCouponSelected] = useState();
  const [coupons, setCoupons] = useTimedResetState(
    defaultCoupons,
    {
      interval: "week",
      dayOfWeek: 1,
      resetAtHours: 0,
      resetAtMinutes: 0,
    },
    "coupons"
  );

  useEffect(() => {
    console.log({ coupons });
  }, [coupons]);

  const contextValue = {
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
  };
  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
