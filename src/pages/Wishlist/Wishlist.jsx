import React, { useContext } from "react";
import "./Wishlist.css";
import black_loafers_white_soles from "./black_loafers_white_soles.jpg";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";

function Wishlist() {
  const { wishListItems, setWishListItems } = useContext(StoreContext);

  return (
    <main>
      <div className="wishlist-contents">
        {!wishListItems.length ? (
          <div className="wishlist-empty-grid" role="status" aria-live="polite">
            <div className="empty-grid-contents">
              <FaCartPlus className="cart-icon" aria-hidden="true" />
              <p className="no-products-paragraph">
                No product in the wishlist yet
              </p>
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
        ) : (
          <>
            <h1 className="std-heading wishlist-heading">
              {wishListItems.length} Products in your Wishlist
            </h1>
            <div className="products-grid-wrapper">
              <div className="products-grid" role="list">
                {wishListItems.map(({ name, fullPrice, preview }, index) => (
                  <div className="wishlist-item" key={index} role="listitem">
                    <div className="wi-img-container">
                      <img src={preview} alt={name} />
                    </div>
                    <div className="wishlist-item-info">
                      <p className="wishlist-item-name">{name}</p>
                      <p className="wishlist-item-price">
                        {fullPrice.toFixed(2)}$
                      </p>
                    </div>
                    <div className="wishlist-item-controls">
                      <button
                        className="std-button wi-add-to-cart"
                        aria-label={`Add ${name} to cart`}
                      >
                        Add to cart
                      </button>
                      <button
                        data-type="inverted"
                        className="std-button wi-remove-from-wishlist"
                        aria-label={`Remove ${name} from wishlist`}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Wishlist;
