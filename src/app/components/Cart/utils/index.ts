import { CartItem } from "../types";

export const getCartData = () => {
  const cart = localStorage.getItem("cart");
  const cartItems: CartItem[] = cart ? JSON.parse(cart) : [];

  const totalQuantity = cartItems.reduce(
    (acc: number, curr: CartItem) => acc + curr.quantity,
    0
  );

  return {
    cartItems,
    totalQuantity,
  };
};
