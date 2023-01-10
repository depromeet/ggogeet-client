import * as S from "./styled";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  calendarValue: Date;
  setCalendarValue: Dispatch<SetStateAction<Date>>;
}

export default function Calendar({ calendarValue, setCalendarValue }: Props) {
  return (
    <>
      <S.CustomCalendar
        value={calendarValue}
        onChange={setCalendarValue}
        next2Label={null}
        prev2Label={null}
        showNeighboringMonth={false}
        formatDay={(_, date) => date.toLocaleString("en", { day: "numeric" })}
        locale={"en"}
      />
    </>
  );
}
