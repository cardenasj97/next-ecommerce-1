import { CartItemType } from "@/app/components/Cart/types";
import { getCartData } from "@/app/components/Cart/utils";
import { ProductType } from "@/app/home/types";
import { prettyNumber } from "@/app/utils";
import Image from "next/image";
import React from "react";

type ProductProps = CartItemType;

const Product = ({ id, image, name, price, quantity }: ProductProps) => {
  const handleDelete = () => {
    const { cartItems } = getCartData();

    const updatedCartItems = cartItems.filter(
      (item: ProductType) => item.id !== id
    );

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <div className="gap-6 bg-white p-5 rounded-lg flex flex-row border border-solid relative">
      <div className="flex justify-center">
        <Image src={image} alt={name} width={80} height={80} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="font-bold text-xl">${prettyNumber(price)}</div>
          <div>{name}</div>
          <div>Quantity: {quantity}</div>
        </div>
      </div>
      <button onClick={handleDelete} className="absolute right-5">
        ❌
      </button>
    </div>
  );
};

export default Product;
