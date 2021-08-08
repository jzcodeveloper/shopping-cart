import React from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { CartItem } from "../../contexts/cart/types";

interface Props {
  item: CartItem;
}

function CartListItem({ item }: Props) {
  return (
    <div className="flex">
      <div className="w-1/4 relative border">
        <Image
          src={item.cover}
          alt={item.name}
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className="w-3/4 px-3 text-black">
        <p className="truncate">{item.name}</p>
        <p>
          {item.quantity} x ${item.price}
        </p>
      </div>
    </div>
  );
}

CartListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default CartListItem;
