import * as S from "./styled";
import Image from "next/image";
import { useState } from "react";

interface Props {
  isClicked: boolean;
}

export default function ToggleArrowButton({ isClicked }: Props) {
  return (
    <S.ToggleArrowButtonContainer>
      <Image
        src={
          isClicked ? "/icons/smallUpArrow.svg" : "/icons/smallDownArrow.svg"
        }
        alt="ArrowImg"
        width={11}
        height={5}
      />
    </S.ToggleArrowButtonContainer>
  );
}
