import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import "./EmptyCartMessage.css";
import { FaCartPlus } from "react-icons/fa";

function EmptyCartMEssage() {
  return (
    <section className="empty-cart-message">
      <h2 className="std-heading">Your cart is empty</h2>
      <FaCartPlus className="cart-icon" aria-hidden="true" />
      <p>Looks like you haven't added any items to your cart yet.</p>
      <p className="wishlist-cta-text">
        Browse our products and start shopping!
      </p>
      <Button
        as={Link}
        to="/Store"
        id="BrowseProducts"
        className="std-button go-shopping-btn"
      >
        Browse
      </Button>
    </section>
  );
}

export default EmptyCartMEssage;
