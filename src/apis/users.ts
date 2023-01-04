import { requester } from "./requester";
import { HTTP_METHOD } from "@/src/constants/api";
import { KakaoFriendDataType } from "../types/users";

export const userCreate = async (payload: any) => {
  const { data } = await requester({
    method: HTTP_METHOD.POST,
    url: `/users`,
    data: payload,
  });

  return data;
};

export const userList = async () => {
  const { data } = await requester({
    method: HTTP_METHOD.GET,
    url: `/users`,
  });
  return data;
};

export const userInfoPatch = async (id: string, payload: any) => {
  const { data } = await requester({
    method: HTTP_METHOD.PATCH,
    url: `/users/${id}`,
    data: payload,
  });
  return data;
};

export const userDelete = async (id: string) => {
  const { data } = await requester({
    method: HTTP_METHOD.DELETE,
    url: `/users/${id}`,
  });

  return data;
};

export const userKakaoFriendList = async () => {
  const { data } = await requester<Array<KakaoFriendDataType>>({
    method: HTTP_METHOD.GET,
    url: `/friends`,
  });

  return data;
};

export const userKakaoFriend = async (id: string) => {
  const { data } = await requester<KakaoFriendDataType>({
    method: HTTP_METHOD.GET,
    url: `/friends/${id}`,
  });

  return data;
};

export const userInfo = async () => {
  const { data } = await requester({
    method: HTTP_METHOD.GET,
    url: `/users/me/`,
  });

  return data;
};
