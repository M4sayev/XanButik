import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
  const { setCurrentPage } = useContext(StoreContext);

  function handleMenuItemChange(event) {
    const id = event.target.id;
    if (!id) return;
    if (id === "LearnMore") setCurrentPage("About Us");
    else if (id === "ShopNow" || id === "Explore" || id === "ViewMore")
      setCurrentPage("Store");
  }
  return (
    <Component
      role="button"
      onClick={(event) => handleMenuItemChange(event)}
      className="std-button"
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Button;
