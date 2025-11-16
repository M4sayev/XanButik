import { useContext, useEffect, useRef, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { PiShoppingBagLight } from "react-icons/pi";
import StarRating from "../StarRating/StarRating";
import ProductPrice from "../../StorePage/Products/ProductPrice";
import Modal from "../../../components/Modal/Modal.jsx";
import { useFocusTrap } from "../../../hooks/useTrapFocus.js";
import { useEscapeKey } from "../../../hooks/useEscapeKey.js";

import "./ProductPageCta.css";
import "./../../StorePage/Products/Product.css";
import "./Reviews/ReviewModal.css";

import ReviewsModal from "./Reviews/ReviewsModal.jsx";
import ErrorMessage from "../../ErrorMessage/ErrorMessage.jsx";
import { StoreContext } from "../../../context/StoreContext.jsx";
import { useWishlist } from "../../../hooks/useWishlist.js";

function ProductPageCta({
  name,
  img,
  size,
  color,
  price,
  description,
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

  const { addToCart } = useContext(StoreContext);

  const { isInWishlist, toggleWishlist } = useWishlist(productId);

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
      const product = {
        id: productId,
        name,
        price,
        discountPercent,
        currentColor,
        currentSize,
        img,
        description,
        reviews,
        size,
        color,
      };
      addToCart(product);
      setCurrentColor("");
      setCurrentSize("");
    }
  };

  // Add to wishlist
  function handleAddToWishlistWithSelectors() {
    const newWishListItem = {
      productId,
      name,
      img,
      price,
      discountPercent,
      currentColor,
      currentSize,
      size,
      color,
      reviews,
      description,
    };
    toggleWishlist(newWishListItem);
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
          <span style={{ color: "var(--clr-primary-900", opacity: 0.8 }}>
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
      <button
        className="std-button pp-btn"
        type="button"
        aria-label="Add an item to your cart"
        onClick={handleAddToCart}
      >
        <PiShoppingBagLight aria-hidden="true" />
        <span>Add to Cart</span>
      </button>
      <button
        className={`std-button pp-btn ${isInWishlist ? "active" : ""}`}
        data-type="inverted"
        type="button"
        onClick={handleAddToWishlistWithSelectors}
        aria-label="Add an item to your wishlist"
      >
        <AiOutlineHeart aria-hidden="true" />
        <span>Add to Wishlist</span>
      </button>
    </div>
  );
}

export default ProductPageCta;
