import { getCartData } from "@/app/components/Cart/utils";
import React from "react";
import Product from "./Product";

const Products = () => {
  const { cartItems } = getCartData();

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
