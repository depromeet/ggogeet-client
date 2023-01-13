import * as S from "./styled";
import Image from "next/image";

interface Props {
  onClick?: () => void;
}

export default function InitializationButton({ ...props }: Props) {
  return (
    <S.ButtonLayout {...props}>
      <Image
        src="/icons/reload.svg"
        alt="초기화화살표"
        width={8}
        height={8}
        priority
      />
      <S.Initialization>초기화</S.Initialization>
    </S.ButtonLayout>
  );
}
