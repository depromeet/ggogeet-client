import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/src/hooks/useAuth";
import { usePostKakaoLoginMutate } from "@/src/apis/auth";
import { KAKAO_QUERY } from "@/src/constants/api";

export default function SigninRedirectKakao() {
  const router = useRouter();
  const { getRefreshToken } = useAuth();
  const { mutate: tryKakaoLogin, isSuccess: kakaoLoginSuccess } =
    usePostKakaoLoginMutate();

  const getTokens = () => {
    const code = router.query["code"];
    if (!code) return;
    tryKakaoLogin({
      code: code as string,
      redirectURI:
        window.location.origin + KAKAO_QUERY.KAKAO_LOGIN_REDIRECT_URI,
    });
  };

  useEffect(() => {
    if (!router.isReady) return;
    getRefreshToken() ? router.push("/") : getTokens();
  }, [router.isReady]);

  useEffect(() => {
    if (!kakaoLoginSuccess) return;
    router.push("/");
  }, [kakaoLoginSuccess]);

  return <></>;
}
