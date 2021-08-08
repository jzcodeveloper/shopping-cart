import { EmptyObject } from "../../@types";

export interface Product {
  id: number;
  name: string;
  cover: string;
  price: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartMap {
  [key: string]: CartItem;
}

export interface CartState {
  items: CartMap | EmptyObject;
  expanded: boolean;
}
