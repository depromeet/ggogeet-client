import * as S from "./styled";

interface Props {
  tagArray: string[];
}

export default function TagsContainer({ tagArray }: Props) {
  return (
    <S.TagsContainer>
      {tagArray.map((tag, index) => {
        return (
          <S.TagWrapper key={index}>
            <S.Tag content={tag} />
          </S.TagWrapper>
        );
      })}
    </S.TagsContainer>
  );
}
