import { Body4 } from "@/src/styles/commons";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const ButtonWrapper = styled.button<{
  outline?: boolean;
  isRound?: boolean;
  isPressed?: boolean;
}>`
  padding: 16px;
  color: ${({ outline, isPressed, theme: { colors } }) =>
    outline ? (isPressed ? colors.gray1 : colors.gray2) : colors.white};
  background-color: ${({ outline, isPressed, theme: { colors } }) =>
    outline ? "transparent" : isPressed ? colors.gray6 : colors.gray5};
  border-radius: ${({ isRound, theme: { radius } }) =>
    isRound ? "28px" : radius.sm};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ outline, isPressed, theme: { colors } }) =>
    outline &&
    css`
      border: 1px solid ${isPressed ? colors.gray1 : colors.gray2};
    `}

  &:disabled {
    background-color: ${({ outline, theme: { colors } }) =>
      outline ? "transparent" : colors.gray6};
    color: ${({ outline, theme: { colors } }) =>
      outline ? colors.gray5 : colors.gray4};

    ${({ outline, theme: { colors } }) =>
      outline &&
      css`
        border: 1px solid ${colors.gray4};
      `}
  }
`;

export const ButtonName = styled.span`
  line-height: 24px;
  background-color: transparent;

  ${Body4}
`;
