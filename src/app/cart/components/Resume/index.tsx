import { CartItemType } from "@/app/components/Cart/types";
import { getCartData } from "@/app/components/Cart/utils";
import React from "react";

const Resume = () => {
  const { cartItems, totalAmount } = getCartData();

  return (
    <div className="flex-1 bg-white p-5 rounded-lg border border-solid h-fit">
      <h2 className="font-bold text-2xl mb-2">Resume</h2>

      <div className="flex flex-col gap-6">
        {cartItems.map((item: CartItemType) => {
          return (
            <div key={item.id} className="flex justify-between text-gray-500">
              <span className="text text-wrap colum">
                {item.name} x {item.quantity}
              </span>

              <span>${item.totalAmount.toFixed(2)}</span>
            </div>
          );
        })}

        <div className="flex justify-between font-bold">
          <span>Total</span> <span>${totalAmount.toFixed(2)}</span>
        </div>
        <button className="rounded-lg bg-blue-400 py-3 px-6 text-white w-full">
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default Resume;
