import { formatPrice } from "../../../utils/utils";

function CartItemInfo({
  preview,
  name,
  currentSize,
  currentColor,
  totalPrice,
}) {
  return (
    <div className="cart-item-info-container">
      <div className="img-wrapper">
        <img src={preview} alt="" />
      </div>
      <div className="cart-item-details">
        <h3 className="cart-item-name">{name}</h3>
        <p className="cart-item-selectors">
          Size: {currentSize} | Color: {currentColor}
        </p>
        <p className="cart-item-price">{formatPrice(totalPrice)} each</p>
      </div>
    </div>
  );
}

export default CartItemInfo;
