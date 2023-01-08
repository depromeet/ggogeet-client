import { HTTP_METHOD } from "../constants/api";
import { CreatedLetterDataType } from "../types/letter";
import { requester } from "./requester";

export const postNewLetterCreate = async (payload: CreatedLetterDataType) => {
  const { data } = await requester<unknown>({
    method: HTTP_METHOD.POST,
    url: `/letters/draft`,
    data: payload,
  });
  return data;
};

export const postSendLetterComplete = async (letterId: number) => {
  const { data } = await requester<number>({
    method: HTTP_METHOD.POST,
    url: `/letters/${letterId}/complete`,
  });
  return data;
};
