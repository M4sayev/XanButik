import { useContext, useMemo } from "react";
import { StoreContext } from "../context/StoreContext";

export function useWishlist(productId) {
  const { wishListItems, handleAddToWishlist } = useContext(StoreContext);

  const isInWishlist = useMemo(
    () => wishListItems.some((item) => item.productId === productId),
    [wishListItems, productId]
  );

  function toggleWishlist(product) {
    handleAddToWishlist(product, isInWishlist);
  }

  return { isInWishlist, toggleWishlist };
}
