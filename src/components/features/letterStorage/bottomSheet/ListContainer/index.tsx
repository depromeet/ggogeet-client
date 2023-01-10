import { getKakaoFriends } from "@/src/apis/auth";
import Checkbox from "@/src/components/common/Buttons/Checkbox";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import * as S from "./styled";

interface Props {
  image?: string;
  name: string;
}
export default function ListContainer({ image, name }: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  const onChangeCheckBox = () => {
    setChecked((prev) => !prev);
  };

  return (
    <S.ListLayout>
      <S.NameContainer>
        {image && (
          <S.ImageWrapper>
            <Image src={image} alt="프로필이미지" width={24} height={24} />
          </S.ImageWrapper>
        )}
        <S.Name>{name}</S.Name>
      </S.NameContainer>

      <Checkbox checked={checked} onChange={onChangeCheckBox} />
    </S.ListLayout>
  );
}
