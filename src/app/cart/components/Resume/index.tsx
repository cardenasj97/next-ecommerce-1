"use client";

import { CartItemType } from "@/app/components/Cart/types";
import { getCartData } from "@/app/components/Cart/utils";
import { prettyNumber } from "@/app/utils";
import React, { useEffect, useState } from "react";

type ResumeType = {
  cartItems: CartItemType[];
  totalAmount: number;
};

const Resume = () => {
  const [resume, setResume] = useState<ResumeType>({
    cartItems: [],
    totalAmount: 0,
  });
  const disabled = !resume.cartItems.length;

  useEffect(() => {
    const fetchCartData = () => {
      const { cartItems, totalAmount } = getCartData();
      setResume({
        cartItems,
        totalAmount,
      });
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
    <div className="flex-1 bg-white p-5 rounded-lg border border-solid h-fit">
      <h2 className="font-bold text-2xl mb-2">Resume</h2>

      <div className="flex flex-col gap-6">
        {resume.cartItems.map((item: CartItemType) => {
          return (
            <div key={item.id} className="flex justify-between text-gray-500">
              <span className="flex">
                <span className="inline-block max-w-60 overflow-hidden text-ellipsis mr-1">
                  {item.name}
                </span>
                x {item.quantity} units
              </span>

              <span>${prettyNumber(item.totalAmount)}</span>
            </div>
          );
        })}

        <div className="flex justify-between font-bold">
          <span>Total</span> <span>${prettyNumber(resume.totalAmount)}</span>
        </div>
        <button
          className={`rounded-lg bg-blue-400 py-3 px-6 text-white w-full ${
            disabled ? "cursor-not-allowed bg-gray-400" : ""
          }`}
          disabled={disabled}
        >
          Go to checkout
        </button>
      </div>
    </div>
  );
};

export default Resume;
