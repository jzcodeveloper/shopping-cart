import produce, { Draft } from "immer";
import { Actions } from "./actions";
import { CartState, CartItem } from "./types";
import { CART_ACTIONS } from "./values";
import { addCartItem } from "./utils";

export const cartReducer = (state: CartState, action: Actions) =>
  produce<CartState>(state, (draft: Draft<CartState>) => {
    switch (action.type) {
      case CART_ACTIONS.SET_ITEMS: {
        draft.items = action.payload;
        break;
      }

      case CART_ACTIONS.RESET_ITEMS: {
        draft.items = {};
        break;
      }

      case CART_ACTIONS.ADD_ITEM: {
        draft.items = addCartItem(draft.items, action.payload);
        break;
      }

      case CART_ACTIONS.REMOVE_ITEM: {
        draft.items = removeCartItem(draft.items, action.payload);
        break;
      }
    }
  });
