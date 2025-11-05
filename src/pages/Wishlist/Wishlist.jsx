import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Wishlist.css";
import { toast } from "react-toastify";
import WishlistItem from "../../components/Wishlist/WishlistItem";
import EmptyWishlist from "../../components/Wishlist/EmptyWishlist";

function Wishlist() {
  const { wishListItems, setWishListItems, openProductPage } =
    useContext(StoreContext);

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
          <EmptyWishlist />
        ) : (
          <>
            <h1 className="std-heading wishlist-heading">
              {wishListItems.length} Products in your Wishlist
            </h1>
            <div className="products-grid-wrapper">
              <div className="products-grid" role="list">
                {wishListItems.map((item, index) => {
                  return (
                    <WishlistItem
                      key={item.productId}
                      index={index}
                      openProductPage={openProductPage}
                      handleRemoveWishlistItem={handleRemoveWishlistItem}
                      {...item}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default Wishlist;
