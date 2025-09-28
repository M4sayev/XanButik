import React from "react";
import { Link } from "react-router-dom";

function EmptyCartMEssage() {
  return (
    <section className="empty-cart-message">
      <h2>Your cart is empty</h2>
      <p>Looks like you haven't added any items to your cart yet.</p>
      <p>Browse our products and start shopping!</p>
      <Button as={Link} to="/Store"></Button>
    </section>
  );
}

export default EmptyCartMEssage;
