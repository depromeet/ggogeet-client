import Image from "next/image";
import * as S from "./styled";

export default function PlusButton() {
  return (
    <S.ButtonLayout>
      <Image
        src={"/icons/plus.svg"}
        alt="더하기아이콘"
        height={24}
        width={24}
      />
    </S.ButtonLayout>
  );
}
