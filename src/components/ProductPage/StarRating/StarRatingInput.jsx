import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";
import { COLOR_MAP } from "../../../constants/constants";

function StarRatingInput({ onChange, value }) {
  const gold = COLOR_MAP["Gold"];

  return (
    <Rating
      fractions={2}
      initialRating={value}
      onChange={onChange}
      emptySymbol={<FaRegStar color={gold} size="1.5rem" />}
      fullSymbol={<FaStar color={gold} size="1.5rem" />}
    />
  );
}

export default StarRatingInput;
