import { situationTemplatesData } from "@/src/data/LetterWrite";
import theme from "@/src/styles/theme";
import { Dispatch, SetStateAction } from "react";
import * as S from "./styled";

interface Props {
  tagArray: string[];
  isShaped?: boolean;
  clickedTag: number;
  setClickedTag: Dispatch<SetStateAction<number>>;
}

export default function TagsContainer({
  tagArray,
  isShaped = false,
  clickedTag,
  setClickedTag,
}: Props) {
  const onClickTag = (id: number) => {
    setClickedTag(id);
  };

  return (
    <S.TagsContainer>
      {tagArray.map((tag, index) => {
        return (
          <S.TagWrapper key={index} onClick={() => onClickTag(index)}>
            {isShaped ? (
              <S.ShapedTag
                label={situationTemplatesData[index].title}
                color={
                  clickedTag === index
                    ? situationTemplatesData[index].color
                    : theme.colors.gray6
                }
              />
            ) : (
              <S.RoundedTag
                content={tag}
                isSelected={clickedTag === index}
                className="TagButton"
              />
            )}
          </S.TagWrapper>
        );
      })}
    </S.TagsContainer>
  );
}
