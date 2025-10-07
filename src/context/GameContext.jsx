import React, { createContext, useState } from "react";
import { TIMER } from "../constants/constants";

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

  const contextValue = {
    timeRemaining,
    setTimeRemaining,
    isConfirmationOpen,
    setIsConfirmationOpen,
    balance,
    setBalance,
    couponSelected,
    setCouponSelected,
  };
  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
