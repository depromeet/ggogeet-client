<<<<<<< HEAD
<<<<<<< HEAD
import Checkbox from "@/src/components/common/Buttons/Checkbox";
=======
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
=======
import Checkbox from "@/src/components/common/Buttons/Checkbox";
>>>>>>> d33a397 (💄 letter-storage 페이지 바텀시트 스타일 수정)
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
<<<<<<< HEAD
      <Checkbox checked={false} />
=======
=======
>>>>>>> 880696c (💄 letter-storage 페이지 바텀시트 스타일 수정)
<<<<<<< HEAD
      <Checkbox isChecked={false} />
=======
      {/* 체크박스 자리 */}
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
<<<<<<< HEAD
>>>>>>> b263df0 (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
=======
=======
      <Checkbox isChecked={false} />
>>>>>>> d33a397 (💄 letter-storage 페이지 바텀시트 스타일 수정)
>>>>>>> 880696c (💄 letter-storage 페이지 바텀시트 스타일 수정)
    </S.ListLayout>
  );
}
