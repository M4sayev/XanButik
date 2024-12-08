import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { CiHeart, CiMail } from "react-icons/ci";
import { PiShoppingBagLight } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { MdLocalPhone } from "react-icons/md";
import { Link } from "react-router-dom";

function BtnsContainer({setShowLogin}) {
  return (
    <>
      <div>
        <CiHeart tabIndex="5" aria-label="wishlist" className="btns-icon" />
      </div>
      <div className="shopping-cart-icon">
        <PiShoppingBagLight
          tabIndex="6"
          aria-label="shopping bag"
          className="btns-icon"
        />
        <span
          aria-valuenow="0"
          aria-valuemin="0"
          className="shopping-cart-item-count"
        >
          0
        </span>
      </div>
      <div class="contact-us-dropdown-container">
        <span
          tabIndex="7"
          aria-label="contacts"
          className="mail-phone-icon-container"
        >
          <CiMail className="btns-icon" />
          <MdLocalPhone className="phone-icon" />
        </span>
        <span className="dropdown-arrow">
          <IoIosArrowUp aria-label="arrow up" className="dropdown-arrow-icon" />
        </span>
        <div role="dropdown" className="dropdown-contact-us">
          <span>
            <FiPhone aria-label="phone" className="dropdown-phone-icon" />
          </span>
          <div>
            <p>0554584886</p>
            <p>Xan Butik</p>
          </div>
        </div>
      </div>
      <button onClick={() => setShowLogin(true)} className="sign-up-btn" tabIndex="8">
        sing up
      </button>
    </>
  );
}

function Navbar({setShowLogin}) {
  const [isHamActive, setIsHamActive] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home");

  function handlePage(page) {
    if (page.tagName !== "A") return;
    if (currentPage !== page.innerHTML) setCurrentPage(page.innerHTML);
  }

  return (
    <div className="navigation">
      <div className="navbar">
        <img src={assets.logo_no_frame} alt="logo" className="logo" />
        <nav role="menubar" className="navbar-top-menu">
          <ul role="menu" onClick={(e) => handlePage(e.target)}>
            <li role="none">
              <Link
                to="/"
                role="menuitem"
                tabIndex="1"
                className={`${currentPage === "Home" ? "active" : ""} link`}
              >
                Home
              </Link>
            </li>
            <li role="none">
              <Link
                to="/About"
                role="menuitem"
                tabIndex="2"
                className={`${currentPage === "About Us" ? "active" : ""} link`}
              >
                About Us
              </Link>
            </li>
            <li role="none">
              <Link
                to="/ContactUs"
                role="menuitem"
                tabIndex="3"
                className={`${
                  currentPage === "Contact Us" ? "active" : ""
                } link`}
              >
                Contact Us
              </Link>
            </li>
            <li role="none">
              <Link
                to="/Cart"
                role="menuitem"
                tabIndex="4"
                className={`${currentPage === "Store" ? "active" : ""} link`}
              >
                Store
              </Link>
            </li>
          </ul>
        </nav>
        <div className="navbar-right-side">
          <div className="navbar-right-side-btns top">
            <BtnsContainer setShowLogin={setShowLogin} />
          </div>
          <div className="hamburger-menu-sidebar-container">
            <button
              tabIndex="8"
              className={`hamburger-menu ${isHamActive ? "is-active" : ""}`}
              aria-label="toggle"
              onClick={() => {
                setIsHamActive(!isHamActive);
                document.body.classList.toggle("body-menu-scroll");
              }}
            >
              <span></span>
            </button>
            <nav
              role="menubar"
              className={`sidebar-menu ${isHamActive ? "is-active" : ""}`}
            >
              <ul role="menu" onClick={(e) => handlePage(e.target)}>
                <li role="none">
                  <Link
                    to="/"
                    role="menuitem"
                    tabIndex="1"
                    className={`${currentPage === "Home" ? "active" : ""} link`}
                  >
                    Home
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/About"
                    role="menuitem"
                    tabIndex="2"
                    className={`${
                      currentPage === "About Us" ? "active" : ""
                    } link`}
                  >
                    About Us
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/ContactUs"
                    role="menuitem"
                    tabIndex="3"
                    className={`${
                      currentPage === "Contact Us" ? "active" : ""
                    } link`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li role="none">
                  <Link
                    to="/Cart"
                    role="menuitem"
                    tabIndex="4"
                    className={`${
                      currentPage === "Store" ? "active" : ""
                    } link`}
                  >
                    Store
                  </Link>
                </li>
                <div className="navbar-right-side-btns sidebar-icon-btns">
                  <BtnsContainer setShowLogin={setShowLogin}/>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
