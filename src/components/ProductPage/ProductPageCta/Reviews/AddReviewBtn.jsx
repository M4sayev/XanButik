import { IoMdAdd } from "react-icons/io";

function AddReviewBtn({ setOpenAddReview }) {
  return (
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
          style={{ color: "var(--clr-primary-900)", cursor: "pointer" }}
        />
      </button>
    </div>
  );
}

export default AddReviewBtn;
