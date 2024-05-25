"use client";

import Image from "next/image";
import React from "react";
import { getCartData } from "../components/Cart/utils";
import { ProductProps, ProductType } from "./types";
import { CartItemType } from "../components/Cart/types";
import useSound from "use-sound";

const Product = ({ id, image, name, price }: ProductProps) => {
  const [playActive] = useSound("/assets/sounds/ding-1.mp3", { volume: 0.25 });

  const handleAdd = () => {
    const { cartItems } = getCartData();

    // check if product is already in the cart
    const isExistingProduct = cartItems.find(
      (item: ProductType) => item.id === id
    );

    // Reproduce `ding` sound
    playActive();

    if (!isExistingProduct) {
      // Add the new product to the cart
      const newProduct = {
        id,
        image,
        name,
        price,
        quantity: 1,
        totalAmount: price,
      };

      localStorage.setItem("cart", JSON.stringify([...cartItems, newProduct]));

      // Make sure storage updates are tracked
      window.dispatchEvent(new Event("storageUpdated"));
      return;
    }

    // Increase the quantity of the existing product
    const updatedCartItems = cartItems.map((item: CartItemType) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
            totalAmount: item.totalAmount + item.price,
          }
        : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    // Make sure storage updates are tracked
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <div className="bg-white p-5 rounded-lg flex flex-col border border-solid">
      <div className="flex justify-center">
        <Image src={image} alt={name} width={80} height={80} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="font-bold text-xl">${price.toFixed(2)}</div>
          <div>{name}</div>
        </div>
        <button
          onClick={handleAdd}
          className="rounded-lg bg-blue-400 py-1 px-6 text-white"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
