import Image from "next/image";
import React from "react";

type ProductProps = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

const Product = ({ image, name, price }: ProductProps) => {
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
        <button className="rounded-lg bg-blue-400 py-1 px-6 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
