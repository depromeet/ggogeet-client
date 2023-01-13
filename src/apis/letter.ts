import { HTTP_METHOD } from "../constants/api";
import {
  CreatedLetterType,
  getLetterListType,
  GetLetterTempCompleteResultType,
  GetReceivedLetterDetailType,
  GetReceivedLetterTempType,
  PostNewLetterCreateType,
  PostSendLetterCompleteType,
  PostSendLetterTempCompleteType,
} from "../types/letter";
import { requester } from "./requester";
import queryString from "query-string";

export const postNewLetterCreate = async (payload: CreatedLetterType) => {
  const { data } = await requester<PostNewLetterCreateType>({
    method: HTTP_METHOD.POST,
    url: `/letters/draft`,
    data: payload,
  });
  return data;
};

export const postSendLetterComplete = async (letterId: number) => {
  const { data } = await requester<PostSendLetterCompleteType>({
    method: HTTP_METHOD.POST,
    url: `/letters/${letterId}/complete`,
  });
  return data;
};

export const postSendLetterTempComplete = async (letterId: number) => {
  const { data } = await requester<PostSendLetterTempCompleteType>({
    method: HTTP_METHOD.POST,
    url: `/letters/${letterId}/temp-complete`,
  });

  return data;
};

export const getLetterTempCompleteResult = async (tempLetterId: number) => {
  const { data } = await requester<GetLetterTempCompleteResultType>({
    method: HTTP_METHOD.GET,
    url: `/letters/${tempLetterId}/temp-complete/kakao/callback/confirm`,
  });

  return data;
};

export const getReceivedLetterTemp = async (tempLetterId: number) => {
  const { data } = await requester<GetReceivedLetterTempType>({
    method: HTTP_METHOD.GET,
    url: `/letters/received/temp/${tempLetterId}`,
  });

  return data;
};

export const getReceivedLetterDetail = async (letterId: number) => {
  const { data } = await requester<GetReceivedLetterDetailType>({
    method: HTTP_METHOD.GET,
    url: `/letters/received/${letterId}`,
  });

  return data;
};
export const getSentLetterDetail = async (letterId: number) => {
  const { data } = await requester<GetReceivedLetterDetailType>({
    method: HTTP_METHOD.GET,
    url: `/letters/sent/${letterId}`,
  });

  return data;
};

export const getReceivedLetterList = async (
  senders: string[],
  situations: string[],
  startDate?: string,
  endDate?: string,
  order?: string
) => {
  const qsParams = queryString.stringify({
    senders,
    situations,
    startDate,
    endDate,
    order,
  });
  const res = await requester<getLetterListType[]>({
    method: HTTP_METHOD.GET,
    url: `/letters/received?` + qsParams,
  });

  return res.data;
};
export const getSentLetterList = async (
  receivers: string[],
  situations: string[],
  startDate?: string,
  endDate?: string,
  order?: string
) => {
  const qsParams = queryString.stringify({
    receivers,
    situations,
    startDate,
    endDate,
    order,
  });
  const res = await requester<getLetterListType[]>({
    method: HTTP_METHOD.GET,
    url: `/letters/sent?` + qsParams,
  });

  return res.data;
};
