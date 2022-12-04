import TagButton from "@/src/components/common/Buttons/TagButton";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";
import * as S from "./styled";

const tags = [
  "가족",
  "친구",
  "연인",
  "동료",
  "가족가족",
  "친구친구",
  "연인연인",
  "동료동료",
];

const LetterWriteTagContainer = (): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const onSelectTag = (tag: string) => {
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      relationship: tag,
    }));
  };
  return (
    <S.LetterWriteTagContainerWrapper>
      {tags.map((tag) => (
        <TagButton
          key={tag}
          content={tag}
          isDark={true}
          isSelected={letterWriteInputObjectState.relationship === tag}
          onClick={() => onSelectTag(tag)}
        />
      ))}
    </S.LetterWriteTagContainerWrapper>
  );
};

export default LetterWriteTagContainer;
