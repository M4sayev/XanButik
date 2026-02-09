import { useContext } from "react";
import "./ConfirmationModal.css";
import { useNavigate } from "react-router-dom";
import ModalCartItem from "./ModalCartItem";
import { useEscapeKey } from "../../../hooks/useEscapeKey.js";
import { StoreContext } from "../../../context/StoreContext.jsx";
import { formatPrice } from "../../../utils/utils.js";

function ConfirmationModal({
  setConfirmationModalOpen,
  cartItems,
  totalPrice,
  handleRemoveCurrentCoupon,
  appliedCouponId,
}) {
  const { setCartItems, setBoughtCoupons } = useContext(StoreContext);
  const navigate = useNavigate();
  function handleStartNewOrder() {
    navigate("/Store");
    clearCartItems();
  }

  function clearCartItems() {
    setConfirmationModalOpen(false);
    localStorage.removeItem("cartItems");
    setCartItems([]);

    // remove the current coupon from the bought coupons
    setBoughtCoupons((prev) => {
      const newBoughtCoupons = prev.filter(
        (coupon) => coupon.id != appliedCouponId,
      );
      localStorage.setItem("boughtCoupons", JSON.stringify(newBoughtCoupons));
      return newBoughtCoupons;
    });

    handleRemoveCurrentCoupon();
  }

  useEscapeKey(() => clearCartItems());
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
            dicountPercent={item.discountPercent}
          />
        ))}
        <div className="modal-total-price">
          <span>Order Total</span>
          <span>{formatPrice(totalPrice)}</span>
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
