import Image from "next/image";
import * as S from "./styled";

export default function DeleteButton() {
  return (
    <S.ButtonLayout>
      <Image
        src="/icons/trashCan.svg"
        alt="쓰레기통아이콘"
        height={16}
        width={16}
      />
      <S.Delete>삭제하기</S.Delete>
    </S.ButtonLayout>
  );
}
