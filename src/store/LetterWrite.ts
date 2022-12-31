import { atom } from "recoil";

export type RecipientInputObjectType = {
  receiverName: string;
  situation: {
    situationId: number;
    templateUrl: string;
  };
  contents: string;
  lastSentence: string;
};

export const letterWriteInputState = atom<RecipientInputObjectType>({
  key: "LetterWriteInputState",
  default: {
    receiverName: "",
    situation: {
      situationId: -1,
      templateUrl: "",
    },
    contents: "",
    lastSentence: "",
  },
});

export const letterWriteGuidelineState = atom<string>({
  key: "LetterWriteGuidelineState",
  default: "",
});
