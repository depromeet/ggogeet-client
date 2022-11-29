import styled from "@emotion/styled";

export const TodoContainerWrapper = styled.div`
<<<<<<< HEAD
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  cursor: pointer;
  background-color: antiquewhite; // 임시
`;

export const TodoContainerTitleWrapper = styled.div`
  display: flex;
  padding: 12px 0;
  justify-content: space-between;
`;

interface TodoContainerContentWrapperProps {
  isClicked: boolean;
}

export const TodoContainerContentWrapper = styled.div<TodoContainerContentWrapperProps>`
  padding: 12px 10px 12px 30px;
  border-top: ${(props) => (props.isClicked ? "1px solid #a4a9b8" : "none")};
  background-color: antiquewhite; // 임시
=======
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
>>>>>>> c287e9b (💄 리마인드 페이지 투두 컴포넌트 생성)
`;

export const TodoContainerInnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

<<<<<<< HEAD
export const ContentUpperWrapper = styled.div`
  margin: 0 0 10px 0;
`;

export const ContentLowerWrapper = styled.div``;

=======
>>>>>>> c287e9b (💄 리마인드 페이지 투두 컴포넌트 생성)
export const DateWrapper = styled.div`
  padding: 0 8px 0 0;
`;

export const CheckboxWrapper = styled.div`
  padding: 0 8px 0 0;
`;

export const BellIconWrapper = styled.div`
  padding: 0 4px 0 0;
`;
