import React, { useContext, useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
import BtnsContainer from "./BtnsContainer.jsx";
import MenuItems from "./MenuItems.jsx";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [isHamActive, setIsHamActive] = useState(false);
  const { currentPage, setCurrentPage } = useContext(StoreContext);
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);

  const navigate = useNavigate();

  function handlePage(e) {
    const link = e.target.closest("a");
    if (!link) return;

    const pageName = link.textContent.trim();
    if (currentPage !== pageName) 
      setCurrentPage(pageName);
  }

  function handleLogoClick() {
    navigate("/");
    setCurrentPage("Home");
  }

  function toggleHamburger() {
    setIsHamActive((prev) => !prev);
    document.body.classList.toggle("body-menu-scroll")
  }

  // Trap focus inside the sideBar when its open
  useEffect(() => {
    if (!isHamActive || !sidebarRef.current) return;

    const focusableSelectors = [
      'a[href]',
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ];

    const focusableElements = sidebarRef.current.querySelectorAll(focusableSelectors.join(","));
    const firstEl = hamburgerRef.current;
    const lastEl = focusableElements[focusableElements.length - 1];

    // Focus the first element when sidebar opens
    firstEl?.focus();

    function handleKeyDown(e) {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isHamActive])

  return (
    <div className="navigation">
      <div className="navbar">
        <img
          tabIndex={0}
          onClick={handleLogoClick}
          src={assets.logo_no_frame}
          alt="Xan Butik Logo"
          className="logo"
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
            <BtnsContainer />
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
                <BtnsContainer />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
