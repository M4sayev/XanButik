import React, { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const StoreContext = createContext(null); 

const DEFAULT_SORT = "Recommended";
const DEFAULT_RESET_FILTER = {
        "size": [],
        "productType": [],
        "color": [],
        "fit": [],
        "sleeveLength": [],
        "material": [],
        "design": [],
        "season": [],
        "neckline": [],
        "style": []
    };
const DEFAULT_PRICE_RANGE_MIN = 0;
const DEFAULT_PRICE_RANGE_MAX = 1500;

function StoreContextProvider(props) {
    const [ showLogin, setShowLogin ] = useState(false);
    const [currentPage, setCurrentPage] = useState(() => {
        if (!sessionStorage.getItem("menu")) return "Home";
        return sessionStorage.getItem("menu");
    });
    const location = useLocation();
    const [sortOptions, setSortOptions] = useState(DEFAULT_SORT);
    const [priceRange, setPriceRange] = useState([DEFAULT_PRICE_RANGE_MIN, DEFAULT_PRICE_RANGE_MAX]);

    const [filters, setFilters] = useState(DEFAULT_RESET_FILTER)

    const routePageMap = {
        "/": "Home",
        "/About": "About Us",
        "/Testimonials": "About Us",
        "/ContactUs": "Contact Us",
        "/Store": "Store"
    };

    useEffect(() => {
        const page = routePageMap[location.pathname] || "Other";
        setCurrentPage(page);
    }, [location]); 

    useEffect(() => {
        sessionStorage.setItem("menu", currentPage);
    }, [currentPage]);

    function handleAnimation(inView) {
        return inView ? "animate-in" : "";
    }

    function calculateDiscountPrice(price, discountPercent) {
        return price * (1 - (discountPercent || 0) / 100);
    }

    const contextValue = {
        currentPage,
        setCurrentPage,
        showLogin,
        setShowLogin,
        handleAnimation,
        sortOptions,
        setSortOptions,
        DEFAULT_SORT,
        filters,
        setFilters,
        calculateDiscountPrice,
        priceRange,
        setPriceRange,
        DEFAULT_PRICE_RANGE_MIN,
        DEFAULT_PRICE_RANGE_MAX
    };

  return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider;
