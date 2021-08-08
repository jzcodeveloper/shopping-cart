import React from "react";
import { useCart } from "../../contexts/cart";

function Checkout() {
  const [state, actions] = useCart();

  return (
    <>
      <Head>
        <title>Shopping Cart - Checkout</title>
        <meta
          name="description"
          content="Review your selected products and process your payment."
        />
      </Head>
    </>
  );
}

export default Checkout;
