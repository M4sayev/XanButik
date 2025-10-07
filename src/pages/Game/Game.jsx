import React, { useEffect, useState } from "react";
import "./Game.css";
import { ClipLoader } from "react-spinners";
import StartMenu from "../../components/GamePage/StartMenu/StartMenu";
import GoBackButton from "../../components/GamePage/GoBackButton/GoBackButton";

import Timer from "../../components/GamePage/Timer/Timer";
import ExchangeCoinsBtn from "../../components/GamePage/ExchangeCoinsBtn/ExchangeCoinsBtn";
import Spinner from "../../components/Spinner/Spinner";
import GameContextProvider from "../../context/GameContext";

function Game() {
  const [startTime, setStartTime] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <GameContextProvider>
      <Spinner loading={loading} />
      {!loading && (
        <main className="game-page">
          <div className="game-contents">
            <nav className="game-nav">
              <GoBackButton />
              <Timer startTime={startTime} setStartTime={setStartTime} />
              <ExchangeCoinsBtn />
            </nav>
            <StartMenu setStartTime={setStartTime} />
          </div>
        </main>
      )}
    </GameContextProvider>
  );
}

export default Game;
