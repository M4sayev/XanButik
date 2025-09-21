import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { StoreContext } from "../../context/StoreContext";
import "./Wishlist.css";
import { toast } from "react-toastify";

function Wishlist() {
  const { wishListItems, setWishListItems } = useContext(StoreContext);

  function handleRemoveWishlistItem(id) {
    const notify = () => toast.success("Item removed from the wishlist");
    const newItems = wishListItems.filter((item) => item.productId !== id);
    setWishListItems(newItems);
    localStorage.setItem("wishlistItems", JSON.stringify(newItems));
    notify();
  }

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
                {wishListItems.map(
                  ({ productId, name, fullPrice, preview }, index) => {
                    console.log({ productId, fullPrice });
                    return (
                      <div
                        className="wishlist-item"
                        key={index}
                        role="listitem"
                      >
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
                            onClick={() => handleRemoveWishlistItem(productId)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Wishlist;
