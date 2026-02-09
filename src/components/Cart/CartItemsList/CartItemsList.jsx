import { useContext } from "react";
import "./CartItemsList.css";
import { calculateDiscountPrice, formatPrice } from "../../../utils/utils";
import { StoreContext } from "../../../context/StoreContext";
import CartItemControls from "./CartItemControls";
import CartItemInfo from "./CartItemInfo";

function CartItemsList({ cartItems, setCartItems }) {
  const { openProductPage } = useContext(StoreContext);

  function handleDeleteCartItem(id, currentColor, currentSize) {
    const newItems = cartItems.filter(
      (item) =>
        item.id !== id ||
        item.currentColor !== currentColor ||
        item.currentSize !== currentSize,
    );
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  }

  function handleIncreaseItemCount(id, currentColor, currentSize) {
    const newItems = cartItems.map((item) => {
      if (
        item.id === id &&
        item.currentColor === currentColor &&
        item.currentSize === currentSize
      ) {
        return { ...item, count: item.count + 1 };
      }
      return item;
    });
    setCartItems(newItems);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
  }

  function handleDecreaseItemCount(
    id,
    currentCount,
    currentColor,
    currentSize,
  ) {
    if (currentCount <= 1) {
      handleDeleteCartItem(id, currentColor, currentSize);
      return;
    } else {
      const newItems = cartItems.map((item) => {
        if (
          item.id === id &&
          item.currentColor === currentColor &&
          item.currentSize === currentSize
        ) {
          return { ...item, count: item.count - 1 };
        }
        return item;
      });
      setCartItems(newItems);
      localStorage.setItem("cartItems", JSON.stringify(newItems));
    }
  }

  return (
    <ul className="cart-items-list" aria-label="Cart Items List">
      {cartItems.map((item) => {
        const {
          id,
          img,
          name,
          currentSize,
          count,
          price,
          discountPercent,
          currentColor,
          reviews,
          description,
          size,
          color,
        } = item;
        const totalPrice = calculateDiscountPrice(price, discountPercent);
        return (
          <li
            onClick={(e) =>
              openProductPage(e, {
                id,
                name,
                price,
                discountPercent,
                img,
                size,
                color,
                reviews,
                description,
              })
            }
            tabIndex={0}
            key={id + currentColor + currentSize}
            className="cart-item"
          >
            <CartItemInfo
              preview={img[0]}
              name={name}
              currentSize={currentSize}
              currentColor={currentColor}
              totalPrice={totalPrice}
            />
            <CartItemControls
              handleDecreaseItemCount={handleDecreaseItemCount}
              handleDeleteCartItem={handleDeleteCartItem}
              name={name}
              id={id}
              currentColor={currentColor}
              currentSize={currentSize}
              count={count}
              handleIncreaseItemCount={handleIncreaseItemCount}
              totalPrice={totalPrice}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default CartItemsList;
