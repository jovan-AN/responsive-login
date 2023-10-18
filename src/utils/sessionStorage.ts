const set = (key: string, value: string) => {
  if (typeof window !== "undefined") {
    window.sessionStorage.setItem(key, value);
  }
};

const get = (key: string) => {
  if (typeof window !== "undefined") {
    return window.sessionStorage.getItem(key);
  }
};

export const sessionStorageFns = {
  set,
  get,
};
