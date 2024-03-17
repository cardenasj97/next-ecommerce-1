"use client";

import { getCartData } from "@/app/components/Cart/utils";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { CartItemType } from "@/app/components/Cart/types";

const Products = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const fetchCartData = () => {
      const { cartItems } = getCartData();
      setCartItems(cartItems);
    };
    fetchCartData();

    // Listen for changes in the cart to refresh the ui
    window.addEventListener("storageUpdated", fetchCartData);

    // Run this to prevent memory leaks
    return () => {
      window.removeEventListener("storageUpdated", fetchCartData);
    };
  }, []);

  return (
    <div className="flex-1 md:basis-2/3">
      <h2 className="font-bold text-2xl mb-2">Cart</h2>
      <div>
        <div className="flex gap-6 flex-col">
          {cartItems.length &&
            cartItems.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
