import { atom } from "recoil";
import { localStorageEffect } from ".";

import type { MyInfomation } from "@/src/types/users";

export const userState = atom<MyInfomation | null>({
  key: "userState",
  default: null,
  effects: [localStorageEffect("userState")],
});
