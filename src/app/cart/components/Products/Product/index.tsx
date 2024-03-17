import { CartItemType } from "@/app/components/Cart/types";
import Image from "next/image";
import React from "react";

type ProductProps = CartItemType;

const Product = ({ image, name, price, quantity }: ProductProps) => {
  return (
    <div className="gap-6 bg-white p-5 rounded-lg flex flex-row border border-solid">
      <div className="flex justify-center">
        <Image src={image} alt={name} width={80} height={80} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="font-bold text-xl">${price.toFixed(2)}</div>
          <div>{name}</div>
          <div>Quantity: {quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Product;
