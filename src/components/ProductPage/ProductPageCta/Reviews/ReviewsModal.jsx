import { useContext, useMemo } from "react";
import { IoClose } from "react-icons/io5";
import StarRatingInput from "../../StarRating/StarRatingInput.jsx";
import { Controller, useForm } from "react-hook-form";
import ErrorMessage from "../../../ErrorMessage/ErrorMessage.jsx";
import { StoreContext } from "../../../../context/StoreContext.jsx";
import Reviews from "./Reviews.jsx";
import AddReviewBtn from "./AddReviewBtn.jsx";

function ReviewsModal({
  setShowReviews,
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

  const sortedReviews = useMemo(
    () =>
      currentProduct.reviews.toSorted(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      ),
    [currentProduct.reviews]
  );

  return (
    <div
      className="reviews-modal-component"
      role="dialog"
      aria-modal="true"
      aria-labelledby="reviews-heading"
    >
      <div
        className={`add-product-review-container ${
          openAddReview && "add-review--active"
        }`}
      >
        <AddReviewBtn setOpenAddReview={setOpenAddReview} />
        <form
          ref={addReviewModalRef}
          className={`add-review-form-container`}
          aria-labelledby="reviews-heading"
          onSubmit={handleSubmit(onSubmit)}
          tabIndex={-1}
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
              disabled={!openAddReview}
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
          <div
            className="form-field"
            style={{ marginTop: "var(--spacing-sm)" }}
          >
            <Controller
              name="rating"
              control={control}
              render={({ field }) => (
                <StarRatingInput
                  value={field.value}
                  onChange={field.onChange}
                  focusable={openAddReview}
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
      <Reviews
        setShowReviews={setShowReviews}
        ref={reviewsModalRef}
        sortedReviews={sortedReviews}
      />
    </div>
  );
}

export default ReviewsModal;
