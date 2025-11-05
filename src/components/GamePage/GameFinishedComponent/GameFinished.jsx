import backgroundImage from "../../../assets/game/game_bg.png";
import "../CurrentGamePage/GameScreens.css";

function GameFinished() {
  return (
    <div
      className="game-screen-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="game-contents-overlay"></div>
      <div className="game-screen">
        <h1 className="std-heading">Game is over</h1>
        <p className="std-paragraph mi-auto">This is it for today.</p>
        <p className="std-paragraph coin-balance-preview">
          Come back tomorrow to earn more
        </p>
      </div>
    </div>
  );
}

export default GameFinished;
