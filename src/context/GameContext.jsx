import React, { createContext, useState } from "react";
import { TIMER } from "../constants/constants";

export const GameContext = createContext(null);

function GameContextProvider(props) {
  // timer remaining time for the game page
  const [timeRemaining, setTimeRemaining] = useState(TIMER);

  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const contextValue = {
    timeRemaining,
    setTimeRemaining,
    isConfirmationOpen,
    setIsConfirmationOpen,
  };
  return (
    <GameContext.Provider value={contextValue}>
      {props.children}
    </GameContext.Provider>
  );
}

export default GameContextProvider;
