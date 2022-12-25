import { atom } from "recoil";

type RecipientInputType =
  | "receiverName"
  | "relationship"
  | "situation"
  | "contents";

export type RecipientInputObjectType = {
  [key in RecipientInputType]: string | object;
};

export const letterWriteInputState = atom<RecipientInputObjectType>({
  key: "LetterWriteInputState",
  default: {
    receiverName: "",
    relationship: "",
    situation: {
      situationId: -1,
      templateUrl: "",
    },
    contents: "",
  },
});

export const letterWriteGuidelineState = atom<string>({
  key: "LetterWriteGuidelineState",
  default: "",
});
