import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { COLOR_MAP } from "../../../constants/constants";
import { useState } from "react";

function StarRatingInput({ onChange, focusable = true }) {
  const gold = COLOR_MAP["Gold"];
  const [rating, setRating] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const newRating = Math.min(5, rating + 0.5);
      setRating(newRating);
      onChange(newRating);
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      const newRating = Math.max(0, rating - 0.5);
      setRating(newRating);
      onChange(newRating);
    }
  };

  return (
    <div
      tabIndex={focusable ? 0 : -1}
      style={{ display: "inline" }}
      aria-label="Select rating"
      onKeyDown={handleKeyDown}
    >
      <Rating
        fractions={2}
        initialRating={rating}
        onChange={(val) => {
          setRating(val);
          onChange(val);
        }}
        emptySymbol={<FaRegStar color={gold} size="1.5rem" />}
        fullSymbol={<FaStar color={gold} size="1.5rem" />}
      />
    </div>
  );
}

export default StarRatingInput;
