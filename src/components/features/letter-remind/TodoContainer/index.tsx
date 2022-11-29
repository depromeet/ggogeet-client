import * as S from "./styled";
import { useState } from "react";
import Image from "next/image";

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
  );
}
