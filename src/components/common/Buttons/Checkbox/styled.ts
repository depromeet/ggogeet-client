import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CheckboxWrapper = styled.div<{
  isRound: boolean;
  isFocused: boolean;
}>`
  display: flex;
  align-items: center;
  & > input {
    display: none;
    & + label {
      display: inline-block;
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
            `}
      background-color: ${({ isFocused, theme: { colors } }) =>
        isFocused ? colors.gray5 : colors.gray4};
    }
    &:checked + label {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${({ theme: { colors } }) => colors.yellow};
      &::after {
        background: url("/icons/check_ico.svg") no-repeat 0px 0px;
        content: "";
        display: inline-block;
        width: 12px;
        height: 8px;
      }
    }
  }
`;
