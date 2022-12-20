<<<<<<< HEAD
import Checkbox from "@/src/components/common/Buttons/Checkbox";
=======
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
import Image from "next/image";
import * as S from "./styled";

interface Props {
  imageURL?: string;
  name: string;
}
export default function ListContainer({ imageURL, name }: Props) {
  return (
    <S.ListLayout>
      <S.NameContainer>
        {imageURL && (
          <Image src={imageURL} alt="프로필이미지" width={24} height={24} />
        )}
        <S.Name>{name}</S.Name>
      </S.NameContainer>

<<<<<<< HEAD
      <Checkbox checked={false} />
=======
<<<<<<< HEAD
      <Checkbox isChecked={false} />
=======
      {/* 체크박스 자리 */}
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
>>>>>>> b263df0 (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
    </S.ListLayout>
  );
}
