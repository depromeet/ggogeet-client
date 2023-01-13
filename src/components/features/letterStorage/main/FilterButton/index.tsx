import Image from "next/image";
import * as S from "./styled";

interface Props {
  onClick?: () => void;
}

export default function FilterButton({ ...props }: Props) {
  return (
    <S.ButtonLayout {...props}>
      <Image
        src={"/icons/filter.svg"}
        alt="필터링아이콘"
        height={18}
        width={18}
        priority
      />
    </S.ButtonLayout>
  );
}
