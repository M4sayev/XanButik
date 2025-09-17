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

  // Dummy product
  const [currentProduct, setCurrentProduct] = useState({
    id: 40,
    name: "Brown Striped Shirt",
    price: 20,
    discountPercent: 0,
    img: [
      black_down_jacket_one,
      black_down_jacket_two,
      black_down_jacket_three,
    ],
    category: "Shirts",
    description:
      "Upgrade your wardrobe with the UrbanVibe Classic Tee! Crafted from ultra-soft, breathable cotton, this shirt delivers all-day comfort without sacrificing style. Its versatile fit makes it perfect for layering or wearing solo, whether you’re hitting the streets, the office, or just lounging at home. Available in a range of colors to",
    productType: ["Outerwear"],
    fit: ["Regular"],
    color: ["Gray"],
    size: ["XS", "M", "L"],
    sleeveLength: ["Short Sleeve"],
    design: ["Striped"],
    neckline: ["Band Neck"],
    season: ["Summer", "Spring"],
    isNewArrival: true,
    releaseDate: "2025-08-26",
    style: ["Casual"],
    material: ["Linen"],
  });

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
