import { useMutation } from "@tanstack/react-query";
import { setCookie } from "cookies-next";
import { useSetRecoilState } from "recoil";

import { userState } from "@/src/store/users";
import { requester } from "./requester";
import { userMyInformation } from "./users";
import { HTTP_METHOD } from "@/src/constants/api";
import { useToast } from "@/src/hooks/useToast";
import {
  COOKIE_ACCESS_TOKEN_KEY,
  COOKIE_REFRESH_TOKEN_KEY,
} from "@/src/constants/keys";
import { KakaoFriendType } from "../types/users";
import { AuthPayloadType, KakaoLoginType } from "../types/auth";
import { useKakaoFriends } from "../hooks/useKakaoFriends";

export const usePostKakaoLoginMutate = () => {
  const { setToast } = useToast();
  const setUserState = useSetRecoilState(userState);
  const { getKakaoFriendsUri } = useKakaoFriends();

  const tryKakaoLogin = async (payload: AuthPayloadType) => {
    const { data } = await requester<KakaoLoginType>({
      method: HTTP_METHOD.POST,
      url: `/auth/login`,
      data: payload,
    });

    return data;
  };
  const updateUserState = async () => {
    const userData = await userMyInformation();
    setUserState(userData);
  };

  return useMutation({
    mutationFn: tryKakaoLogin,
    onSuccess: async (data) => {
      setCookie(COOKIE_ACCESS_TOKEN_KEY, data.jwtAccessToken);
      setCookie(COOKIE_REFRESH_TOKEN_KEY, data.jwtRefreshToken);
      await updateUserState();
      if (data.allowFriendsList) {
        return setToast({
          status: "success",
          content: "로그인 성공",
        });
      } else {
        window.location.replace(getKakaoFriendsUri());
      }
    },
    onError: () =>
      setToast({
        status: "error",
        content: "로그인에 문제가 발생하였습니다.",
      }),
  });
};

export const usePostKakaoFriendsMutate = () => {
  const { setToast } = useToast();
  const setUserState = useSetRecoilState(userState);

  const tryKakaoFriends = async (payload: AuthPayloadType) => {
    await requester<KakaoFriendType[]>({
      method: HTTP_METHOD.POST,
      url: `/auth/kakao/friends`,
      data: payload,
    });
  };
  const updateUserState = () => {
    setUserState((prev) => ({ ...prev, allowFriendsList: true }));
  };

  return useMutation({
    mutationFn: tryKakaoFriends,
    onSuccess: async () => {
      await updateUserState();
    },
    onError: () =>
      setToast({
        status: "error",
        content: "카카오 친구목록 동의에 문제가 발생하였습니다.",
      }),
  });
};

export const getKakaoFriends = async () => {
  const { data } = await requester<KakaoFriendType[]>({
    method: HTTP_METHOD.GET,
    url: `/friends`,
  });

  return data;
};

export const patchKakaoFriends = async () => {
  const { status } = await requester({
    method: HTTP_METHOD.PATCH,
    url: `/friends/kakao/update`,
  });

  return status;
};
