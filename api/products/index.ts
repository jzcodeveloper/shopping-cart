import { AxiosError } from "axios";
import { api } from "../../utils/api";
import { Product } from "../../contexts/cart/types";

/**
 * @description Get products
 * @route /products
 */
export const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await api.get<Product[]>("/products");
    return res.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(axiosError.message);
    return [];
  }
};
