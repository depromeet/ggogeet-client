/* eslint-disable react/no-unescaped-entities */
import Tag from "@/src/components/common/Tag";
import { situationTemplatesData } from "@/src/data/LetterWrite";
import { getLetterListType } from "@/src/types/letter";
import * as S from "./styled";

interface Props {
  letter: getLetterListType;
  // 임시
}
export default function LetterContainer({ letter }: Props) {
  const { senderNickname, id, receivedAt, title, situationId } = letter;

  const situationColor = situationTemplatesData[situationId - 1].color;

  return (
    <S.LetterLayout>
      <S.StatusAndSenderContainer>
        <Tag
          label={situationTemplatesData[situationId - 1].title}
          color={situationColor}
        />

        <S.SenderContainer>
          <S.From color={situationColor}>FROM</S.From>
          <S.Sender>{senderNickname}</S.Sender>
        </S.SenderContainer>
      </S.StatusAndSenderContainer>

      <S.ContentContainer>
        {/* 임시 따옴표  */}
        <S.Quotation color={situationColor}>"</S.Quotation>
        <S.Content>{title}</S.Content>
        <S.Quotation color={situationColor}>"</S.Quotation>
      </S.ContentContainer>

      <S.Date>{receivedAt}</S.Date>
    </S.LetterLayout>
  );
}
