import * as S from "./styled";
import Image from "next/image";

interface Props {
  isClicked: boolean;
}

export default function ToggleArrowButton({ isClicked }: Props) {
  return (
    <S.ToggleArrowButtonContainer isClicked={isClicked}>
      <Image
        src="/icons/smallDownArrow.svg"
        alt="토글아래화살표"
        width={11}
        height={5}
      />
    </S.ToggleArrowButtonContainer>
  );
}
