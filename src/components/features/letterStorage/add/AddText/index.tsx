import * as S from "./styled";

interface Props {}

export default function AddText({}: Props) {
  return (
    <S.AddTextLayout>
      <S.LetterAddTextAreaWrapper>
        <S.LetterAddTextArea />
      </S.LetterAddTextAreaWrapper>
    </S.AddTextLayout>
  );
}
