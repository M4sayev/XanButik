import StarRating from "../../StarRating/StarRating";

function Review({ rating, date, comment, username }) {
  return (
    <li className="product-review" role="listitem" tabIndex={0}>
      <header className="product-review-header">
        <StarRating rating={rating} />
        <span className="product-review-date">{date}</span>
      </header>
      <p className="product-review-comment">{comment}</p>
      <span className="product-review-author">{username}</span>
    </li>
  );
}

export default Review;
