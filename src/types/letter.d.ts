import { SituationIdType } from "./sentence";

export type CreatedLetterType = {
  receiverId: number;
  receiverNickname: string;
  situationId: SituationIdType;
  title: string;
  content: string;
};

export type SendCompleteLetterPayloadType = {
  kakaoUuid: string;
  kakaoAccessCode: string;
};

export type LetterBodyType = {
  id: number;
  situationId: SituationIdType;
  title: string;
  content: string;
  accessCode: string;
  resultImg: string;
  imageContent: string;
};

export type SenderAndReceiverType = {
  id: number;
  name: string;
  nickname: string;
  profileImg: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
};

export type PostNewLetterCreateType = {
  id: number;
  sendAt: string;
  updatedAt: string;
  createdAt: string;
  deletedAt: string;
  receiverNickname: string;
  status: "tmpSaved" | "sent";
  letterBody: LetterBodyType;
  sender: SenderAndReceiverType;
  receiver: SenderAndReceiverType;
};

export type PostSendLetterCompleteType = {
  successful_receiver_uuids: Array<string>;
};

export type PostSendLetterTempCompleteType = {
  tempLetterId: number;
  expiredDate: string;
};

export type GetLetterTempCompleteResultType = {
  sent: boolean;
};
