import React from "react";
import CartButton from "./Cart/CartButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <div className="flex justify-between py-3 pl-4 pr-6 items-center max-w-screen-2xl m-auto">
        <Link href="/" title="Go to the home page">
          <h1 className="font-bold text-3xl">Next Ecommerce App</h1>
        </Link>
        <CartButton />
      </div>
    </div>
  );
};

export default Navbar;
