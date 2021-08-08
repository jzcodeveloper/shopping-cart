import React, { useCallback } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import { Product } from "../../contexts/cart/types";
import { useCart } from "../../contexts/cart";
import CartIcon from "../icons/cart";

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  const [, actions] = useCart();

  const onClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    actions.addItem(product);
  }, []);

  return (
    <div className="border border-indigo-800 shadow-lg relative rounded group">
      <div className="h-80 relative">
        <Image
          src={product.cover}
          alt={product.name}
          layout="fill"
          objectFit="cover"
        />

        <div className="flex flex-col justify-center items-center absolute top-0 right-0 bottom-0 left-0 bg-opacity-0 group-hover:bg-opacity-20 bg-indigo-800 transition">
          <button
            className="flex justify-center items-center opacity-0 group-hover:opacity-100 rounded-lg text-white bg-black border bg-opacity-80 p-2 w-3/4"
            onClick={onClick}
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="p-5 bg-indigo-800 text-white">
        <p className="truncate">{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
};

function areEqual(prevProps: Props, nextProps: Props): boolean {
  return prevProps.id === nextProps.id;
}

export default React.memo(ProductItem, areEqual);
