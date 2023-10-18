import { AxiosRequestConfig } from "axios";
import { createAxiosInstance } from "./helpers";
import { baseURL } from "./urls";

interface ClientConfiguration extends AxiosRequestConfig {
  isAuthRedirect?: boolean;
}

export interface ClientAxiosInstance {
  get<T = any>(url: string, config?: ClientConfiguration): Promise<T>;
  post<T = any>(
    url: string,
    data?: any,
    config?: ClientConfiguration
  ): Promise<T>;
  put<T = any>(
    url: string,
    data?: any,
    config?: ClientConfiguration
  ): Promise<T>;
  delete<T = any>(url: string, config?: ClientConfiguration): Promise<T>;
  patch<T = any>(
    url: string,
    data?: any,
    config?: ClientConfiguration
  ): Promise<T>;
}

const coreApiConfig: ClientConfiguration = {
  baseURL: baseURL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN_TMDB}`,
    "Content-Type": "application/json",
  },
};

export const coreClient = (): ClientAxiosInstance =>
  createAxiosInstance(coreApiConfig);

export default coreClient;
