import { CartItemType } from "@/app/components/Cart/types";
import { getCartData } from "@/app/components/Cart/utils";
import { ProductType } from "@/app/home/types";
import { prettyNumber } from "@/app/utils";
import Image from "next/image";
import React, { useState } from "react";

type ProductProps = CartItemType;

const Product = ({ id, image, name, price, quantity }: ProductProps) => {
  const [quantityValue, setQuantity] = useState(quantity);
  const { cartItems } = getCartData();

  const handleDelete = () => {
    const updatedCartItems = cartItems.filter(
      (item: ProductType) => item.id !== id
    );

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) return;

    const newQuantity = parseInt(e.currentTarget.value);

    // Update the quantity of the existing product
    const updatedCartItems = cartItems.map((item: CartItemType) =>
      item.id === id
        ? {
            ...item,
            quantity: newQuantity,
            totalAmount: item.totalAmount + item.price,
          }
        : item
    );

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setQuantity(newQuantity);

    // Make sure storage updates are tracked
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <div className="gap-6 bg-white p-5 rounded-lg flex flex-col sm:flex-row border border-solid relative">
      <div className="flex justify-center">
        <Image src={image} alt={name} width={80} height={80} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="font-bold text-xl">${prettyNumber(price)}</div>
          <div>{name}</div>
          <label>
            Quantity:{" "}
            <input
              className="border border-solid border-black rounded-lg w-20 p-2"
              type="number"
              name="quantity"
              min={1}
              value={quantityValue}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      <button onClick={handleDelete} className="absolute right-5">
        ❌
      </button>
    </div>
  );
};

export default Product;
