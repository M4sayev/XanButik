import "./ModalCartItem.css";
import { calculateDiscountPrice, formatPrice } from "../../../utils/utils";

function ModalCartItem({ name, count, price, img, dicountPercent }) {
  const discountPrice = calculateDiscountPrice(price, dicountPercent);
  return (
    <li className="modal-cart-item">
      <div className="modal-cart-item-img-info-container">
        <div className="modal-cart-item-img-wrapper">
          <img src={img[0]} alt="" />
        </div>
        <div className="modal-cart-item-info">
          <p className="modal-cart-item-name">{name}</p>
          <span className="modal-cart-item-count">{count}x</span>
          <span className="modal-cart-item-price">
            {formatPrice(discountPrice)} each
          </span>
        </div>
      </div>
      <span className="modal-subtotal-price">
        {formatPrice(discountPrice * count)}
      </span>
    </li>
  );
}

export default ModalCartItem;
