import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import "./EmptyCartMessage.css";
import { FaCartPlus } from "react-icons/fa";

function EmptyCartMessage() {
  return (
    <section
      className="empty-cart-message"
      aria-labelledby="empty-cart-heading"
    >
      <h2 id="empty-cart-heading" className="std-heading">
        Your cart is empty
      </h2>
      <FaCartPlus
        className="cart-icon"
        aria-hidden="true"
        style={{ color: "var(--clr-primary-900)" }}
      />
      <p>Looks like you haven't added any items to your cart yet.</p>
      <p className="wishlist-cta-text">
        Browse our products and start shopping!
      </p>
      <Button
        as={Link}
        to="/Store"
        id="BrowseProducts"
        className="std-button go-shopping-btn"
        aria-label="Browse products in store"
      >
        Browse
      </Button>
    </section>
  );
}

export default EmptyCartMessage;
