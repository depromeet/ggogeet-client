import { atom } from "recoil";
import { localStorageEffect, sessionStorageEffect } from ".";
import { IS_SERVER } from "../constants";

export type RecipientInputObjectType = {
  receiverName: string;
  situationId: number | null;
  contents: string;
  lastSentence: string;
};

export const letterWriteInputState = atom<RecipientInputObjectType>({
  key: "LetterWriteInputState",
  default: {
    receiverName: "",
    situationId: null,
    contents: "",
    lastSentence: "",
  },
  effects: [
    localStorageEffect("LetterWriteInputState"),
    sessionStorageEffect("LetterWriteInputState"),
  ],
});

export const letterWriteGuidelineState = atom<string>({
  key: "LetterWriteGuidelineState",
  default: "",
});
