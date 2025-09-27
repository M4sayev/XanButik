import React, { useContext, useMemo } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

import OrderSummary from "../../components/Cart/OrderSummary/OrderSummary";

function Cart() {
  const { cartItems } = useContext(StoreContext);

  return (
    <main>
      <div className="cart-contents">
        <OrderSummary cartItems={cartItems} />
      </div>
    </main>
  );
}

export default Cart;
