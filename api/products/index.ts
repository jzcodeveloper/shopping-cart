import { api } from "../../utils/api";
import { Product } from "../../contexts/cart/types";

export const getProducts: Promise<Product[]> = async (): Product[] => {
  const res = await api.get<Product[]>("/");
  return res.data;
};
