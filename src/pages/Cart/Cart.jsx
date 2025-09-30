import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext.jsx";
import OrderSummary from "../../components/Cart/OrderSummary/OrderSummary.jsx";
import CartItemsList from "../../components/Cart/CartItemsList/CartItemsList.jsx";
import EmptyCartMessage from "../../components/Cart/EmptyCart/EmptyCartMessage.jsx";

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
              <CartItemsList
                cartItems={cartItems}
                setCartItems={setCartItems}
              />
              <OrderSummary cartItems={cartItems} />
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Cart;
