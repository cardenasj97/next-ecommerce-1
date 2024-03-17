import { CartItemType } from "../types";

export const getCartData = () => {
  const cart = localStorage.getItem("cart");
  const cartItems: CartItemType[] = cart ? JSON.parse(cart) : [];

  const totals = cartItems.reduce(
    (acc, curr) => {
      acc.totalQuantity += curr.quantity;
      acc.totalAmount += curr.totalAmount;
      return acc;
    },
    { totalQuantity: 0, totalAmount: 0 }
  );

  return {
    cartItems,
    totalQuantity: totals.totalQuantity,
    totalAmount: totals.totalAmount,
  };
};
