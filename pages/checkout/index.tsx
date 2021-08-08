import React from "react";
import Head from "next/head";
import { useCartSelector } from "../../contexts/cart";
import { selectCartItems } from "../../contexts/cart/selectors";
import CheckoutItems from '../../components/checkout-items'

function Checkout() {
  const items = useCartSelector(selectCartItems);

  return (
    <>
      <Head>
        <title>Shopping Cart - Checkout</title>
        <meta
          name="description"
          content="Review your selected products and process your payment."
        />
      </Head>
      <CheckoutItems items={items} />
    </>
  );
}

export default Checkout;
