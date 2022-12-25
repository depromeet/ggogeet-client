import { Body2, Body4 } from "@/src/styles/commons";
import theme from "@/src/styles/theme";
import styled from "@emotion/styled";

interface TodoLayoutProps {
  isComplete: boolean;
}

export const TodoLayout = styled.div<TodoLayoutProps>`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: ${theme.radius.md};
  background-color: ${({ theme }) => theme.colors.white};
  opacity: ${({ isComplete }) => (isComplete ? "50%" : "100%")};
  cursor: pointer;
`;

export const TodoTitleContainer = styled.div`
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
`;
interface TodoContentContainerProps {
  isClicked: boolean;
}

export const TodoContentContainer = styled.div<TodoContentContainerProps>`
  padding: 12px 10px 12px 30px;
  border-top: ${({ isClicked, theme }) =>
    isClicked ? `1px solid ${theme.colors.gray2}` : "none"};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const TodoInnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentUpperContainer = styled.div`
  margin: 0 0 10px 0;
`;

export const ContentLowerContainer = styled.div``;

export const ContentUpperContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 5px 0;
`;

export const CheckboxWrapper = styled.div`
  padding: 0 8px 0 0; // 체크박스 컴포넌트 추가되면 삭제 예정
`;

export const BellIconWrapper = styled.div`
  padding: 0 4px 0 0;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${Body2}
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  padding: 0 8px 0 0;
  ${Body4}
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  // white-space: pre-line
  ${Body4}
`;

export const SituationAndAlarm = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  padding: 0 8px 0 0;

  ${Body4}
`;
