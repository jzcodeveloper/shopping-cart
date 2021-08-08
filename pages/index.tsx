import Head from "next/head";
import PropTypes from "prop-types";
import { Product } from "../contexts/cart/types";
import { getProducts } from "../api/products";
import { REVALIDATE_TIME } from "../utils/constants";
import ProductList from "../components/product-list";

interface Props {
  products: Product[];
}

function Home({ products }: Props) {
  return (
    <>
      <Head>
        <title>Shopping Cart - All Products</title>
        <meta
          name="description"
          content="Browse all our products and add them to your cart."
        />
      </Head>
      <ProductList products={products} />
    </>
  );
}

Home.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export async function getStaticProps() {
  const products: Product[] = await getProducts();

  return {
    props: { products },
    revalidate: REVALIDATE_TIME,
    notFound: !products.length,
  };
}

export default Home;
