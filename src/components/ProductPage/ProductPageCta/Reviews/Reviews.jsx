import React, { forwardRef } from "react";
import NoReviews from "./NoReviews";
import Review from "./Review";
import { IoClose } from "react-icons/io5";

function Reviews({ setShowReviews, sortedReviews }, ref) {
  return (
    <div
      className="pr-reviews-container"
      role="document"
      aria-labelledby="reviews-heading"
      aria-describedby="reviews-description"
      ref={ref}
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
      <ul aria-label="Customer reviews">
        {!sortedReviews.length ? (
          <NoReviews />
        ) : (
          sortedReviews.map((review, i) => (
            <Review key={`product-review-${i + 1}`} {...review} />
          ))
        )}
      </ul>
    </div>
  );
}

export default forwardRef(Reviews);
