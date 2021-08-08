import React from "react";
import PropTypes from "prop-types";
import { CartMap, CartItem } from "../../../contexts/cart/types";
import CartListItem from "../../cart-item";

interface Props {
  items: CartMap;
}

function CartList({ items }: Props) {
  return (
    <div className="flex flex-col gap-5">
      {Object.values(items).map((item: CartItem) => (
        <CartListItem key={item.id} item={item} />
      ))}
    </div>
  );
}

CartList.propTypes = {
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

export default CartList;
