import * as S from "./styled";

interface Props {
  letter: {
    sender: string;
    content: string;
    date: string;
    image: string;
    senderImage: string;
  };
}
export default function LetterContainer({ letter }: Props) {
  const { sender, content, date, image, senderImage } = letter;

  return (
    <S.LetterLayout>
      <S.LetterLeftContainer>
        <S.SenderContainer>{sender}</S.SenderContainer>
        <S.ContentContainer>{content}</S.ContentContainer>
        <S.DateContainer>{date}</S.DateContainer>
      </S.LetterLeftContainer>
    </S.LetterLayout>
  );
}
