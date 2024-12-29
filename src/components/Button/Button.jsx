import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const Button = ({ onClick, children, as: Component = "button", ...rest }) => {
  const { setCurrentPage } = useContext(StoreContext);
  
  function handleMenuItemChange(event) {
    const id = event.target.id;
    if (!id) return;
    if (id === "LearnNowHome") setCurrentPage("About Us");
    else if (id === "ShopNowHome" || id === "Explore" || id === "ViewMoreHome") setCurrentPage("Store");
  }
    return (
      <Component role="button" onClick={() => handleMenuItemChange(event)} className="button" {...rest}>
        {children}
      </Component>
    );
};

export default Button;