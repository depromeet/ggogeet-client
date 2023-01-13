import Checkbox from "@/src/components/common/Buttons/Checkbox";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import * as S from "./styled";

interface FilterConditionTypes {
  senders: string[];
  tags: string[];
  startDate?: string;
  endDate?: string;
  order?: string;
}

interface Props {
  image?: string;
  name: string;
  id?: string;
  isSender?: boolean;
  setFilterCondition: Dispatch<SetStateAction<FilterConditionTypes>>;
}
export default function ListContainer({
  image,
  name,
  id = "",
  setFilterCondition,
  isSender,
}: Props) {
  const [checked, setChecked] = useState<boolean>(false);

  const onChangeCheckBox = () => {
    if (isSender) {
      if (checked) {
        setFilterCondition((prev) => ({
          ...prev,
          senders: prev.senders.filter((item) => item !== id),
        }));
      } else {
        setFilterCondition((prev) => ({
          ...prev,
          senders: [...prev.senders, id],
        }));
      }
    } else {
      if (checked) {
        setFilterCondition((prev) => ({
          ...prev,
          tags: prev.tags.filter((item) => item !== id),
        }));
      } else {
        setFilterCondition((prev) => ({
          ...prev,
          tags: [...prev.tags, id],
        }));
      }
    }

    setChecked((prev) => !prev);
  };

  return (
    <S.ListLayout>
      <S.NameContainer>
        {isSender && (
          <S.ImageWrapper>
            <Image
              src={image || "/icons/icon__kakao-profile-image--default.svg"}
              alt="프로필이미지"
              width={24}
              height={24}
              priority
            />
          </S.ImageWrapper>
        )}
        <S.Name>{name}</S.Name>
      </S.NameContainer>

      <Checkbox checked={checked} onChange={onChangeCheckBox} />
    </S.ListLayout>
  );
}
