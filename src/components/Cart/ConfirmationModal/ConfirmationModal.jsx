import React, { useContext } from "react";
import "./ConfirmationModal.css";
import { Link, useNavigate } from "react-router-dom";
import ModalCartItem from "./ModalCartItem";
import { useEscapeKey } from "../../../hooks/useEscapeKey.js";
import { StoreContext } from "../../../context/StoreContext.jsx";
import { formatPrice } from "../../../utils/utils.js";

function ConfirmationModal({
  setConfirmationModalOpen,
  cartItems,
  totalPrice,
}) {
  const { setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();
  function handleStartNewOrder() {
    setConfirmationModalOpen(false);
    navigate("/Store");
    localStorage.removeItem("cartItems");
    setCartItems([]);
  }

  useEscapeKey(() => setConfirmationModalOpen(false));
  return (
    <div className="confirmation-modal">
      <h2 className="std-heading confirmation-modal-heading">
        Order Confirmed
      </h2>
      <p className="std-paragraph confirmation-modal-message">
        Thank you for your purchase!
      </p>
      <ul className="confirmation-modal-body">
        {cartItems.map((item) => (
          <ModalCartItem
            key={item.id}
            name={item.name}
            count={item.count}
            price={item.price}
            img={item.img}
          />
        ))}
        <div className="modal-total-price">
          <span>Order Total</span>
          <span>${formatPrice(toFixed(2))}</span>
        </div>
      </ul>
      <button
        type="button"
        className="std-button start-new-order-button"
        onClick={handleStartNewOrder}
      >
        {" "}
        Start new Order
      </button>
    </div>
  );
}

export default ConfirmationModal;
