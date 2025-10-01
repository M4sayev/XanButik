import React, { useContext, useRef, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { CiHeart, CiMail } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { MdLocalPhone } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { LuCopy, LuCopyCheck } from "react-icons/lu";
import { useLocation } from "react-router-dom";

function BtnsContainer({ navigateWishlist, navigateCart }) {
  const { setShowLogin, cartItems } = useContext(StoreContext);
  const [copied, setCopied] = useState(false);
  const location = useLocation();

  function handleDropDownClick(e) {
    // If it's a keydown, only respond to Enter
    if (e.type === "keydown" && e.key !== "Enter") return;

    const phoneNum = e.currentTarget
      .querySelector(".dp-number")
      ?.textContent?.trim();

    if (phoneNum) {
      navigator.clipboard
        .writeText(phoneNum)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy phone number:", err);
        });
    } else {
      console.warn("No phone number found to copy.");
    }
  }

  return (
    <>
      <button
        className="icon-btn"
        aria-label="wishlist"
        onClick={navigateWishlist}
      >
        <CiHeart
          aria-label="wishlist"
          className="btns-icon"
          color={
            location.pathname === "/Wishlist"
              ? "#e53935"
              : "var(--clr-primary-900)"
          }
        />
      </button>
      <button className="icon-btn shopping-cart-icon" onClick={navigateCart}>
        <PiShoppingBagLight
          color={
            location.pathname === "/Cart"
              ? "#387638ff"
              : "var(--clr-primary-900)"
          }
          aria-label="shopping bag"
          className="btns-icon"
        />
        <span aria-live="polite" className="shopping-cart-item-count">
          {cartItems.map((item) => item.count).reduce((a, b) => a + b, 0)}
        </span>
      </button>
      <div className="contact-us-dropdown-container">
        <span
          aria-label="contacts"
          aria-haspopup="true"
          className="mail-phone-icon-container"
          tabIndex={0}
        >
          <CiMail
            className="btns-icon"
            style={{ color: "var(--clr-primary-900)" }}
          />
          <MdLocalPhone
            className="phone-icon"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </span>
        <span className="dropdown-arrow">
          <IoIosArrowUp
            aria-label="Arrow up"
            aria-hidden="true"
            className="dropdown-arrow-icon"
            style={{ color: "var(--clr-primary-900)" }}
          />
        </span>
        <div role="dropdown" className="active dropdown-contact-us">
          <span>
            <FiPhone
              aria-label="Phone icon"
              aria-hidden="true"
              className="dropdown-phone-icon"
              style={{ color: "var(--clr-primary-900)" }}
            />
          </span>
          <div
            onClick={handleDropDownClick}
            onKeyDown={handleDropDownClick}
            role="button"
            className="dropdown-item"
            tabIndex={0}
            aria-label={
              copied
                ? "Phone number copied to clipboard"
                : "Copy phone number to clipboard"
            }
          >
            <p className="dropdown-phone-number">
              <span className="dp-number">0554584886</span>
              <span className="copy-icon" aria-hidden="true">
                {copied ? (
                  <LuCopyCheck style={{ color: "var(--clr-primary-900)" }} />
                ) : (
                  <LuCopy style={{ color: "var(--clr-primary-900)" }} />
                )}
              </span>
              <span className="visually-hidden">
                {copied ? "Copied" : "Click to copy"}
              </span>
            </p>
            <p>Xan Butik</p>
          </div>
        </div>
      </div>
      <button
        onClick={() => setShowLogin(true)}
        className="std-button sign-up-btn"
        aria-label="Sign up"
      >
        Sign up
      </button>
    </>
  );
}

export default BtnsContainer;
