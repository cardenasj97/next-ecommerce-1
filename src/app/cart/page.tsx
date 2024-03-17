import React from "react";
import Products from "./components/Products";
import Resume from "./components/Resume";

const Cart = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 flex-wrap">
      <Products />
      <Resume />
    </div>
  );
};

export default Cart;
