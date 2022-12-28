import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { requester } from "./requester";
import { HTTP_METHOD } from "@/src/constants/api";
import { useToast } from "@/src/hooks/useToast";
import {
  COOKIE_ACCESS_TOKEN_KEY,
  COOKIE_REFRESH_TOKEN_KEY,
} from "@/src/constants/keys";
import { KakaoFriendAuthPayloadType } from "../types/auth";
import { KakaoFriendDataType } from "../types/users";

interface PostKakaoLoginQuery {
  jwtAccessToken: string;
  jwtRefreshToken: string;
}
interface Payload {
  code: string;
  redirectURI: string;
}

export const usePostKakaoLoginMutate = () => {
  const { setToast } = useToast();

  const tryKakaoLogin = async (payload: Payload) => {
    const { data } = await requester<PostKakaoLoginQuery>({
      method: HTTP_METHOD.POST,
      url: `/auth/login`,
      data: payload,
    });

    return data;
  };

  return useMutation({
    mutationFn: tryKakaoLogin,
    onSuccess: (data) => {
      setCookie(COOKIE_ACCESS_TOKEN_KEY, data.jwtAccessToken);
      setCookie(COOKIE_REFRESH_TOKEN_KEY, data.jwtRefreshToken);
      return setToast({
        status: "success",
        content: "로그인 성공",
      });
    },
    onError: () =>
      setToast({
        status: "error",
        content: "로그인에 문제가 발생하였습니다.",
      }),
  });
};

export const getKakaoFriendListByAuth = async (
  payload: KakaoFriendAuthPayloadType
) => {
  const { data } = await requester<Array<KakaoFriendDataType>>({
    method: HTTP_METHOD.GET,
    url: `/auth/friends`,
    data: payload,
  });
  return data;
};

export const getKakaoFriendAuthTestCode = async () => {
  const { data } = await requester<KakaoFriendAuthPayloadType["code"]>({
    method: HTTP_METHOD.GET,
    url: `/auth/code/friends`,
  });
  return data;
};

export const getKakaoFriendAuthRedirect = async (code: string) => {
  await requester({
    method: HTTP_METHOD.GET,
    url: `/auth/kakao/friends`,
    data: code,
  });
};