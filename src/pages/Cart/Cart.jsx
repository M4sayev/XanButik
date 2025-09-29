import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import OrderSummary from "../../components/Cart/OrderSummary/OrderSummary";
import EmptyCartMessage from "../../components/Cart/EmptyCartMessage/EmptyCartMessage";
import CartItemsList from "../../components/Cart/CartItemsList/CartItemsList";

function Cart() {
  const { cartItems, setCartItems } = useContext(StoreContext);

  return (
    <main>
      <div className="cart-contents">
        {cartItems.length === 0 ? (
          <EmptyCartMessage />
        ) : (
          <>
            <h2
              className="std-heading std-heading-cta"
              style={{ textAlign: "center" }}
            >
              Your Cart
            </h2>
            <div className="items-summary-container">
              <OrderSummary cartItems={cartItems} />
              <CartItemsList
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
