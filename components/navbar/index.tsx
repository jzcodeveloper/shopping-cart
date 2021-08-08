import React, { useCallback } from "react";
import Link from "next/link";
import CartIcon from "../icons/cart";
import Cart from "../cart";
import { selectCartItemsCount } from "../../contexts/cart/selectors";
import { useCartSelector, useCartDispatch } from "../../contexts/cart";

function Navbar() {
  const actions = useCartDispatch();
  const itemsCount = useCartSelector(selectCartItemsCount);

  const onClick = useCallback(() => actions.toggleCart(), [actions]);

  return (
    <div className="flex justify-between bg-indigo-800 py-6 px-8 text-white shadow-lg relative">
      <Link href="/" passHref={true}>
        <h2 className="text-lg cursor-pointer">Shopping Cart</h2>
      </Link>

      <div className="relative cursor-pointer" onClick={onClick}>
        <CartIcon className="h-8 w-8 inline-block" />
        <div className="absolute top-2 right-0 bottom-0 left-0 flex justify-center items-center text-xs">
          {itemsCount}
        </div>
      </div>

      <Cart />
    </div>
  );
}

export default Navbar;
