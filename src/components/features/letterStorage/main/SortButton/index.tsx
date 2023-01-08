import Image from "next/image";
import * as S from "./styled";

interface Props {
  sortKind: string;
}

export default function SortButton({ sortKind }: Props) {
  return (
    <S.ButtonLayout>
      <Image src={"/icons/sort.svg"} alt="정렬아이콘" width={18} height={18} />
      <S.SortKind>{sortKind}</S.SortKind>
    </S.ButtonLayout>
  );
}
