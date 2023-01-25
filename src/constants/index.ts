export const BASE_URL = {
  development: "",
  production: "",
};

export const IS_SERVER = typeof window === "undefined";

export const IS_PRODUCTION = process.env.NODE_ENV === "production";
