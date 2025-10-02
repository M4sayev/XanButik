import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { CiHeart, CiMail } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { MdLocalPhone } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { useLocation } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import SingUpButton from "./SingUpButton";
import ContactDropdown from "./ContactDropdown";

function BtnsContainer({ navigateWishlist, navigateCart }) {
  const { setShowLogin, cartItems } = useContext(StoreContext);
  const location = useLocation();

  return (
    <>
      <WishlistButton
        navigate={navigateWishlist}
        active={location.pathname === "/Wishlist"}
      />
      <CartButton
        navigate={navigateCart}
        cartItems={cartItems}
        active={location.pathname === "/Cart"}
      />

      <ContactDropdown />
      <SingUpButton setShowLogin={setShowLogin} />
    </>
  );
}

export default BtnsContainer;
