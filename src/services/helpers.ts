import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const handleRequestResponse = (response: AxiosResponse) => {
  return response.data ? response.data.data ?? response.data : response;
};

const handleRequestError = (error: AxiosError) => {
  if (error.response) {
    const { data } = error.response;
    const errorMessage = (data as { status_message: string }).status_message;
    return Promise.reject(new Error(errorMessage));
  }
  return Promise.reject(error);
};

export const createAxiosInstance = (
  config: AxiosRequestConfig
): AxiosInstance => {
  const instance = axios.create(config);

  instance.interceptors.response.use(handleRequestResponse, handleRequestError);

  return instance;
};

export const createAxiosClient = (instance: AxiosInstance) => {
  instance.interceptors.response.use(handleRequestResponse, handleRequestError);

  return instance;
};
