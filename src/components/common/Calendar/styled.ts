import { Caption1, Caption2, Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CustomCalendarProps {
  value: Date;
}

export const CustomCalendar = styled(Calendar)<CustomCalendarProps>`
  background-color: ${({ theme }) => theme.colors.gray5};
  color: ${({ theme }) => theme.colors.gray3};
  border: none;
  width: 100%;

  .react-calendar__tile--now {
    // 오늘
    background-color: ${({ theme }) => theme.colors.gray5};
  }

  .react-calendar__navigation button {
    // 년/월, 화살표버튼
    color: ${({ theme }) => theme.colors.white};
    ${Display2}
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    // 년/월, 화살표버튼 hover, focus될 때
    background-color: ${({ theme }) => theme.colors.gray5};
  }

  .react-calendar__month-view__weekdays {
    // 요일 navigation
    abbr {
      color: ${({ theme }) => theme.colors.gray3};
      text-decoration: none;
      ${Caption2}
    }
  }

  .react-calendar__tile {
    // 날짜 하나
    color: ${({ theme }) => theme.colors.gray3};
    ${Caption1}
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    // 날짜 하나 hover, focus될 때
    background-color: ${({ theme }) => theme.colors.gray5};
  }

  .react-calendar__tile--active {
    // 선택된 날짜
    background-color: ${({ theme }) => theme.colors.gray5};
    ${Caption2}

    abbr {
      background-color: ${({ theme }) => theme.colors.yellow};
      border-radius: 50%;
      border: ${({ theme }) => `10px solid ${theme.colors.yellow}`};
      color: ${({ theme }) => theme.colors.navy};
      padding: ${({ value }) => ((value + "")[8] === "0" ? "0 4px" : "0px")};
    }
  }
`;
