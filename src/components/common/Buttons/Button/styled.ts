import styled from "@emotion/styled";
import { Body4, Caption1 } from "@/src/styles/commons";
import { css } from "@emotion/react";
import { ButtonSize } from "./types";

const buttonSizeMap: {
  [key in ButtonSize]: string;
} = {
  sm: "4px 8px",
  md: "8px",
  lg: "12px 16px",
  xl: "16px",
};

export const ButtonWrapper = styled.button<{
  size: ButtonSize;
  outline?: boolean;
  isRound?: boolean;
  isPressed?: boolean;
}>`
  width: 100%;
  padding: ${({ size }) => buttonSizeMap[size]};
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

export const ButtonName = styled.span<{
  size: ButtonSize;
}>`
  ${({ size }) =>
    size === "sm" || size === "md"
      ? css`
          line-height: 18px;
          ${Caption1}
        `
      : css`
          line-height: 24px;
          ${Body4}
        `}
  background-color: transparent;
`;
