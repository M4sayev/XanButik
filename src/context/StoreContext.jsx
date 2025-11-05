import { useState, createContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DEFAULT_PRICE_RANGE_MAX,
  DEFAULT_PRICE_RANGE_MIN,
  DEFAULT_RESET_FILTER,
  DEFAULT_SORT,
} from "../constants/constants";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

function StoreContextProvider(props) {
  const [isHamActive, setIsHamActive] = useState(false);
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

  const navigate = useNavigate();
  const [filters, setFilters] = useState(DEFAULT_RESET_FILTER);

  // current product for the product page
  const [currentProduct, setCurrentProduct] = useState(() => {
    const storedProduct = localStorage.getItem("currentProduct");
    return storedProduct ? JSON.parse(storedProduct) : null;
  });

  // retrieve wishlist items from localStorage
  const [wishListItems, setWishListItems] = useState(() => {
    const products = localStorage.getItem("wishlistItems");
    return products ? JSON.parse(products) : [];
  });

  // handle add to wishlist
  function handleAddToWishlist(newWishListItem, isInTheWishlist) {
    let notify = () => toast.success("Item added to the wishlist");
    if (isInTheWishlist) {
      notify = () => toast.error("The item is already in the wishlist.");
    } else {
      setWishListItems((prev) => [...prev, newWishListItem]);
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify([...wishListItems, newWishListItem])
      );
    }
    notify();
  }

  // retrieve cart items from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const items = localStorage.getItem("cartItems");
    return items ? JSON.parse(items) : [];
  });

  // bought Coupons
  const [boughtCoupons, setBoughtCoupons] = useState(() => {
    const storedBoughtCoupons = localStorage.getItem("boughtCoupons");
    return storedBoughtCoupons ? JSON.parse(storedBoughtCoupons) : [];
  });

  // handle add to cart
  const addToCart = (item) => {
    const notify = () => toast.success("Item added to cart");
    setCartItems((prev) => {
      const foundProduct = prev.find((cartItem) => cartItem.id === item.id);

      // Remove the item from the wishlist
      const newItems = wishListItems.filter(
        (wishlistItem) => wishlistItem.productId !== item.id
      );
      setWishListItems(newItems);
      localStorage.setItem("wishlistItems", JSON.stringify(newItems));

      let updatedCart;
      if (
        !foundProduct ||
        foundProduct.currentSize !== item.currentSize ||
        foundProduct.currentColor !== item.currentColor
      ) {
        updatedCart = [
          ...prev,
          {
            ...item,
            count: 1,
          },
        ];
      } else {
        updatedCart = prev.map((cartItem) =>
          cartItem.id === item.id
            ? {
                ...cartItem,
                count: cartItem.count + 1,
              }
            : cartItem
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
      return updatedCart;
    });
    notify();
  };

  const routePageMap = {
    "/": "Home",
    "/About": "About Us",
    "/Testimonials": "About Us",
    "/ContactUs": "Contact Us",
    "/Store": "Store",
    "/Store/ProductPage": "Store",
  };

  function openProductPage(e, productData = {}) {
    if (
      e.target.closest("button") ||
      e.target.closest(".product-add-to-cart") ||
      e.target.closest(".selectors-dropdown")
    ) {
      return;
    }

    setCurrentProduct(productData);
    navigate("/Store/ProductPage");
    window.scrollTo({
      top: 64,
    });
    localStorage.setItem("currentProduct", JSON.stringify(productData));
  }

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
    openProductPage,
    addToCart,
    cartItems,
    setCartItems,
    isHamActive,
    setIsHamActive,

    boughtCoupons,
    setBoughtCoupons,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
