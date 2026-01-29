import { useRef, useEffect, useContext, useState, useCallback } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import ContactUs from "./pages/ContactUs/ContactUs";
import Store from "./pages/Store/Store";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { StoreContext } from "./context/StoreContext";
import Testimonials from "./pages/Testimonials/Testimonials";
import ScrollToTop from "./components/ScrollTop/ScrollToTop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductPage from "./pages/ProductPage/ProductPage";
import Game from "./pages/Game/Game";

function App() {
  const location = useLocation();
  const loginPopupRef = useRef(null);
  const { showLogin, setShowLogin, isHamActive } = useContext(StoreContext);
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  // Hide Navbar Footer on Game page
  const hideNavFooter = location.pathname === "/Game";

  const handleClickOutside = useCallback(
    (event) => {
      if (
        loginPopupRef.current &&
        !loginPopupRef.current.contains(event.target)
      ) {
        setShowLogin(false);
      }
    },
    [setShowLogin],
  );

  const closeLoginPopup = useCallback(() => {
    document.body.classList.remove("body-menu-scroll");
    window.removeEventListener("mousedown", handleClickOutside);
    window.scrollTo({ top: 0 });
  }, [handleClickOutside]);

  useEffect(() => {
    if (showLogin && loginPopupRef.current) {
      document.body.classList.add("body-menu-scroll");
      window.addEventListener("mousedown", handleClickOutside);
    } else if (!isHamActive) {
      closeLoginPopup();
    }
    return () => !isHamActive && closeLoginPopup();
  }, [showLogin, isHamActive, handleClickOutside, closeLoginPopup]);

  useEffect(() => {
    function showTopBtn() {
      const offsetBoolean = window.pageYOffset > 500;
      setShowScrollTopBtn(offsetBoolean);
    }
    window.addEventListener("scroll", showTopBtn);
    return () => window.removeEventListener("scroll", showTopBtn);
  }, []);

  return (
    <>
      {showLogin ? <LoginPopup formRef={loginPopupRef} /> : <></>}
      <div className="app">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {!hideNavFooter && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Store/ProductPage" element={<ProductPage />} />
          <Route path="/Game" element={<Game />} />
        </Routes>
        <ScrollToTop showScrollTopBtn={showScrollTopBtn} />
        {!hideNavFooter && <Footer />}
      </div>
    </>
  );
}

export default App;
