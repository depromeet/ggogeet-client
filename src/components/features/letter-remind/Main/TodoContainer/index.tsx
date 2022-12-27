import * as S from "./styled";
import { useState } from "react";
import Image from "next/image";
import ToggleArrowButton from "@/src/components/common/Buttons/ToggleArrowButton";
import Checkbox from "@/src/components/common/Buttons/Checkbox";

interface Props {
  todo: {
    title: string;
    date: string;
    alarm: string;
    content: string;
    sender: string;
    isAlarm: boolean;
    isComplete: boolean;
    color: string;
  };
}

export default function TodoContainer({ todo }: Props) {
  const { title, date, alarm, content, isAlarm, sender, isComplete, color } =
    todo;

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickContainer = () => setIsClicked((prev) => !prev);

  return (
    <S.TodoLayout onClick={onClickContainer} isComplete={isComplete}>
      <S.TodoTitleContainer>
        <S.TodoInnerContainer>
          <S.CheckBoxWrapper>
            <Checkbox isChecked={false} isRound />
          </S.CheckBoxWrapper>

          {isAlarm && (
            <S.BellIconWrapper>
              <Image
                src="/icons/yellowBell.svg"
                alt="알람아이콘"
                width={16}
                height={16}
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
            <S.Sender color={color}>{sender}</S.Sender>
            <S.Content>{content}</S.Content>
          </S.ContentUpperContainer>

          <S.ContentLowerContainer></S.ContentLowerContainer>
        </S.TodoContentContainer>
      )}
    </S.TodoLayout>
  );
}
