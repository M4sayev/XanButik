import { GiNothingToSay } from "react-icons/gi";

function NoReviews() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        minHeight: "100px",
        paddingBlock: "4rem",
      }}
    >
      <GiNothingToSay
        aria-hidden="true"
        style={{
          width: "4rem",
          height: "4rem",
          color: "var(--clr-primary-900)",
        }}
      />
      <span>No reviews yet</span>
    </div>
  );
}

export default NoReviews;
