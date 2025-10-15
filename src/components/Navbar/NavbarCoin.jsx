import React, { useEffect, useState } from "react";
import "./NavbarCoin.css";

import GoldenCoin from "../../assets/game/xn_coin_gold.svg?react";

function NavbarCoin({ navigate }) {
  const [shine, setShine] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShine(true);
      setTimeout(() => setShine(false), 2000);
    }, Math.random() * 15000 + 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <button
      className="navbar-coin-btn"
      type="button"
      aria-label="Go to tap-to-earn game page"
      onClick={navigate}
    >
      <GoldenCoin width="30px" height="30px" className="navbar-coin" />
      {shine && <div className="coin-shine"></div>}
    </button>
  );
}

export default NavbarCoin;
