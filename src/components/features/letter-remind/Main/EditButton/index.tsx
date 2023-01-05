import Image from "next/image";
import * as S from "./styled";

export default function EditButton() {
  return (
    <S.ButtonLayout>
      <Image src="/icons/pencil.svg" alt="연필아이콘" height={15} width={15} />
      <S.Edit>편집하기</S.Edit>
    </S.ButtonLayout>
  );
}
