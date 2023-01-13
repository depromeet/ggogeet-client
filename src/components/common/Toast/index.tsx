import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import * as S from "./styled";

import { useToast } from "@/src/hooks/useToast";

export default function Toast() {
  const { currentToast, setToast } = useToast();

  const getIcon = (icon: "success" | "error") => {
    if (icon === "success") return "/icons/icon__toast-success.svg";
    else return "/icons/icon__toast-error.svg";
  };

  useEffect(() => {
    if (currentToast) {
      setTimeout(() => setToast(null), 3000);
    }
  }, [currentToast]);

  return (
    <S.Wrap>
      <AnimatePresence mode="wait">
        {currentToast && (
          <S.Container
            onClick={() => setToast(null)}
            key={currentToast.content}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            {currentToast.status && (
              <Image
                src={getIcon(currentToast.status)}
                width={20}
                height={20}
                alt="toast-icon"
                priority
              />
            )}
            <div>{currentToast.content}</div>
          </S.Container>
        )}
      </AnimatePresence>
    </S.Wrap>
  );
}
