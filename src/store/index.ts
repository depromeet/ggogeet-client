import { IS_SERVER } from "../constants";

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (!IS_SERVER) {
      const savedValue = localStorage.getItem(key);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue: any, _: any, isReset: boolean) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };

export const sessionStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    if (!IS_SERVER) {
      const savedValue = sessionStorage.getItem(key);
      if (savedValue !== null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue: any, _: any, isReset: boolean) => {
        const confirm = newValue.length === 0;
        confirm
          ? sessionStorage.removeItem(key)
          : sessionStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };
