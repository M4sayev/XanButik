import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { COLOR_MAP } from "../../../constants/constants";

function StarRating({ rating, maxRating = 5 }) {
  const stars = [];
  const gold = COLOR_MAP["Gold"];
  const styles = {
    color: gold,
    width: "1rem",
    height: "1rem",
  };

  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<FaStar key={i} style={styles} />);
    } else if (i - rating <= 0.5) {
      stars.push(<FaStarHalfAlt key={i} style={styles} />);
    } else {
      stars.push(<FaRegStar key={i} style={styles} />);
    }
  }

  return (
    <div
      aria-label={`Rated ${rating} out of 5 stars from ${maxRating} reviews`}
      style={{ display: "inline-flex", gap: "4px" }}
    >
      {stars}
    </div>
  );
}

export default StarRating;
