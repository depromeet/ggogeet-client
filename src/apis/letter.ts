import { HTTP_METHOD } from "../constants/api";
import {
  CreatedLetterDataType,
  SendCompleteLetterPayloadDataType,
} from "../types/letter";
import { requester } from "./requester";

export const postNewLetterCreate = async (payload: CreatedLetterDataType) => {
  const { data } = await requester<number>({
    method: HTTP_METHOD.POST,
    url: `/letters/draft`,
    data: payload,
  });
  return data;
};

export const postSendLetterComplete = async ({
  letterId,
  payload,
}: {
  letterId: number;
  payload: SendCompleteLetterPayloadDataType;
}) => {
  const { data } = await requester<number>({
    method: HTTP_METHOD.POST,
    url: `/letters/${letterId}/complete`,
    data: payload,
  });
  return data;
};
