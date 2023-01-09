import { atom } from "recoil";

export interface ToastState {
  status?: "success" | "error";
  content: string;
}

export const toastState = atom<ToastState | null>({
  key: "toastState",
  default: null,
});
