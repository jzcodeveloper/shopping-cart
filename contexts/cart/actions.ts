import React from "react";
import { ActionPayload } from "../../@types";
import { Product, CartState } from "./types";
import { CART_ACTIONS } from "./values";

// set initial state
export const setInitialState = (state: CartState) => ({
  type: CART_ACTIONS.SET_INITIAL_STATE,
  payload: state,
});
export type SetInitialState = ReturnType<typeof setInitialState>;

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

// clear item
export const clearItem = (item: Product) => ({
  type: CART_ACTIONS.CLEAR_ITEM,
  payload: item,
});
export type ClearItem = ReturnType<typeof clearItem>;

// clear items
export const clearItems = () => ({
  type: CART_ACTIONS.CLEAR_ITEMS,
  payload: undefined,
});
export type ClearItems = ReturnType<typeof clearItems>;

// toggle cart
export const toggleCart = () => ({
  type: CART_ACTIONS.TOGGLE_CART,
  payload: undefined,
});
export type ToggleCart = ReturnType<typeof toggleCart>;

export type Actions =
  | ToggleCart
  | SetInitialState
  | AddItem
  | RemoveItem
  | ClearItem
  | ClearItems;

// we can handle async actions here
export const cartActions = (dispatch: React.Dispatch<ActionPayload>) => ({
  // set state
  setInitialState: (state: CartState) => dispatch(setInitialState(state)),
  // add item
  addItem: (item: Product) => dispatch(addItem(item)),
  // remove item
  removeItem: (item: Product) => dispatch(removeItem(item)),
  // clear item
  clearItem: (item: Product) => dispatch(clearItem(item)),
  // clear items
  clearItems: () => dispatch(clearItems()),
  // toggle cart
  toggleCart: () => dispatch(toggleCart()),
});
