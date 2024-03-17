import { CartItemType } from "../types";

export const getCartData = () => {
  const cart = localStorage.getItem("cart");
  const cartItems: CartItemType[] = cart ? JSON.parse(cart) : [];

  const totalQuantity = cartItems.reduce(
    (acc: number, curr: CartItemType) => acc + curr.quantity,
    0
  );

  return {
    cartItems,
    totalQuantity,
  };
};
