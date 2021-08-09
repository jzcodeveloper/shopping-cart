import React from "react";
import Link from "next/link";
import classNames from "classnames";
import {
  selectCartItems,
  selectCartExpanded,
} from "../../contexts/cart/selectors";
import { useCartSelector } from "../../contexts/cart";
import CartItems from "../cart-items";

function Cart() {
  const items = useCartSelector(selectCartItems);
  const expanded = useCartSelector(selectCartExpanded);

  return (
    <div
      className={classNames(
        "absolute top-16 right-6 left-6 flex flex-col justify-between sm:left-auto w-auto sm:w-80 h-96 border border-indigo-800 shadow-lg bg-white z-10 p-5 rounded origin-top-right transform transition",
        { "zoom-in": expanded, "zoom-out": !expanded }
      )}
    >
      <div className="overflow-y-auto">
        <CartItems items={items} />
      </div>
      <Link href="/checkout" passHref={true}>
        <button className="mt-5 flex justify-center items-center w-full text-white bg-black border bg-opacity-70 p-2 w-3/4 transition hover:bg-opacity-80">
          Go To Checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;
