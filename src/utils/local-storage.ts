export const getStorageItem = (key: string, initialValue = "") => {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  } catch (error) {
    return initialValue;
  }
};

export const setStorageItem = (key: string, value: string) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};
