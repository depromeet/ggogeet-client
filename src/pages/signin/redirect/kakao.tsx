import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/src/hooks/useAuth";
import { usePostKakaoLoginMutate } from "@/src/apis/auth";
import { useOauth } from "@/src/hooks/useOauth";

export default function SigninRedirectKakao() {
  const router = useRouter();
  const { getKakaoRedirectUri } = useOauth();
  const { getRefreshToken } = useAuth();
  const { mutate: tryKakaoLogin, isSuccess: kakaoLoginSuccess } =
    usePostKakaoLoginMutate();

  const getTokens = () => {
    const code = router.query["code"];
    if (!code) return;
    tryKakaoLogin({
      code: code as string,
      redirectURI: getKakaoRedirectUri(),
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
