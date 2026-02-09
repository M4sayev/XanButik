import XanCoin from "../../../assets/game/xn_coin.svg?react";
import XanCoinGold from "../../../assets/game/xn_coin_gold.svg?react";
import { MdDiscount } from "react-icons/md";
import Button from "../../Button/Button.jsx";
import "./NoCoupons.css";
import { Link } from "react-router-dom";

function NoCoupons() {
  return (
    <div className="no-coupons-body" aria-labelledby="no-coupons-heading">
      <MdDiscount
        aria-hidden="true"
        style={{ width: "100%", height: "60px" }}
      />
      <h2 id="no-coupons-heading" className="std-heading mi-auto">
        Out of coupons
      </h2>
      <div className="text-container">
        <span>Earn coins</span>
        <span></span>
        <XanCoin style={{ width: "25px", height: "25px" }} aria-hidden="true" />
        <XanCoinGold
          style={{ width: "25px", height: "25px" }}
          aria-hidden="true"
        />
        <span> to buy coupons</span>
      </div>
      <Button as={Link} to="/Game" className="std-button earn-coins-btn">
        Earn Coupons Now
      </Button>
    </div>
  );
}

export default NoCoupons;
