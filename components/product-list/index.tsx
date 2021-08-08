import React from "react";
import PropTypes from 'prop-types'
import ProductItem from "../product-item";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5 p-5">
      {products.map((product: Product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default ProductList;
