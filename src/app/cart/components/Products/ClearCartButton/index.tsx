import React from "react";

const ClearCartButton = () => {
  const handleClear = () => {
    localStorage.removeItem("cart");
    window.dispatchEvent(new Event("storageUpdated"));
  };

  return (
    <button
      onClick={handleClear}
      className="rounded-lg py-1 px-6 text-red-400 border border-red-400"
    >
      Clear cart
    </button>
  );
};

export default ClearCartButton;
