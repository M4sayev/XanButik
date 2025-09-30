import React, { useContext, useRef, useState } from "react";
import "./Product.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { calculateDiscountPrice } from "../../../utils/utils";
import { StoreContext } from "../../../context/StoreContext";
import ProductPrice from "./ProductPrice";
import { Navigate, useNavigate } from "react-router-dom";
import Modal from "../../Modal/Modal";
import ColorSelector from "../../ProductPage/ProductPageSelectors/ColorSelector";
import SizeSelector from "../../ProductPage/ProductPageSelectors/SizeSelector";
import { toast } from "react-toastify";
import { useWishlist } from "../../../hooks/useWishlist";
import SelectorsDropdown from "./SelectorsDropdown";

function Product({
  id,
  price,
  category,
  name,
  img,
  description,
  index,
  discountPercent,
  searchQuery,
  size,
  color,
  reviews,
}) {
  const animationDelay = `${index * 0.2}s`;
  const [image, setImage] = useState(img[0]);

  const [selectorsDropdownOpen, setSelectorsDropdownOpen] = useState(false);

  const { isInWishlist, toggleWishlist } = useWishlist(id);

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const intervalRef = useRef(null);
  const imgIndexRef = useRef(0);
  const { addToCart, openProductPage } = useContext(StoreContext);

  function handleMouseEnter() {
    if (img.length < 2) return;

    intervalRef.current = setInterval(() => {
      imgIndexRef.current++;

      if (imgIndexRef.current >= img.length) imgIndexRef.current = 0;
      setImage(img[imgIndexRef.current]);
    }, 800);
  }

  function handleMouseLeave() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    imgIndexRef.current = 0;
    setImage(img[0]);
  }

  const getHighlightedText = (text, highlight) => {
    if (!highlight) return text;

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <mark key={index}>{part}</mark>
      ) : (
        part
      )
    );
  };

  function handleAddToCart(product) {
    if (!selectedColor || !selectedSize) {
      const notify = toast.error(
        "Please select a color and a size of the product."
      );
      notify();
      return;
    } else {
      addToCart(product);
      setSelectorsDropdownOpen(false);
      setSelectedColor("");
      setSelectedSize("");
    }
  }

  function handleSelectSize(size) {
    setSelectedSize(() => (size === selectedSize ? "" : size));
  }

  function handleSelectColor(color) {
    setSelectedColor(() => (color === selectedColor ? "" : color));
  }

  return (
    <article
      className="str-product"
      style={{ animationDelay }}
      role="group"
      aria-label={name}
      onKeyDown={(e) => e.key === "Enter" && openProductPage()}
      tabIndex={0}
      id={id}
      onClick={(e) =>
        openProductPage(e, {
          id,
          price,
          category,
          name,
          img,
          description,
          discountPercent,
          size,
          color,
          reviews,
        })
      }
    >
      <div
        className="str-product-img-wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {discountPercent === 0 ? (
          ""
        ) : (
          <span className="product-sale">Sale</span>
        )}
        <img className="str-preview-img" src={image} alt={name} />
        <button
          type="button"
          className="std-button add-to-wishlist-btn"
          aria-label="Add to wishlist"
          onClick={() =>
            toggleWishlist({
              productId: id,
              name,
              price,
              discountPercent,
              currentColor: "",
              currentSize: "",
              img,
              color,
              size,
              reviews,
              description,
            })
          }
        >
          <CiHeart
            aria-hidden="true"
            color={isInWishlist ? "#e53935" : "var(--clr-primary-900)"}
          />
        </button>
      </div>
      <div className="str-product-info-container">
        <div className="str-product-name-price">
          <p className="str-product-name">
            {getHighlightedText(name, searchQuery)}
          </p>
          <ProductPrice discountPercent={discountPercent} price={price} />
        </div>
        <div className="product-add-to-cart">
          <button
            className="product-add-to-cart-btn"
            onClick={() => setSelectorsDropdownOpen((prev) => !prev)}
          >
            <HiOutlineShoppingBag
              className="shopping-bag "
              style={{ color: "var(--clr-primary-900)" }}
            />
          </button>
          <SelectorsDropdown
            setSelectorsDropdownOpen={setSelectorsDropdownOpen}
            selectorsDropdownOpen={selectorsDropdownOpen}
            color={color}
            size={size}
            price={price}
            discountPercent={discountPercent}
            img={img}
            handleAddToCart={handleAddToCart}
            name={name}
            id={id}
            handleSelectSize={handleSelectSize}
            handleSelectColor={handleSelectColor}
            selectedColor={selectedColor}
            selectedSize={selectedSize}
            description={description}
            reviews={reviews}
          />
        </div>
      </div>
    </article>
  );
}

export default Product;
