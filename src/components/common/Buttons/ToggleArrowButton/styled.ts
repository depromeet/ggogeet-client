import styled from "@emotion/styled";

interface ToggleArrowButtonContainerProps {
  isClicked: boolean;
}

export const ToggleArrowButtonContainer = styled.button<ToggleArrowButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ isClicked }) => (isClicked ? "rotate(180deg)" : "rotate(0)")};
`;
