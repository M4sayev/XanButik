import { useRef, useEffect, useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const loginPopupRef = useRef(null);
  const { showLogin, setShowLogin } = useContext(StoreContext);
  const [showScrollTopBtn, setShowScrollTopBtn] = useState(false);

  function handleClickOutside(event) {
    if (
      loginPopupRef.current &&
      !loginPopupRef.current.contains(event.target)
    ) {
      setShowLogin(false);
    }
  }

  useEffect(() => {
    if (showLogin) {
      document.body.style.overflow = "hidden";
      window.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLogin]);

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
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Testimonials" element={<Testimonials />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Store" element={<Store />} />
          <Route path="/Wishlist" element={<Wishlist />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Store/ProductPage" element={<ProductPage />} />
          <Route path="/Wishlist" element={<Wishlist />} />
        </Routes>
        <ScrollToTop showScrollTopBtn={showScrollTopBtn} />
        <Footer />
      </div>
    </>
  );
}

export default App;
