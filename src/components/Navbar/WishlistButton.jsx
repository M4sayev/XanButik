import React from "react";
import { CiHeart } from "react-icons/ci";

function WishlistButton({ navigate, active = false }) {
  return (
    <button className="icon-btn" aria-label="wishlist" onClick={navigate}>
      <CiHeart
        aria-label="wishlist"
        className="btns-icon"
        color={active ? "#e53935" : "var(--clr-primary-900)"}
      />
    </button>
  );
}

export default WishlistButton;
