import React, { useCallback, useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { CartItem } from "../../contexts/cart/types";
import { useCartDispatch } from "../../contexts/cart";
import CloseIcon from "../icons/close";
import ChevronUpIcon from "../icons/chevron-up";
import ChevronDownIcon from "../icons/chevron-down";

interface Props {
  item: CartItem;
}

function CheckoutItem({ item }: Props) {
  const actions = useCartDispatch();

  const itemTotal = useMemo(
    () => (item.quantity * parseFloat(item.price)).toFixed(2),
    [item.quantity, item.price]
  );

  const clearItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => actions.clearItem(item),
    [item, actions]
  );

  const addItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => actions.addItem(item),
    [item, actions]
  );

  const removeItem = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => actions.removeItem(item),
    [item, actions]
  );

  return (
    <div className="flex flex-col md:flex-row flex-1 items-center border border-indigo-800 mb-5 md:mb-0 md:border-t-0 md:border-l-0 md:border-r-0 md:border-b-2 rounded md:rounded-none p-5 text-center">
      <div className="relative border h-32 w-32">
        <Image src={item.cover} alt={item.name} layout="fill" />
      </div>

      <div className="flex-1 p-4">{item.name}</div>

      <div className="w-full md:flex-1 flex justify-between items-center">
        <div className="w-24">
          <button className="block mx-auto" onClick={addItem}>
            <ChevronUpIcon className="h-8 w-8" />
          </button>
          {item.quantity}
          <button className="block mx-auto" onClick={removeItem}>
            <ChevronDownIcon className="h-8 w-8" />
          </button>
        </div>

        <div className="text-xl md:text-base flex-1 text-indigo-800">
          ${itemTotal}
        </div>

        <div className="w-24 flex justify-center items-center">
          <button onClick={clearItem}>
            <CloseIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </div>
  );
}

CheckoutItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

function areEqual(prevProps: Props, nextProps: Props): boolean {
  return prevProps.item.quantity === nextProps.item.quantity;
}

export default React.memo(CheckoutItem, areEqual);
