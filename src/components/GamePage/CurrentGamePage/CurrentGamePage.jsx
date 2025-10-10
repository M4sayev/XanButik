import React, { useContext } from "react";
import { GameContext } from "../../../context/GameContext";
import StartMenu from "../StartMenu/StartMenu";
import GamePlayComponent from "../GamePlayComponent/GamePlayComponent";
import GameFinished from "../GameFinishedComponent/GameFinished";

function CurrentGamePage({ setStartTime }) {
  const { isGameGoing, isGamePlayedToday } = useContext(GameContext);

  // (debugging) remove later
  return <GamePlayComponent />;
  if (isGameGoing) return <GamePlayComponent />;
  if (isGamePlayedToday) return <GameFinished />;
  return <StartMenu setStartTime={setStartTime} />;
}

export default CurrentGamePage;
