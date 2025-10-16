import React, { useContext, useState } from "react";
import { IoClose } from "react-icons/io5";
import StarRating from "../StarRating/StarRating";
import { IoMdAdd } from "react-icons/io";
import StarRatingInput from "../StarRating/StarRatingInput";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "../../ErrorMessage/ErrorMessage";
import { StoreContext } from "../../../context/StoreContext.jsx";

function ReviewsModal({
  setShowReviews,
  reviews,
  setOpenAddReview,
  openAddReview,
  addReviewModalRef,
  reviewsModalRef,
}) {
  const { currentProduct, setCurrentProduct } = useContext(StoreContext);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const today = new Date();
    const formattedDate = today.toISOString().split("T")[0];
    const newReview = {
      rating: data.rating || 0,
      comment: data.review,
      username: data.name?.trim() || "Anonymous",
      date: formattedDate,
    };

    setCurrentProduct((prev) => ({
      ...prev,
      reviews: [...prev.reviews, newReview],
    }));

    reset();

    setOpenAddReview(false);
  };

  return (
    <div className="reviews-modal-component">
      <div
        className={`add-product-review-container ${
          openAddReview && "add-review--active"
        }`}
      >
        <div className="add-product-review-btn">
          <span className="btn-text">Add a Review</span>
          <button
            type="button"
            className="add-btn"
            aria-label="Add a new review"
            onClick={() => setOpenAddReview(true)}
          >
            <IoMdAdd
              aria-hidden="true"
              className="btn-icon"
              style={{ color: "var(--clr-primary-900)" }}
            />
          </button>
        </div>
        <form
          ref={addReviewModalRef}
          className={`add-review-form-container`}
          aria-labelledby="reviews-heading"
          onSubmit={handleSubmit(onSubmit)}
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
                style={{
                  width: "20px",
                  height: "20px",
                  color: "var(--clr-primary-900)",
                }}
              />
            </button>
          </div>
          <div className="form-field">
            <label htmlFor="name">Name </label>
            <input
              {...register("name", {
                required: true,
              })}
              id="name"
              type="text"
              name="name"
              aria-required="true"
              tabIndex={openAddReview ? 0 : -1}
              disabled={!openAddReview}
            />
            <ErrorMessage message={errors.name?.message} fieldName="name" />
          </div>
          <div className="form-field" style={{ marginTop: "var(--spacing-sm" }}>
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <StarRatingInput
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>
          <div className="form-field">
            <label htmlFor="review">Review</label>
            <textarea
              {...register("review", {
                required: true,
              })}
              className="add-review-textarea no-resize"
              id="review"
              name="review"
              rows="4"
              required
              aria-required="true"
              tabIndex={openAddReview ? 0 : -1}
              disabled={!openAddReview}
            />
            <ErrorMessage message={errors.review?.message} fieldName="review" />
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
              style={{
                width: "20px",
                height: "20px",
                color: "var(--clr-primary-900)",
              }}
            />
          </button>
        </div>
        <div role="list" aria-label="Customer reviews">
          {!reviews.length ? (
            <div style={{ textAlign: "center", height: "2rem" }}>
              No reviews yet
            </div>
          ) : (
            currentProduct.reviews
              .toSorted(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((review, i) => (
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
                  <span className="product-review-author">
                    {review.username}
                  </span>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewsModal;
