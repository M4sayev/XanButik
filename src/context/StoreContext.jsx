import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_PRICE_RANGE_MAX,
  DEFAULT_PRICE_RANGE_MIN,
  DEFAULT_RESET_FILTER,
  DEFAULT_SORT,
} from "../constants/constants";

// dummy image
import black_down_jacket_one from "../assets/top/jackets/black_down_jacket/black_down_jacket_one.jpg";
import black_down_jacket_two from "../assets/top/jackets/black_down_jacket/black_down_jacket_two.jpg";
import black_down_jacket_three from "../assets/top/jackets/black_down_jacket/black_down_jacket_three.jpg";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [currentPage, setCurrentPage] = useState(() => {
    if (!sessionStorage.getItem("menu")) return "Home";
    return sessionStorage.getItem("menu");
  });
  const location = useLocation();
  const [sortOptions, setSortOptions] = useState(DEFAULT_SORT);
  const [priceRange, setPriceRange] = useState([
    DEFAULT_PRICE_RANGE_MIN,
    DEFAULT_PRICE_RANGE_MAX,
  ]);

  const [filters, setFilters] = useState(DEFAULT_RESET_FILTER);

  // current product for the product page
  const [currentProduct, setCurrentProduct] = useState("");

  const routePageMap = {
    "/": "Home",
    "/About": "About Us",
    "/Testimonials": "About Us",
    "/ContactUs": "Contact Us",
    "/Store": "Store",
    "/Store/ProductPage": "Store",
  };

  useEffect(() => {
    const page = routePageMap[location.pathname] || "Other";
    setCurrentPage(page);
  }, [location]);

  useEffect(() => {
    sessionStorage.setItem("menu", currentPage);
  }, [currentPage]);

  const contextValue = {
    currentPage,
    setCurrentPage,
    showLogin,
    setShowLogin,
    sortOptions,
    setSortOptions,
    filters,
    setFilters,
    priceRange,
    setPriceRange,
    currentProduct,
    setCurrentProduct,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
