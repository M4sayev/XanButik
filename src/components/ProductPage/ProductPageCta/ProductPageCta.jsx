import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";
import StarRating from "../StarRating/StarRating";
import ProductPrice from "../../StorePage/Products/ProductPrice";
import "./ProductPageCta.css";

function ProductPageCta({ name, price, discountPercent, reviews }) {
  const calculateRating = (rs) => {
    if (!rs.length) return 0;
    const avg = rs.reduce((acc, item) => acc + item.rating, 0) / rs.length;
    return Math.round(avg * 2) / 2;
  };
  return (
    <div className="pp-info-container">
      <h1 className="std-heading" style={{ marginBottom: "var(--spacing-sm)" }}>
        {name}
      </h1>
      <ProductPrice discountPercent={discountPercent} price={price} />
      <div>
        <div className="reviews-container">
          <StarRating rating={calculateRating(reviews)} />
          <span>
            {!reviews.length ? "No reviews" : `(${reviews.length} Reviews)`}
          </span>
        </div>
      </div>
      <button className="std-button pp-btn" type="button">
        <PiShoppingBagLight aria-hidden="true" />
        <span>Add to Cart</span>
      </button>
      <button className="std-button pp-btn" data-type="inverted" type="button">
        <AiOutlineHeart aria-hidden="true" />
        <span>Add to Wishlist</span>
      </button>
    </div>
  );
}

export default ProductPageCta;
