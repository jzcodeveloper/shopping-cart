import React, { useEffect, useContext, useReducer, useMemo } from "react";
import { cartActions, setItems } from "./actions";
import * as storage from "../../utils/storage";
import { CartState } from "./types";
import { cartReducer } from "./reducer";
import { INITIAL_STATE, CART_ACTIONS, STORAGE_KEY } from "./values";

const CartContext = React.createContext<CartState>(INITIAL_STATE);

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const actions = useMemo(() => cartActions(dispatch), [dispatch]);
  const value = useMemo(() => [state, actions], [state, actions]);

  useEffect(() => {
    // get from local storage
    const items = storage.getItem<CartState>(STORAGE_KEY);
    // set cart items
    if (items) dispatch(setItems(items));
  }, [dispatch]);

  useEffect(() => {
    // save to local storage
    storage.setItem<CartState>(STORAGE_KEY, state);
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  return context;
};
