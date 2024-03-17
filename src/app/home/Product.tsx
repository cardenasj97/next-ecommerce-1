"use client";

import Image from "next/image";
import React from "react";
import { getCartData } from "../components/Cart/utils";

export type ProductType = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type ProductProps = ProductType;

const Product = ({ id, image, name, price }: ProductProps) => {
  const handleAdd = () => {
    const { cartItems } = getCartData();

    // check if product is already in the cart
    const isExistingProduct = cartItems.find(
      (item: ProductType) => item.id === id
    );

    if (!isExistingProduct) {
      // Add the new product to the cart
      const newProduct = {
        id,
        name,
        price,
        quantity: 1,
      };

      localStorage.setItem("cart", JSON.stringify([...cartItems, newProduct]));

      // Make sure storage updates are tracked
      window.dispatchEvent(new Event("storageUpdated"));
      return;
    }

    // Increase the quantity of the existing product
    const updatedCartItems = cartItems.map((item: any) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));

    // Make sure storage updates are tracked
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <div className="bg-white w-52 p-5 rounded-lg flex flex-col border border-solid">
      <div className="flex justify-center">
        <Image src={image} alt={name} width={80} height={80} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="font-bold text-xl">${price}</div>
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
