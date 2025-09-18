import React, { useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";
import StarRating from "../StarRating/StarRating";
import ProductPrice from "../../StorePage/Products/ProductPrice";
import Modal from "../../../components/Modal/Modal.jsx";
import { useFocusTrap } from "../../../hooks/useTrapFocus";
import "./ProductPageCta.css";

import "./ReviewModal.css";
import ReviewsModal from "./ReviewsModal.jsx";

function ProductPageCta({ name, price, discountPercent, reviews }) {
  const [showReviews, setShowReviews] = useState(false);
  const calculateRating = (rs) => {
    if (!rs.length) return 0;
    const avg = rs.reduce((acc, item) => acc + item.rating, 0) / rs.length;
    return Math.round(avg * 2) / 2;
  };

  const reviewsModalRef = useRef(null);
  useFocusTrap(reviewsModalRef, showReviews);

  return (
    <div className="pp-info-container">
      <h1 className="std-heading" style={{ marginBottom: "var(--spacing-sm)" }}>
        {name}
      </h1>
      <ProductPrice discountPercent={discountPercent} price={price} />
      <div>
        <button
          className="reviews-container"
          type="button"
          aria-label="Open product reviews"
          onClick={() => setShowReviews(true)}
        >
          <StarRating rating={calculateRating(reviews)} />
          <span>
            {!reviews.length ? "No reviews" : `(${reviews.length} Reviews)`}
          </span>
        </button>
        {showReviews && (
          <Modal>
            <ReviewsModal
              setShowReviews={setShowReviews}
              reviews={reviews}
              reviewsModalRef={reviewsModalRef}
            />
          </Modal>
        )}
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
