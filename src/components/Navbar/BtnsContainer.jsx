import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useLocation } from "react-router-dom";
import WishlistButton from "./WishlistButton";
import CartButton from "./CartButton";
import SingUpButton from "./SingUpButton";
import ContactDropdown from "./ContactDropdown";
import NavbarCoin from "./NavbarCoin";

function BtnsContainer({ navigateTo }) {
  const { setShowLogin, cartItems } = useContext(StoreContext);
  const location = useLocation();

  return (
    <>
      <NavbarCoin navigate={() => navigateTo("/Game")} />
      <WishlistButton
        navigate={() => navigateTo("/Wishlist")}
        active={location.pathname === "/Wishlist"}
      />
      <CartButton
        navigate={() => navigateTo("/Cart")}
        cartItems={cartItems}
        active={location.pathname === "/Cart"}
      />

      <ContactDropdown />
      <SingUpButton setShowLogin={setShowLogin} />
    </>
  );
}

export default BtnsContainer;
