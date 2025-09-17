import React from "react";
import { calculateDiscountPrice } from "../../../utils/utils";

function ProductPrice({ discountPercent, price }) {
  if (discountPercent === 0) {
    return <span className="str-product-price">{price.toFixed(2)}$</span>;
  }
  return (
    <div className="str-discount-price-container">
      <span
        className="str-product-price"
        style={{ textDecoration: "line-through" }}
      >
        {price.toFixed(2)}$
      </span>
      <span
        className="str-product-price"
        style={{ color: "var(--clr-validation-err)" }}
      >
        {calculateDiscountPrice(price, discountPercent).toFixed(2)}$
      </span>
    </div>
  );
}

export default ProductPrice;
