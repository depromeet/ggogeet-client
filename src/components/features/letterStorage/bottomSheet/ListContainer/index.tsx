import Checkbox from "@/src/components/common/Buttons/Checkbox";
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

      <Checkbox isChecked={false} />
    </S.ListLayout>
  );
}
