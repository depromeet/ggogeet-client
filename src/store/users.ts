import { atom } from "recoil";
import { localStorageEffect } from ".";
import { MyInformation } from "../types/users";

export const userState = atom<MyInformation>({
  key: "userState",
  default: {
    id: -1,
    name: "",
    profileImg: "",
    remindOn: false,
    alertOn: false,
    welcomePopupView: false,
    allowFriendsList: false,
  },
  effects: [localStorageEffect("userState")],
});
