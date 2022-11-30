import styled from "@emotion/styled";

interface TodoContainerWrapperProps {
  isClicked: boolean;
}

export const TodoContainerWrapper = styled.div<TodoContainerWrapperProps>`
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: ${(props) => (props.isClicked ? "8px 8px 0 0" : "8px")};
  cursor: pointer;
  background-color: antiquewhite;
`;

export const TodoContainerInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TodoContainerContentWrapper = styled.div`
  padding: 0 16px 12px 16px;
  border-radius: 0 0 8px 8px;
  background-color: antiquewhite;
`;

export const ContentUpperWrapper = styled.div`
  margin: 0 0 10px 0;
`;

export const ContentLowerWrapper = styled.div``;

export const TodoContainerContentInnerWrapper = styled.div`
  margin: 0 0 0 29px;
`;

export const DateWrapper = styled.div`
  padding: 0 8px 0 0;
`;

export const CheckboxWrapper = styled.div`
  padding: 0 8px 0 0;
`;

export const BellIconWrapper = styled.div`
  padding: 0 4px 0 0;
`;

export const line = styled.div`
  height: 1px;
  margin: 0 0 12px 0;
  background-color: #a4a9b8;
`;
