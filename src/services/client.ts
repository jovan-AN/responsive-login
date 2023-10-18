import coreClient, { ClientAxiosInstance } from "./config";

const client: ClientAxiosInstance = {
  get: (url, conf) => coreClient().get(url, conf),
  post: (url, data, config) => coreClient().post(url, data, config),
  put: (url, data, config) => coreClient().put(url, data, config),
  delete: (url, config) => coreClient().delete(url, config),
  patch: (url, data, config) => coreClient().patch(url, data, config),
};

export default client;
