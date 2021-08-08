import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { CartItem } from "../../contexts/cart/types";
import { useCartSelector, useCartDispatch } from "../../contexts/cart";
import { selectCartItemsTotal } from "../../contexts/cart/selectors";
import CheckoutItem from "../checkout-item";

interface Props {
  items: CartItem[];
}

function CheckoutItems({ items }: Props) {
  const actions = useCartDispatch();

  const itemsTotal = useCartSelector(selectCartItemsTotal);

  const clearItems = useCallback(() => actions.clearItems(), [actions]);

  return (
    <div className="w-full sm:w-5/6 sm:m-auto p-5 pb-20">
      <div className="hidden md:flex flex-col md:flex-row text-center border-b-2 border-indigo-800 p-5">
        <p className="w-32">Product</p>
        <p className="flex-1 px-4">Description</p>
        <div className="md:flex-1 flex">
          <p className="w-24">Quantity</p>
          <p className="flex-1">Price</p>
          <p className="w-24">Remove</p>
        </div>
      </div>

      {Object.values(items).map((item: CartItem) => (
        <CheckoutItem key={item.id} item={item} />
      ))}

      <div className="flex justify-between mt-5">
        {itemsTotal > 0 && (
          <button
            className="flex justify-center items-center text-white bg-red-700 rounded border bg-opacity-90 px-5 py-2 transition hover:bg-opacity-100"
            onClick={clearItems}
          >
            Clear Cart
          </button>
        )}

        <p className="flex-1 text-2xl uppercase text-right">
          <span className="font-normal">Total: </span>
          <span className="font-bold text-indigo-800">
            ${itemsTotal.toFixed(2)}
          </span>
        </p>
      </div>
    </div>
  );
}

CheckoutItems.propTypes = {
  items: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default CheckoutItems;
