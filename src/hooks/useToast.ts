import { useRecoilState } from "recoil";
import { toastState } from "@/src/store/Toast";

import type { ToastState } from "@/src/store/Toast";

export const useToast = () => {
  const [currentToast, setCurrentToast] = useRecoilState(toastState);

  const setToast = (value: ToastState | null) => {
    setCurrentToast(() => value);
  };

  return {
    currentToast,
    setToast,
  };
};
