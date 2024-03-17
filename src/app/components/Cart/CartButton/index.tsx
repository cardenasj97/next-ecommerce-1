"use client";

import React, { useEffect, useState } from "react";
import { getCartData } from "../utils";
import Link from "next/link";

const CartButton = () => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const performCartCalculations = () => {
      const { totalQuantity } = getCartData();
      setQuantity(totalQuantity);
    };
    performCartCalculations();

    // Listen for changes in the cart to refresh the ui
    window.addEventListener("storageUpdated", performCartCalculations);

    // Run this to prevent memory leaks
    return () => {
      window.removeEventListener("storageUpdated", performCartCalculations);
    };
  }, []);

  return (
    <Link href="cart" className="text-3xl relative" title="Go to the cart page">
      🛒
      {quantity > 0 && (
        <span className="text-xs bg-red-500 text-white rounded-full px-2 absolute -right-6 -top-2">
          {quantity}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
