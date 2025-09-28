import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";

import OrderSummary from "../../components/Cart/OrderSummary/OrderSummary";
import EmptyCartMEssage from "../../components/Cart/EmptyCartMessage/EmptyCartMEssage";
import CartItemsList from "../../components/Cart/CartItemsList/CartItemsList";

function Cart() {
  const { cartItems } = useContext(StoreContext);

  return (
    <main>
      <div className="cart-contents">
        {cartItems.length === 0 ? (
          <EmptyCartMEssage />
        ) : (
          <>
            <OrderSummary cartItems={cartItems} />
            <CartItemsList cartItems={cartItems} />
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
