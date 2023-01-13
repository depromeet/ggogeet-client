import { atom } from "recoil";

export const remindNavigationState = atom<string>({
  key: "remindNavigationState",
  default: "모든 메모",
});
