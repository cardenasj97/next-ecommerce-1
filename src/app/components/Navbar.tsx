import React from "react";
import CartButton from "./Cart/CartButton";

const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <div className="flex justify-between py-3 pl-4 pr-6 items-center max-w-screen-2xl m-auto">
        <h1 className="font-bold text-3xl">Next Ecommerce App</h1>
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
