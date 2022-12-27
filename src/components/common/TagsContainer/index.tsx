import * as S from "./styled";

interface Props {
  tagArray: string[];
  // NOTE: 어떤 태그가 클릭됐는지 알 수 있는 props 추가하기
}

export default function TagsContainer({ tagArray }: Props) {
  let clickedButton = 1; // NOTE: 클릭시 적용되는 스타일 테스트를 위한 임시 변수

  return (
    <S.TagsContainer>
      {tagArray.map((tag, index) => {
        return (
          <S.TagWrapper key={index}>
            <S.Tag content={tag} isClicked={clickedButton === index} />
          </S.TagWrapper>
        );
      })}
    </S.TagsContainer>
  );
}
