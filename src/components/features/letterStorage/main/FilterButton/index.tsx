import Image from "next/image";
import * as S from "./styled";

export default function FilterButton() {
  return (
    <S.ButtonLayout>
      <Image
        src={"/icons/filter.svg"}
        alt="필터링아이콘"
        height={18}
        width={18}
      />
    </S.ButtonLayout>
  );
}
