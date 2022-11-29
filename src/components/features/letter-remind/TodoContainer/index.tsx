import * as S from "./styled";
import { useState } from "react";
import Image from "next/image";
<<<<<<< HEAD
import ToggleArrowButton from "@/src/components/common/Buttons/ToggleArrowButton";

interface Props {
  todo: {
    title: string;
    date: string;
    situation: string;
    alarm: string;
    content: string;
    isAlarm: boolean;
  };
}

export default function TodoContainer({ todo }: Props) {
  const { title, date, situation, alarm, content, isAlarm } = todo;

  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickContainer = () => setIsClicked((prev) => !prev);

  return (
    <>
      <S.TodoContainerWrapper onClick={onClickContainer}>
        <S.TodoContainerTitleWrapper>
          <S.TodoContainerInnerWrapper>
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
            {title}
          </S.TodoContainerInnerWrapper>

          <S.TodoContainerInnerWrapper>
            <S.DateWrapper> {date}</S.DateWrapper>
            <ToggleArrowButton isClicked={isClicked} />
          </S.TodoContainerInnerWrapper>
        </S.TodoContainerTitleWrapper>

        {isClicked && (
          <S.TodoContainerContentWrapper isClicked={isClicked}>
            <S.ContentUpperWrapper>
              <div>{situation}</div>
              <div> {alarm}</div>
            </S.ContentUpperWrapper>

            <S.ContentLowerWrapper>{content}</S.ContentLowerWrapper>
          </S.TodoContainerContentWrapper>
        )}
      </S.TodoContainerWrapper>
    </>
=======

interface Props {
  title: string;
  date: string;
  isAlarm?: boolean;
}

export default function TodoContainer({ title, date, isAlarm = false }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  const onClickArrow = () => setOpen((prev) => !prev);

  return (
    <S.TodoContainerWrapper>
      <S.TodoContainerInnerWrapper>
        <S.CheckboxWrapper></S.CheckboxWrapper>
        {isAlarm && (
          <S.BellIconWrapper>
            <Image src="/bell.svg" alt="BellImg" width={10} height={12} />
          </S.BellIconWrapper>
        )}
        {title}
      </S.TodoContainerInnerWrapper>

      <S.TodoContainerInnerWrapper>
        <S.DateWrapper> {date}</S.DateWrapper>
        <Image
          src="/smallArrow.svg"
          alt="ArrowImg"
          width={11}
          height={5}
          onClick={onClickArrow}
        />
      </S.TodoContainerInnerWrapper>
    </S.TodoContainerWrapper>
>>>>>>> c287e9b (💄 리마인드 페이지 투두 컴포넌트 생성)
  );
}
