import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  DEFAULT_PRICE_RANGE_MAX,
  DEFAULT_PRICE_RANGE_MIN,
  DEFAULT_RESET_FILTER,
  DEFAULT_SORT,
} from "../constants/constants";
import { toast } from "react-toastify";

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
  const [currentProduct, setCurrentProduct] = useState(() => {
    const storedProduct = localStorage.getItem("currentProduct");
    return storedProduct ? JSON.parse(storedProduct) : null;
  });

  // wishlistItems
  const [wishListItems, setWishListItems] = useState(() => {
    const products = localStorage.getItem("wishlistItems");
    return products ? JSON.parse(products) : [];
  });

  useEffect(() => console.log({ wishListItems }), [wishListItems]);

  // handle add to wishlist

  function handleAddToWishlist(newWishListItem) {
    const notify = () => toast.success("Item added to the wishlist");
    setWishListItems((prev) => [...prev, newWishListItem]);
    localStorage.setItem(
      "wishlistItems",
      JSON.stringify([...wishListItems, newWishListItem])
    );
    notify();
  }

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
    wishListItems,
    setWishListItems,
    handleAddToWishlist,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
