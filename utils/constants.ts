import { AxiosRequestConfig } from "axios";

export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "";
export const REVALIDATE_TIME = 60 * 60 * 24;

export const AXIOS_CONFIG: AxiosRequestConfig = {
  timeout: 10000,
  baseURL: API_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
};
