import React from "react";
import Link from "next/link";
import CartIcon from "../icons/cart";
import { selectCartItemsCount } from "../../contexts/cart/selectors";
import { useCartSelector } from "../../contexts/cart";

function Navbar() {
  const itemsCount = useCartSelector(selectCartItemsCount);

  return (
    <div className="flex justify-between bg-indigo-800 py-6 px-8 text-white shadow-lg">
      <h1 className="text-lg">
        <Link href="/">Shopping Cart</Link>
      </h1>

      <div className="relative">
        <CartIcon className="h-8 w-8 inline-block" />
        <div className="absolute top-2 right-0 bottom-0 left-0 flex justify-center items-center text-xs">
          {itemsCount}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
