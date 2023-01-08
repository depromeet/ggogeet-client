import { usePostKakaoFriendsMutate } from "@/src/apis/auth";
import { KAKAO_QUERY } from "@/src/constants/api";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const SigninRedirectKakaoFriends = () => {
  const router = useRouter();
  const { mutate: tryKakaoFriends, isSuccess: kakaoFriendsSuccess } =
    usePostKakaoFriendsMutate();

  const getKakaoFriendsCode = () => {
    const code = router.query["code"];
    if (!code) return;
    tryKakaoFriends({
      code: code as string,
      redirectURI:
        window.location.origin + KAKAO_QUERY.KAKAO_FRIENDS_REDIRECT_URI,
    });
  };

  useEffect(() => {
    if (!router.isReady) return;
    getKakaoFriendsCode();
  }, [router.isReady]);

  useEffect(() => {
    if (!kakaoFriendsSuccess) return;
    router.push("/");
  }, [kakaoFriendsSuccess]);

  return <></>;
};

export default SigninRedirectKakaoFriends;
