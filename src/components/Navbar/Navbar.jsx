import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import BtnsContainer from "./BtnsContainer.jsx";
import MenuItems from "./MenuItems.jsx";
import { useNavigate } from "react-router-dom";
import { useFocusTrap } from "../../hooks/useTrapFocus.js";
import { useEscapeKey } from "../../hooks/useEscapeKey.js";

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function Navbar() {
  const { currentPage, setCurrentPage, isHamActive, setIsHamActive } =
    useContext(StoreContext);

  const logoRef = useRef(null);

  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navigate = useNavigate();

  function handlePage(e) {
    const link = e.target.closest("a");
    if (!link) return;

    const pageName = link.textContent.trim();
    if (currentPage !== pageName) setCurrentPage(pageName);
  }

  function handleLogoClick() {
    navigate("/");
    setCurrentPage("Home");
  }

  function toggleHamburger() {
    setIsHamActive((prev) => !prev);
  }

  // Trap focus inside the sideBar when its open
  useFocusTrap(sidebarRef, isHamActive, hamburgerRef);

  // Handle Escape key pressed
  useEscapeKey(() => setIsHamActive(false));

  useEffect(() => {
    if (sidebarRef.current) {
      if (!isHamActive) {
        sidebarRef.current.setAttribute("inert", "true");
      } else {
        sidebarRef.current.removeAttribute("inert");
      }
    }
  }, [isHamActive]);

  function navigateTo(path) {
    navigate(path);
    setIsHamActive(false);
  }

  useEffect(() => {
    const sidebarEl = sidebarRef.current;
    if (isHamActive && sidebarEl) {
      document.body.classList.add("body-menu-scroll");
    } else if (sidebarEl) {
      document.body.classList.remove("body-menu-scroll");
    }

    return () => document.body.classList.remove("body-menu-scroll");
  }, [isHamActive]);

  return (
    <div className="navigation">
      <div className="navbar">
        <img
          tabIndex={0}
          onClick={handleLogoClick}
          src={assets.logo_no_frame}
          alt="Xan Butik Logo"
          className="logo"
          ref={logoRef}
        />
        {/* Top menu links */}
        <nav className="navbar-top-menu" aria-label="Main navigation">
          <ul role="menubar" onClick={handlePage}>
            <MenuItems
              isHamActive={isHamActive}
              setIsHamActive={setIsHamActive}
              currentPage={currentPage}
            />
          </ul>
        </nav>

        {/* Rigth section - icons and hamburger */}
        <div className="navbar-right-side">
          <div className="navbar-right-side-btns top">
            <BtnsContainer navigateTo={navigateTo} />
          </div>
          <div className="hamburger-menu-sidebar-container">
            <button
              className={`hamburger-menu ${isHamActive ? "is-active" : ""}`}
              aria-label="toggle"
              aria-haspopup="true"
              aria-expanded={isHamActive}
              onClick={toggleHamburger}
              ref={hamburgerRef}
            >
              <span />
            </button>
            <nav
              className={`sidebar-menu ${isHamActive ? "is-active" : ""}`}
              aria-label="Sidebar navigation"
              aria-hidden={!isHamActive}
              ref={sidebarRef}
            >
              <ul role="menubar" onClick={handlePage}>
                <MenuItems
                  isHamActive={isHamActive}
                  setIsHamActive={setIsHamActive}
                  currentPage={currentPage}
                />
              </ul>
              <div className="navbar-right-side-btns sidebar-icon-btns">
                <BtnsContainer navigateTo={navigateTo} />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
