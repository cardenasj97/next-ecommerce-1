import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-200">
      <div className="flex justify-between py-3 px-4 items-center max-w-screen-2xl m-auto">
        <h1 className="font-bold text-3xl">Next Ecommerce App</h1>
        <button className="text-3xl" title="Go to the cart">
          🛒
        </button>
      </div>
    </div>
  );
};

export default Navbar;
