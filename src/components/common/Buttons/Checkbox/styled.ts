import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CheckboxWrapper = styled.div`
  display: inline-flex;

  & > input {
    display: none;
  }
`;

export const CheckboxButton = styled.span<{
  isRound: boolean;
  isFocused: boolean;
  checked: boolean;
}>`
  position: relative;
  background-color: ${({ isFocused, theme: { colors } }) =>
    isFocused ? colors.gray5 : colors.gray4};

  ${({ isRound }) =>
    isRound
      ? css`
          width: 24px;
          height: 24px;
          border-radius: 50%;
        `
      : css`
          width: 18px;
          height: 18px;
          border-radius: 2px;
        `};

  ${({ checked, theme: { colors } }) =>
    checked &&
    css`
      background-color: ${colors.yellow};
      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: url("/icons/check_ico.svg") no-repeat 0px 0px;
        content: "";
        display: inline-block;
        width: 12px;
        height: 8px;
      }
    `}
`;
