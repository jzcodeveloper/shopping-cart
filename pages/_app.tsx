import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import { CartProvider } from "../contexts/cart";
import Navbar from "../components/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Shopping Cart</title>
        <meta name="application-name" content="Shopping Cart" />
        <meta name="author" content="jzcodeveloper" />
        <meta name="creator" content="jzcodeveloper" />
        <meta name="keywords" content="e-commerce,e-shopping,products" />
        <meta
          name="description"
          content="An e-commerce application where you can see our products."
        />
      </Head>
      <CartProvider>
        <Navbar />
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
