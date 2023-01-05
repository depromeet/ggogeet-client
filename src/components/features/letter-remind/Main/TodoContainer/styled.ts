import { Body2, Body4, Caption1 } from "@/src/styles/commons";
import theme from "@/src/styles/theme";
import styled from "@emotion/styled";

interface TodoLayoutProps {
  isComplete: boolean;
  isAlarm: boolean;
}

export const TodoLayout = styled.div<TodoLayoutProps>`
  border-radius: ${theme.radius.md};
  background-color: ${({ theme }) => theme.colors.gray6};
  opacity: ${({ isComplete }) => (isComplete ? "20%" : "100%")};
  cursor: pointer;
`;

export const TodoContentLayout = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TodoTitleContainer = styled.div`
  display: flex;
  padding: 16px 0;
  justify-content: space-between;
`;
interface TodoContentContainerProps {
  isClicked: boolean;
}

export const TodoContentContainer = styled.div<TodoContentContainerProps>`
  padding: 14px 0;
  border-top: ${({ isClicked, theme }) =>
    isClicked ? `1px solid ${theme.colors.gray5}` : "none"};
  background-color: ${({ theme }) => theme.colors.gray6};
`;

export const TodoInnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 8px 0 0;
`;

export const BellIconWrapper = styled.div`
  margin: 0 6px 0 0;
  display: flex;
  align-items: center;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Body4}
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  padding: 0 8px 0 0;
  ${Caption1}
`;

export const ContentUpperContainer = styled.div`
  margin: 0 0 10px 0;
`;

interface SenderProps {
  color: string;
}

export const Sender = styled.p<SenderProps>`
  color: ${({ color }) => color};
  margin: 0 0 8px 0;
  ${Body2}
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.white};
  // white-space: pre-line
  ${Body2}
`;

export const ContentLowerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px 0 0 0;
`;

export const Space = styled.div`
  width: 12px;
`;

export const TodoAlarmLayout = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.navy70};
  border-radius: ${({ theme }) =>
    ` 0 0  ${theme.radius.md} ${theme.radius.md}`};
  padding: 8px;
`;

export const AlarmTalk = styled.p`
  color: ${({ theme }) => theme.colors.gray2};
  ${Caption1}
`;

export const AlarmDate = styled.p`
  color: ${({ theme }) => theme.colors.yellow};
  ${Caption1}
`;
