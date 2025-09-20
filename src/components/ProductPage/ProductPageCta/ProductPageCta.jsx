import React, { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";
import StarRating from "../StarRating/StarRating";
import ProductPrice from "../../StorePage/Products/ProductPrice";
import Modal from "../../../components/Modal/Modal.jsx";
import { useFocusTrap } from "../../../hooks/useTrapFocus.js";
import { useEscapeKey } from "../../../hooks/useEscapeKey.js";
import "./ProductPageCta.css";

import "./ReviewModal.css";
import ReviewsModal from "./ReviewsModal.jsx";
import ErrorMessage from "../../ErrorMessage/ErrorMessage.jsx";
import { StoreContext } from "../../../context/StoreContext.jsx";
import { calculateDiscountPrice } from "../../../utils/utils.js";
import Wishlist from "../../../pages/Wishlist/Wishlist.jsx";

function ProductPageCta({
  name,
  price,
  discountPercent,
  reviews,
  productId,
  currentSize,
  currentColor,
  setCurrentSize,
  setCurrentColor,
}) {
  const [showReviews, setShowReviews] = useState(false);
  const [openAddReview, setOpenAddReview] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { handleAddToWishlist } = useContext(StoreContext);

  const reviewsModalRef = useRef(null);
  const addReviewModalRef = useRef(null);

  const calculateRating = (rs) => {
    if (!rs.length) return 0;
    const avg = rs.reduce((acc, item) => acc + item.rating, 0) / rs.length;
    return Math.round(avg * 2) / 2;
  };

  // trap focus in the open review modal

  useFocusTrap(
    openAddReview ? addReviewModalRef : reviewsModalRef,
    showReviews
  );

  useEscapeKey(() => {
    setShowReviews(false);
    setOpenAddReview(false);
  });

  useEffect(() => {
    let timeoutId;
    const handleClickOutside = (event) => {
      if (
        reviewsModalRef.current &&
        !reviewsModalRef.current.contains(event.target)
      ) {
        setShowReviews(false);
        setOpenAddReview(false);
      }
    };
    timeoutId = setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
    }, 0);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showReviews]);

  // Add to cart
  const handleAddToCart = () => {
    if (!currentSize && !currentColor) {
      setErrorMessage(
        "Please select from the available colour and size options"
      );
    } else {
      setErrorMessage("");
      handleAddToWishlist();
    }
  };

  // Add to wishlist

  function handleAddToWishlistWithSelectors() {
    const newWishListItem = {
      productId,
      name,
      fullPrice: calculateDiscountPrice(price, discountPercent),
      color: currentColor,
      size: currentSize,
    };
    handleAddToWishlist(newWishListItem);
    setCurrentColor("");
    setCurrentSize("");
  }

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
          <Modal reviewsModalRef={reviewsModalRef}>
            <ReviewsModal
              setShowReviews={setShowReviews}
              reviews={reviews}
              openAddReview={openAddReview}
              setOpenAddReview={setOpenAddReview}
              addReviewModalRef={addReviewModalRef}
            />
          </Modal>
        )}
      </div>
      {!currentColor || !currentSize ? (
        <ErrorMessage message={errorMessage} fieldName={"color-size"} />
      ) : (
        ""
      )}
      <button className="std-button pp-btn" type="button">
        <PiShoppingBagLight aria-hidden="true" />
        <span>Add to Cart</span>
      </button>
      <button
        className="std-button pp-btn"
        data-type="inverted"
        type="button"
        onClick={handleAddToWishlistWithSelectors}
      >
        <AiOutlineHeart aria-hidden="true" />
        <span>Add to Wishlist</span>
      </button>
    </div>
  );
}

export default ProductPageCta;
