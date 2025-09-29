import React from "react";
import "./ModalCartItem.css";

function ModalCartItem({ name, count, price, img }) {
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
            ${price.toFixed(2)} each
          </span>
        </div>
      </div>
      <span class="modal-subtotal-price">${(price * count).toFixed(2)}</span>
    </li>
  );
}

export default ModalCartItem;
