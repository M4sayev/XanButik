import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
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
