import React, { useEffect } from "react";
import "./GamePlayComponent.css";

function GamePlayComponent() {
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <section className="game-play-section">Game is going to be appear</section>
  );
}

export default GamePlayComponent;
