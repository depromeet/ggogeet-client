import { getCookie } from "cookies-next";
import { COOKIE_REFRESH_TOKEN_KEY } from "@/src/constants/keys";

export const useAuth = () => {
  const getRefreshToken = () => getCookie(COOKIE_REFRESH_TOKEN_KEY);
  return { getRefreshToken };
};
