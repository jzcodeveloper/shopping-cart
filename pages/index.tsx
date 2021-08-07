import { Product } from "../contexts/cart/types";
import { getProducts } from "../api/products";
import { useCart } from "../contexts/cart";

interface Props {
  products: Product[];
}

function Home({ products }: Props) {
  const [state, actions] = useCart();

  return (
    <ul>
      {products.map((product: Product) => (
        <li key={product.id} onClick={() => actions.addItem(product)}>
          {product.name}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const products: Product[] = await getProducts();

  return {
    props: { products },
    revalidate: 60 * 60 * 24,
    notFound: !products.length,
  };
}

export default Home;
