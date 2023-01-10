import * as S from "./styled";
import { useState } from "react";
import Image from "next/image";
import ToggleArrowButton from "@/src/components/common/Buttons/ToggleArrowButton";
import Checkbox from "@/src/components/common/Buttons/Checkbox";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
import { ReminderDataType } from "@/src/types/reminder";
import dayjs from "dayjs";

interface Props {
  todo: ReminderDataType;
}

export default function TodoContainer({ todo }: Props) {
  const { title, content, eventAt, alertOn, alarmAt, isDone, situationId } =
    todo;

  const calculateAlarmDate = (alarmDate: string) => {
    const today = dayjs();
    const alarm = dayjs(alarmDate);

    return today.diff(alarm, "d");
  };

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickContainer = () => setIsClicked((prev) => !prev);

  return (
    <S.TodoLayout
      isComplete={isDone}
      isAlarm={alertOn}
      onClick={onClickContainer}
    >
      <S.TodoContentLayout>
        <S.TodoTitleContainer>
          <S.TodoInnerContainer>
            <S.CheckBoxWrapper>
              <Checkbox checked={false} isRound />
            </S.CheckBoxWrapper>

            {alertOn && (
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
            <S.Date>{eventAt}</S.Date>
            <ToggleArrowButton isClicked={isClicked} />
          </S.TodoInnerContainer>
        </S.TodoTitleContainer>

        {isClicked && (
          <S.TodoContentContainer isClicked={isClicked}>
            <S.ContentUpperContainer>
              {/* TODO: 상황이름 데이터 값이 없음 */}
              <S.Sender color="red">상황이름</S.Sender>
              <S.Content>{content}</S.Content>
            </S.ContentUpperContainer>

            <S.ContentLowerContainer>
              <EditButton />
              <S.Space />
              <DeleteButton />
            </S.ContentLowerContainer>
          </S.TodoContentContainer>
        )}
      </S.TodoContentLayout>

      {alertOn && isClicked && (
        <S.TodoAlarmLayout>
          <S.AlarmDate>{calculateAlarmDate(alarmAt)}</S.AlarmDate>
          <S.AlarmTalk>일 전에 알려드릴게요!</S.AlarmTalk>
        </S.TodoAlarmLayout>
      )}
    </S.TodoLayout>
  );
}
