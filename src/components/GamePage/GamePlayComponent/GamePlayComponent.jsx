import React, { useEffect, useRef } from "react";
import "./GamePlayComponent.css";
import CoinButton from "./CoinButton";

function GamePlayComponent() {
  const gameSectionRef = useRef(null);
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
    <section className="game-play-section" ref={gameSectionRef}>
      <CoinButton gameSectionRef={gameSectionRef} />
    </section>
  );
}

export default GamePlayComponent;
