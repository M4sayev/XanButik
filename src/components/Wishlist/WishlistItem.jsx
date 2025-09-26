import { useEffect, useState, useContext } from "react";
import Modal from "../Modal/Modal";
import SelectorsDropdown from "../StorePage/Products/SelectorsDropdown";
import { calculateDiscountPrice } from "../../utils/utils";
import { toast } from "react-toastify";
import { StoreContext } from "./../../context/StoreContext";

function WishlistItem({
  index,
  openProductPage,
  name,
  handleRemoveWishlistItem,
  productId,
  price,
  discountPercent,
  description,
  img,
  size,
  color,
  reviews,
}) {
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectorsDropdownOpen, setSelectorsDropdownOpen] = useState(false);
  const { addToCart } = useContext(StoreContext);

  function handleSelectSize(size) {
    setSelectedSize(() => (size === selectedSize ? "" : size));
  }

  function handleSelectColor(color) {
    setSelectedColor(() => (color === selectedColor ? "" : color));
  }

  function handleAddToCart(product) {
    if (!selectedColor || !selectedSize) {
      const notify = () =>
        toast.error("Please select a color and a size of the product.");
      notify();
      return;
    } else {
      addToCart(product);
      setSelectorsDropdownOpen(false);
    }
  }

  return (
    <div
      className="wishlist-item"
      key={index}
      role="listitem"
      onClick={(e) =>
        openProductPage(e, {
          id: productId,
          name,
          price,
          discountPercent,
          img,
          size,
          color,
          reviews,
          description,
        })
      }
    >
      <div className="wi-img-container">
        <img src={img[0]} alt={name} />
      </div>
      <div className="wishlist-item-info">
        <p className="wishlist-item-name">{name}</p>
        <p className="wishlist-item-price">
          {calculateDiscountPrice(price, discountPercent).toFixed(2)}$
        </p>
      </div>
      <div className="wishlist-item-controls">
        <button
          className="std-button wi-add-to-cart"
          aria-label={`Add ${name} to cart`}
          onClick={() => setSelectorsDropdownOpen((prev) => !prev)}
        >
          Add to cart
        </button>

        <div style={{ position: "relative" }}>
          <SelectorsDropdown
            setSelectorsDropdownOpen={setSelectorsDropdownOpen}
            handleSelectSize={handleSelectSize}
            handleSelectColor={handleSelectColor}
            color={color}
            size={size}
            price={price}
            discountPercent={discountPercent}
            description={description}
            img={img}
            handleAddToCart={handleAddToCart}
            name={name}
            id={productId}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            selectorsDropdownOpen={selectorsDropdownOpen}
          />
        </div>

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

export default WishlistItem;
