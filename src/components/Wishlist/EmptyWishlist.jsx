import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { FaCartPlus } from "react-icons/fa";

function EmptyWishlist() {
  return (
    <div className="wishlist-empty-grid" role="status" aria-live="polite">
      <div className="empty-grid-contents">
        <FaCartPlus className="cart-icon" aria-hidden="true" />
        <p className="no-products-paragraph">No product in the wishlist yet</p>
        <p className="wishlist-cta-text">
          Save items you love to find them easily later.
        </p>
        <Button
          as={Link}
          id="StartShopping"
          to="/Store"
          className="std-button go-shopping-btn"
        >
          Start Shopping
        </Button>
      </div>
    </div>
  );
}

export default EmptyWishlist;
