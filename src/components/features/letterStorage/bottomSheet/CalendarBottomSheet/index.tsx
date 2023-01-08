import * as S from "./styled";
import { useState } from "react";

interface Props {}

export default function CalendarBottomSheet({}: Props) {
  const [calendarValue, setCalendarValue] = useState(new Date());

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
