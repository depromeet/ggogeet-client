import * as S from "./styled";
import { useState } from "react";
import Image from "next/image";
import ToggleArrowButton from "@/src/components/common/Buttons/ToggleArrowButton";

interface Props {
  todo: {
    title: string;
    date: string;
    situation: string;
    alarm: string;
    content: string;
    isAlarm: boolean;
    isComplete: boolean;
  };
}

export default function TodoContainer({ todo }: Props) {
  const { title, date, situation, alarm, content, isAlarm, isComplete } = todo;

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickContainer = () => setIsClicked((prev) => !prev);

  return (
    <S.TodoLayout onClick={onClickContainer} isComplete={isComplete}>
      <S.TodoTitleContainer>
        <S.TodoInnerContainer>
          <S.CheckboxWrapper></S.CheckboxWrapper>
          {isAlarm && (
            <S.BellIconWrapper>
              <Image
                src="/icons/bell.svg"
                alt="BellImg"
                width={10}
                height={12}
              />
            </S.BellIconWrapper>
          )}
          <S.Title>{title}</S.Title>
        </S.TodoInnerContainer>

        <S.TodoInnerContainer>
          <S.Date>{date}</S.Date>
          <ToggleArrowButton isClicked={isClicked} />
        </S.TodoInnerContainer>
      </S.TodoTitleContainer>

      {isClicked && (
        <S.TodoContentContainer isClicked={isClicked}>
          <S.ContentUpperContainer>
            <S.ContentUpperContentsContainer>
              <S.SituationAndAlarm>상황</S.SituationAndAlarm>
              <S.Content>{situation}</S.Content>
            </S.ContentUpperContentsContainer>

            <S.ContentUpperContentsContainer>
              <S.SituationAndAlarm>알림</S.SituationAndAlarm>
              <S.Content>{alarm}</S.Content>
            </S.ContentUpperContentsContainer>
          </S.ContentUpperContainer>

          <S.ContentLowerContainer>
            <S.Content>{content}</S.Content>
          </S.ContentLowerContainer>
        </S.TodoContentContainer>
      )}
    </S.TodoLayout>
  );
}
