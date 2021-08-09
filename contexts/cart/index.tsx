import React, { useEffect, useContext, useReducer, useMemo } from "react";
import { cartActions } from "./actions";
import * as storage from "../../utils/storage";
import { CartState, ICartContext } from "./types";
import { cartReducer } from "./reducer";
import { INITIAL_STATE, INITIAL_CONTEXT, STORAGE_KEY } from "./values";

const CartContext = React.createContext<ICartContext>(INITIAL_CONTEXT);

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const actions = useMemo(() => cartActions(dispatch), [dispatch]);
  const value = useMemo(() => [state, actions], [
    state,
    actions,
  ]) as ICartContext;

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
export const useCartSelector = (selector: any) => {
  const context = useContext(CartContext);

  return selector(context[0]);
};

// similar to redux useDispatch
export const useCartDispatch = () => {
  const context = useContext(CartContext);

  return context[1];
};
