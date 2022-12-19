import * as S from "./styled";
import Image from "next/image";

export default function InitializationButton() {
  return (
    <S.ButtonLayout>
      <Image src="/icons/reload.svg" alt="초기화화살표" width={8} height={8} />
      <S.Initialization>초기화</S.Initialization>
    </S.ButtonLayout>
  );
}
