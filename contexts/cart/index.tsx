import React, { useEffect, useContext, useReducer, useMemo } from "react";
import { cartActions } from "./actions";
import * as storage from "../../utils/storage";
import { CartState } from "./types";
import { cartReducer } from "./reducer";
import { INITIAL_STATE, STORAGE_KEY } from "./values";

const CartContext = React.createContext<CartState>(INITIAL_STATE);

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const actions = useMemo(() => cartActions(dispatch), [dispatch]);
  const value = useMemo(() => [state, actions], [state, actions]);

  useEffect(() => {
    // save to local storage before unload
    const handleUnload = () => storage.setItem<CartState>(STORAGE_KEY, state);
    // register event
    window.addEventListener("beforeunload", handleUnload);
    return () => {
      // clear event, this can lead to memory leaks
      window.removeEventListener("beforeunload", handleUnload);
    };
  }, [state]);

  useEffect(() => {
    // get from local storage
    const state = storage.getItem<CartState>(STORAGE_KEY);
    // set cart state
    if (state) actions.setInitialState(state);
  }, [dispatch]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};

// similar to redux useSelector
export const useCartSelector = (selector) => {
  const [state] = useContext(CartContext);

  return selector(state);
};
