import React from "react";
import { Product, CartMap } from "./types";
import { CART_ACTIONS } from "./values";

// set items
export const setItems = (items: CartMap) => ({
  type: CART_ACTIONS.SET_IEMS,
  payload: items,
});
export type SetItems = ReturnType<typeof setItems>;

// reset items
export const resetItems = () => ({ type: CART_ACTIONS.RESET_ITEMS });
export type ResetItems = ReturnType<typeof resetItems>;

// add item
export const addItem = (item: Product) => ({
  type: CART_ACTIONS.ADD_ITEM,
  payload: item,
});
export type AddItem = ReturnType<typeof addItem>;

// remove item
export const removeItem = (item: Product) => ({
  type: CART_ACTIONS.REMOVE_ITEM,
  payload: item,
});
export type RemoveItem = ReturnType<typeof removeItem>;

// available actions
export type Actions = SetItems | ResetItems | AddItem | RemoveItem;

// we can handle async actions here
export const cartActions = (dispatch: React.Dispatch<Actions>) => ({
  // set items
  setItems: (items: CartMap) => dispatch(setItems(items)),
  // reset items
  resetItems: () => dispatch(resetItems()),
  // add item
  addItem: (item: Product) => dispatch(addItem(item)),
  // remove item
  removeItem: (item: Product) => dispatch(removeItem(item)),
});
