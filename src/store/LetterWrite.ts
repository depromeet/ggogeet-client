import { atom } from "recoil";

export type RecipientInputObjectType = {
  receiverName: string;
  situationId: number;
  contents: string;
  lastSentence: string;
};

export const letterWriteInputState = atom<RecipientInputObjectType>({
  key: "LetterWriteInputState",
  default: {
    receiverName: "",
    situationId: -1,
    contents: "",
    lastSentence: "",
  },
});

export const letterWriteGuidelineState = atom<string>({
  key: "LetterWriteGuidelineState",
  default: "",
});
