import { SituationIdType } from "./sentence";

export type CreatedLetterDataType = {
  receiverId: number;
  receiverNickname: string;
  situationId: SituationIdType;
  title: string;
  content: string;
};

export type SendCompleteLetterPayloadDataType = {
  kakaoUuid: string;
  kakaoAccessCode: string;
};
