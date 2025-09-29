import React from "react";
import { calculateDiscountPrice, formatPrice } from "../../../utils/utils";

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
        {formatPrice(price)}
      </span>
      <span
        className="str-product-price"
        style={{ color: "var(--clr-validation-err)" }}
      >
        {formatPrice(calculateDiscountPrice(price, discountPercent))}
      </span>
    </div>
  );
}

export default ProductPrice;
