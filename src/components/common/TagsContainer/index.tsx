import * as S from "./styled";

interface Props {
  tagArray: string[];
  // NOTE: 어떤 태그가 클릭됐는지 알 수 있는 props 추가하기
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
