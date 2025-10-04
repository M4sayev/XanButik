import React, { useEffect, useState } from "react";
import "./Game.css";
import { ClipLoader } from "react-spinners";
import StartMenu from "../../components/GamePage/StartMenu/StartMenu";

function Game() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 850);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loading-overlay">
          <ClipLoader
            loading={loading}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <main className="game-page">
          <div className="game-contents">
            <StartMenu />
          </div>
        </main>
      )}
    </>
  );
}

export default Game;
