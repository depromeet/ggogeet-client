import { PropsWithChildren, useEffect } from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import {
  COOKIE_ACCESS_TOKEN_KEY,
  COOKIE_REFRESH_TOKEN_KEY,
} from "@/src/constants/keys";
import { useToast } from "../hooks/useToast";
import { axiosInstance } from "@/src/apis/requester";

export default function InterceptorProvider({ children }: PropsWithChildren) {
  const { setToast } = useToast();
  const router = useRouter();
  const reponseInterceptor = () => {
    axiosInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const {
          response: { status },
        } = error;

        if (status === 401) {
          setToast({
            status: "error",
            content: "로그인을 다시 시도해주세요!",
          });
          deleteCookie(COOKIE_ACCESS_TOKEN_KEY);
          deleteCookie(COOKIE_REFRESH_TOKEN_KEY);
          router.push("/");
        }

        return Promise.reject(error);
      }
    );
  };

  useEffect(() => {
    reponseInterceptor();
  }, []);

  return <>{children}</>;
}
