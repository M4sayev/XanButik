import React from "react";
import { IoClose } from "react-icons/io5";
import StarRating from "../StarRating/StarRating";
import { IoMdAdd } from "react-icons/io";

function ReviewsModal({ setShowReviews, reviews, reviewsModalRef }) {
  return (
    <>
      <div
        role="document"
        aria-labelledby="reviews-heading"
        aria-describedby="reviews-description"
        ref={reviewsModalRef}
      >
        <h2 id="reviews-heading" className="std-heading pr-modal-heading">
          Product Reviews
        </h2>
        <div className="pr-paragraph-container">
          <p
            id="reviews-description"
            className="std-paragraph pr-modal-paragraph"
          >
            Read what our customers are saying
          </p>
          <button
            type="button"
            className="icon-btn cross-icon"
            onClick={() => setShowReviews(false)}
            aria-label="Close the reviews modal"
          >
            <IoClose
              aria-hidden="true"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        </div>
        <div role="list" aria-label="Customer reviews">
          {!reviews.length ? (
            <div style={{ textAlign: "center", height: "2rem" }}>
              No reviews yet
            </div>
          ) : (
            reviews.map((review, i) => (
              <div className="product-review" key={i} role="listitem">
                <header className="product-review-header">
                  <StarRating rating={review.rating} />
                  <span className="product-review-date">{review.date}</span>
                </header>
                <p className="product-review-comment">{review.comment}</p>
                <span className="product-review-author">{review.username}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default ReviewsModal;
