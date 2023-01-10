import * as S from "./styled";
import { useState } from "react";
import Image from "next/image";
import ToggleArrowButton from "@/src/components/common/Buttons/ToggleArrowButton";
import Checkbox from "@/src/components/common/Buttons/Checkbox";
import EditButton from "../EditButton";
import DeleteButton from "../DeleteButton";
import dayjs from "dayjs";
import { deleteReminder } from "@/src/apis/reminder";
import { useToast } from "@/src/hooks/useToast";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getReminderItem,
  patchReminderDone,
  patchRemindUndone,
} from "@/src/apis/reminder";
import { situationTemplatesData } from "@/src/data/LetterWrite";

interface Props {
  itemId: number;
  isDone: boolean;
  refetchList: () => void;
}

export default function TodoContainer({ itemId, isDone, refetchList }: Props) {
  const { setToast } = useToast();
  const { data: reminderItemData } = useQuery({
    queryKey: ["getReminderItem", itemId],
    queryFn: () => getReminderItem(itemId),
  });

  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(isDone);

  const { title, content, alarmAt, eventAt, alertOn, situationId } =
    reminderItemData || {};

  const onClickDeleteMemo = async () => {
    const data = await deleteReminder(itemId);
    if (data) {
      setToast({
        status: "success",
        content: "메모가 삭제되었어요.",
      });
      refetchList();
    }
  };

  const patchReminderDoneMutation = useMutation({
    mutationKey: ["patchReminderDone", checked],
    mutationFn: patchReminderDone,
    onSuccess: () => {},
  });

  const patchReminderUndoneMutation = useMutation({
    mutationKey: ["patchReminderUndone", checked],
    mutationFn: patchRemindUndone,
    onSuccess: () => {},
  });

  const formatedEventAt = dayjs(eventAt).format("YY.MM.DD");
  const alarmAnnouncement = dayjs(eventAt).diff(dayjs(alarmAt), "d");

  const situation = situationTemplatesData.find(
    (item) => item.situationId === situationId
  )!;

  const onChangeCheckBox = () => {
    if (checked) {
      setChecked(false);
      patchReminderUndoneMutation.mutate(itemId);
    } else {
      setChecked(true);
      patchReminderDoneMutation.mutate(itemId);
    }
  };

  const onClickContainer = () => setIsClicked((prev) => !prev);

  return (
    <S.TodoLayout isComplete={isDone ?? false} isAlarm={alertOn ?? false}>
      <S.TodoContentLayout>
        <S.TodoTitleContainer onClick={onClickContainer}>
          <S.TodoInnerContainer>
            <S.CheckBoxWrapper>
              <Checkbox checked={checked} onChange={onChangeCheckBox} isRound />
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
            <S.Date>{formatedEventAt}</S.Date>
            <ToggleArrowButton isClicked={isClicked} />
          </S.TodoInnerContainer>
        </S.TodoTitleContainer>

        {isClicked && (
          <S.TodoContentContainer isClicked={isClicked}>
            <S.ContentUpperContainer>
              {/* TODO: 상황이름 데이터 값이 없음 */}
              <S.Sender color={situation.color}>상황이름</S.Sender>
              <S.Content>{content}</S.Content>
            </S.ContentUpperContainer>

            <S.ContentLowerContainer>
              {/* TODO: 편집하기 인터렉션 정의 후 처리 */}
              {/* <EditButton /> */}
              <S.Space />
              <DeleteButton isDeleted={() => onClickDeleteMemo()} />
            </S.ContentLowerContainer>
          </S.TodoContentContainer>
        )}
      </S.TodoContentLayout>

      {alertOn && isClicked && (
        <S.TodoAlarmLayout>
          <S.AlarmDate>{alarmAnnouncement}</S.AlarmDate>
          <S.AlarmTalk>일 전에 알려드릴게요!</S.AlarmTalk>
        </S.TodoAlarmLayout>
      )}
    </S.TodoLayout>
  );
}
