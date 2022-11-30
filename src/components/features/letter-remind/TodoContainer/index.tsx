import * as S from "./styled";
import { useState } from "react";
import Image from "next/image";
import ToggleArrowButton from "@/src/components/common/Buttons/ToggleArrowButton";

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
        <ToggleArrowButton />
      </S.TodoContainerInnerWrapper>
    </S.TodoContainerWrapper>
  );
}
