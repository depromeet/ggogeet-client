import * as S from "./styled";
import Image from "next/image";
import { useState } from "react";

export default function ToggleArrowButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClickArrowButton = () => setIsOpen((prev) => !prev);
  return (
    <S.ToggleArrowButtonContainer>
      <Image
        src={isOpen ? "/icons/smallUpArrow.svg" : "/icons/smallDownArrow.svg"}
        alt="ArrowImg"
        width={11}
        height={5}
        onClick={onClickArrowButton}
      />
    </S.ToggleArrowButtonContainer>
  );
}
