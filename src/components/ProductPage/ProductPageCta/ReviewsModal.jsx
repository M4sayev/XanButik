import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import StarRating from "../StarRating/StarRating";
import { IoMdAdd } from "react-icons/io";
import StarRatingInput from "../StarRating/StarRatingInput";

function ReviewsModal({
  setShowReviews,
  reviews,
  setOpenAddReview,
  openAddReview,
  addReviewModalRef,
  firstElRef,
  reviewsModalRef,
}) {
  return (
    <>
      <div
        className={`add-product-review-container ${
          openAddReview && "add-review--active"
        }`}
      >
        <button
          className="add-product-review-btn"
          type="button"
          aria-label="Add a new review"
          onClick={() => setOpenAddReview(true)}
          ref={firstElRef}
        >
          <span className="btn-text">Add a Review</span>
          <IoMdAdd aria-hidden="true" className="btn-icon" />
        </button>
        <form
          ref={addReviewModalRef}
          className={`add-review-form-container`}
          aria-labelledby="reviews-heading"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1
              id="reviews-heading"
              className="std-heading-cta pr-modal-heading"
            >
              Add a review
            </h1>
            <button
              type="button"
              className="icon-btn cross-icon"
              onClick={() => setOpenAddReview(false)}
              aria-label="Close the reviews modal"
              tabIndex={openAddReview ? 0 : -1}
            >
              <IoClose
                aria-hidden="true"
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
          <div className="form-field">
            <label htmlFor="name">Name </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              aria-required="true"
              tabIndex={openAddReview ? 0 : -1}
              disabled={!openAddReview}
            />
          </div>
          <div className="form-field" style={{ marginTop: "var(--spacing-sm" }}>
            <StarRatingInput onClick={(value) => console.log(value)} />
          </div>
          <div className="form-field">
            <label htmlFor="review">Review</label>
            <textarea
              className="add-review-textarea no-resize"
              id="review"
              name="review"
              rows="4"
              required
              aria-required="true"
              tabIndex={openAddReview ? 0 : -1}
              disabled={!openAddReview}
            />
          </div>
          <button
            type="submit"
            className="std-button submit-review-btn"
            tabIndex={openAddReview ? 0 : -1}
            disabled={!openAddReview}
          >
            Add
          </button>
        </form>
      </div>
      <div
        className="pr-reviews-container"
        role="document"
        aria-labelledby="reviews-heading"
        aria-describedby="reviews-description"
        ref={reviewsModalRef}
      >
        <h1 id="reviews-heading" className="std-heading pr-modal-heading">
          Product Reviews
        </h1>
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
              <div
                className="product-review"
                key={i}
                role="listitem"
                tabIndex={0}
              >
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
