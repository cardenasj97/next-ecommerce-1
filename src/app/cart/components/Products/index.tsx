"use client";

import { getCartData } from "@/app/components/Cart/utils";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { CartItemType } from "@/app/components/Cart/types";
import ClearCartButton from "./ClearCartButton";
import Link from "next/link";

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
    <div className="flex-1 md:basis-2/4 gap-2 flex flex-col">
      <div className="flex justify-between text-center">
        <h2 className="font-bold text-2xl">Cart</h2>
        {cartItems.length > 0 && <ClearCartButton />}
      </div>
      <div>
        <div className="flex gap-6 flex-col">
          {cartItems.length ? (
            cartItems.map((item) => {
              return <Product key={item.id} {...item} />;
            })
          ) : (
            <Link href="/">Please add some items to your cart!</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
