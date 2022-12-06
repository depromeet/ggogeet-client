import styled from "@emotion/styled";

export const TodoLayout = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
  background-color: antiquewhite; // 임시
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
  border-top: ${({ isClicked }) => (isClicked ? "1px solid #a4a9b8" : "none")};
  background-color: antiquewhite; // 임시
`;

export const TodoInnerContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ContentUpperContainer = styled.div`
  margin: 0 0 10px 0;
`;

export const ContentLowerContainer = styled.div``;

export const DateWrapper = styled.div`
  padding: 0 8px 0 0;
`;

export const CheckboxWrapper = styled.div`
  padding: 0 8px 0 0;
`;

export const BellIconWrapper = styled.div`
  padding: 0 4px 0 0;
`;
