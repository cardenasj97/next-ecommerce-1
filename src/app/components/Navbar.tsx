import React from "react";
import CartButton from "./Cart/CartButton";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-200">
      <div className="flex justify-between py-3 pl-4 pr-6 items-center max-w-screen-2xl m-auto">
        <Link href="/" title="Go to the home page">
          <h1 className="font-bold text-xl sm:text-3xl">Juan's Store</h1>
        </Link>
        <CartButton />
      </div>
    </nav>
  );
};

export default Navbar;
