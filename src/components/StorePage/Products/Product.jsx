import React, { useContext, useRef, useState } from "react";
import "./Product.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";
import { calculateDiscountPrice } from "../../../utils/utils";
import { StoreContext } from "../../../context/StoreContext";
import ProductPrice from "./ProductPrice";

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
}) {
  const animationDelay = `${index * 0.2}s`;
  const [image, setImage] = useState(img[0]);
  const intervalRef = useRef(null);
  const imgIndexRef = useRef(0);
  const { setCurrentProduct } = useContext(StoreContext);

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

  function openProductPage() {
    setCurrentProduct({
      id,
      price,
      category,
      name,
      img,
      description,
      discountPercent,
    });
  }

  return (
    <article
      className="str-product"
      style={{ animationDelay }}
      role="group"
      aria-label={name}
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
        <button className="std-button add-to-wishlist-btn">
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
