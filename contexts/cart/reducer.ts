import produce, { Draft } from "immer";
import { ActionPayload } from "../../@types";
import { CartState } from "./types";
import { CART_ACTIONS } from "./values";
import { addCartItem, removeCartItem, clearCartItem } from "./utils";

export const cartReducer = (state: CartState, action: ActionPayload) =>
  produce<CartState>(state, (draft: Draft<CartState>) => {
    switch (action.type) {
      case CART_ACTIONS.SET_INITIAL_STATE: {
        return action.payload;
      }

      case CART_ACTIONS.ADD_ITEM: {
        draft.items = addCartItem(draft.items, action.payload);
        break;
      }

      case CART_ACTIONS.REMOVE_ITEM: {
        draft.items = removeCartItem(draft.items, action.payload);
        break;
      }

      case CART_ACTIONS.CLEAR_ITEM: {
        draft.items = clearCartItem(draft.items, action.payload);
        break;
      }

      case CART_ACTIONS.CLEAR_ITEMS: {
        draft.items = {};
        break;
      }

      case CART_ACTIONS.TOGGLE_CART: {
        draft.expanded = !draft.expanded;
        break;
      }
    }
  });
