import React, { useEffect, useState } from "react";
import Button from "../Button/Button";

import GoldenCoin from "../../assets/game/xn_coin_gold.svg?react";
import { Link } from "react-router-dom";

function NavbarCoin() {
  const [shine, setShine] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShine(true);
      setTimeout(() => setShine(false), 2000);
    }, Math.random() * 15000 + 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Button as={Link} to="/Game" className="navbar-coin-btn">
      <GoldenCoin width="30px" height="30px" className="navbar-coin" />
      {shine && <div className="coin-shine"></div>}
    </Button>
  );
}

export default NavbarCoin;
