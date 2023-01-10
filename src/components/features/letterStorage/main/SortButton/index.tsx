import Image from "next/image";
import * as S from "./styled";

interface Props {
  sortKind: string;
  onClick?: () => void;
}

export default function SortButton({ sortKind, ...props }: Props) {
  return (
    <S.ButtonLayout {...props}>
      <Image src={"/icons/sort.svg"} alt="정렬아이콘" width={18} height={18} />
      <S.SortKind>{sortKind}</S.SortKind>
    </S.ButtonLayout>
  );
}
