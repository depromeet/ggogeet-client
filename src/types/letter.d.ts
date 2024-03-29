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

export type GetReceivedLetterTempType = {
  id: number;
  content: string;
  senderNickname: string;
  receivedAt: string;
  situationId: SituationIdType;
};

export type GetReceivedLetterDetailType = {
  id: number;
  senderNickname: string;
  receiverNickname: string;
  receivedAt: string;
  type: string;
  imageContent: string;
  content: string;
  situationId: number;
};

export type getLetterListType = {
  id: number;
  senderNickname: string;
  receiverNickname: string;
  receivedAt: string;
  title: string;
  situationId: number;
  filter?: "sent" | "receive";
};
