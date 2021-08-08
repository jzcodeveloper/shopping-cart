import _ from "lodash";
import { CartMap, Product } from "./types";

/**
 * @param {CartMap} cart
 * @param {Product} item
 * @returns {CartMap}
 */
export const addCartItem = (cart: CartMap, item: Product) => {
  const newCart = _.cloneDeep(cart);

  if (newCart[item.id]) {
    newCart[item.id].quantity++;
  } else {
    newCart[item.id] = Object.assign({}, item, { quantity: 1 });
  }

  return newCart;
};

/**
 * @param {CartMap} cart
 * @param {Product} item
 * @returns {CartMap}
 */
export const removeCartItem = (cart: CartMap, item: Product) => {
  const newCart = _.cloneDeep(cart);

  if (newCart[item.id].quantity <= 1) {
    delete newCart[item.id];
  } else {
    newCart[item.id].quantity--;
  }

  return newCart;
};

/**
 * @param {CartMap} cart
 * @param {Product} item
 * @returns {CartMap}
 */
export const clearCartItem = (cart: CartMap, item: Product) => {
  const newCart = _.cloneDeep(cart);

  delete newCart[item.id];

  return newCart;
};