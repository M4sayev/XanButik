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

  // const [selectorsModalOpen, setSelectorsModaOpen] = useState(false);
  // const [selectedColor, setSelectedColor] = useState("");
  // const [selectedSize, setSelectedSize] = useState("");

  const intervalRef = useRef(null);
  const imgIndexRef = useRef(0);
  const { currentProduct, setCurrentProduct, handleAddToWishlist } =
    useContext(StoreContext);
  const navigate = useNavigate();

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

  function openProductPage(e) {
    if (
      e.target.closest(".add-to-wishlist-btn") ||
      e.target.closest(".shopping-bag")
    ) {
      return;
    }
    const productData = {
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
    };
    setCurrentProduct(productData);
    navigate("/Store/ProductPage");
    window.scrollTo({
      top: 64,
    });
    localStorage.setItem("currentProduct", JSON.stringify(productData));
  }

  // function handleSelectSize(size) {
  //   setSelectedSize(() => (size === selectedSize ? "" : size));
  // }

  // function handleSelectColor(color) {
  //   setSelectedColor(() => (color === selectedColor ? "" : color));
  // }

  // function handleSelectorModal() {
  //   setSelectorsModaOpen(true);
  // }

  return (
    <article
      className="str-product"
      style={{ animationDelay }}
      role="group"
      aria-label={name}
      onKeyDown={(e) => e.key === "Enter" && openProductPage()}
      tabIndex={0}
      id={id}
      onClick={openProductPage}
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
            handleAddToWishlist({
              productId: id,
              name,
              fullPrice: calculateDiscountPrice(price, discountPercent),
              color: "",
              size: "",
              preview: img[0],
            })
          }
        >
          <CiHeart aria-hidden="true" />
        </button>
      </div>
      <div className="str-product-info-container">
        <div className="str-product-name-price">
          <p className="str-product-name">
            {getHighlightedText(name, searchQuery)}
          </p>
          <ProductPrice discountPercent={discountPercent} price={price} />
        </div>

        <HiOutlineShoppingBag className="shopping-bag" />
      </div>
    </article>
  );
}

export default Product;
