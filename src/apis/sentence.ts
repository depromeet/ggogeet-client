import { HTTP_METHOD } from "../constants/api";
import {
  GuideSentenceBySituationIdType,
  GuideSentenceType,
  UserGuideSentencePayloadType,
} from "../types/sentence";
import { requester } from "./requester";

export const getGuideSentenceBySituationId = async (situationId: number) => {
  const { data } = await requester<GuideSentenceBySituationIdType>({
    method: HTTP_METHOD.GET,
    url: `/sentence/situation/${situationId}`,
  });
  return data;
};

export const postUserGuideSentence = async (
  payload: UserGuideSentencePayloadType
) => {
  const { data } = await requester<GuideSentenceType>({
    method: HTTP_METHOD.POST,
    url: `/sentence`,
    data: payload,
  });

  return data;
};

export const deleteUserGuideSentence = async (sentenceId: number) => {
  const { status } = await requester({
    method: HTTP_METHOD.DELETE,
    url: `/sentence/${sentenceId}`,
  });

  return status;
};
