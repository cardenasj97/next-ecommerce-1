"use client";

import { getCartData } from "@/app/components/Cart/utils";
import React, { useEffect, useState } from "react";
import Product from "./Product";
import { CartItemType } from "@/app/components/Cart/types";

const Products = () => {
  const [cartItems, setCartItems] = useState<CartItemType[]>([]);

  useEffect(() => {
    const { cartItems } = getCartData();
    setCartItems(cartItems);
  }, []);

  return (
    <div className="basis-2/3">
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
