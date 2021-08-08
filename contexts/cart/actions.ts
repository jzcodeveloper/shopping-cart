import React from "react";
import { Product, CartMap } from "./types";
import { CART_ACTIONS } from "./values";

// set initial state
export const setInitialState = (state: CartState) => ({
  type: CART_ACTIONS.SET_INITIAL_STATE,
  payload: state,
});
export type SetInitialState = ReturnType<typeof setInitialState>;

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
export type Actions = SetInitialState | ResetItems | AddItem | RemoveItem;

// we can handle async actions here
export const cartActions = (dispatch: React.Dispatch<Actions>) => ({
  // set state
  setInitialState: (state: CartState) => dispatch(setInitialState(state)),
  // reset items
  resetItems: () => dispatch(resetItems()),
  // add item
  addItem: (item: Product) => dispatch(addItem(item)),
  // remove item
  removeItem: (item: Product) => dispatch(removeItem(item)),
});
