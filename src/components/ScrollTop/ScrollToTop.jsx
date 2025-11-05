import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTop.css";

function ScrollToTop({ showScrollTopBtn }) {
  function handleScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      id="ScrollToTop"
      className={`scroll-to-top-btn std-button ${
        showScrollTopBtn ? "" : "hide-to-top"
      }`}
      aria-label="Scroll to the top"
      onClick={handleScrollToTop}
    >
      <FaArrowUp aria-hidden="true" className="rotate-icon" />
    </button>
  );
}

export default ScrollToTop;
