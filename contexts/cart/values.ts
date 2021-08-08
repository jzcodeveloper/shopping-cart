import { CartState } from "./types";

export const INITIAL_STATE = Object.freeze<CartState>({
  items: {},
  expanded: false,
});

export const CART_ACTIONS = Object.freeze<Record<string, string>>({
  SET_INITIAL_STATE: "SET_INITIAL_STATE",
  RESET_ITEMS: "RESET_ITEMS",
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  TOGGLE_CART: "TOGGLE_CART",
  CLEAR_ITEM: "CLEAR_ITEM",
  CLEAR_ITEMS: "CLEAR_ITEMS",
});

export const STORAGE_KEY: string = "cart";
