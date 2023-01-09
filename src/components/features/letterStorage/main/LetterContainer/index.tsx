/* eslint-disable react/no-unescaped-entities */
import * as S from "./styled";

interface Props {
  letter: {
    sender: string;
    content: string;
    status: string;
    date: string;
    color: string;
    id: string;
  };
}
export default function LetterContainer({ letter }: Props) {
  const { sender, content, date, color, status } = letter;

  return (
    <S.LetterLayout>
      <S.StatusAndSenderContainer>
        {status}

        <S.SenderContainer>
          <S.From color={color}>FROM</S.From>
          <S.Sender>{sender}</S.Sender>
        </S.SenderContainer>
      </S.StatusAndSenderContainer>

      <S.ContentContainer>
        {/* 임시 따옴표  */}
        <S.Quotation color={color}>"</S.Quotation>
        <S.Content>{content}</S.Content>
        <S.Quotation color={color}>"</S.Quotation>
      </S.ContentContainer>

      <S.Date>{date}</S.Date>
    </S.LetterLayout>
  );
}
