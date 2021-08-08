import { createSelector, Selector, OutputSelector } from "reselect";
import { CartState, CartMap } from "./types";

export const selectCartItems: Selector<CartState, CartMap> = (state) => {
  return state.items;
};

export const selectCartExpanded: Selector<CartState, boolean> = (state) => {
  return state.expanded;
};

export const selectCartItemsCount: OutputSelector<
  CartState,
  number,
  (items: CartMap) => number
> = createSelector([selectCartItems], (items) => {
  let count = 0;
  for (const key in items) count += items[key].quantity;
  return count;
});

export const selectCartItemsTotal: OutputSelector<
  CartState,
  number,
  (items: CartMap) => number
> = createSelector([selectCartItems], (items) => {
  let count = 0;
  for (const key in items) {
    count += items[key].quantity * parseFloat(items[key].price);
  }
  return count;
});
