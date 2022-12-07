import * as S from "./styled";
import Image from "next/image";

export default function BackButton() {
  return (
    <S.BackButtonWrapper>
      <Image
        src="/icons/backArrow.svg"
        alt="뒤로가기화살표버튼"
        width={20}
        height={17}
      />
    </S.BackButtonWrapper>
  );
}
