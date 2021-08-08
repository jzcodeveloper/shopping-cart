import { api } from "../../utils/api";
import { Product } from "../../contexts/cart/types";

export const getProducts = async (): Promise<Product[]> => {
  const res = await api.get<Product[]>("/");
  return res.data;
};
