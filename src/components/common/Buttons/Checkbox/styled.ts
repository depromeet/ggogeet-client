import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const CheckboxWrapper = styled.label<{
  isRound: boolean;
  isChecked: boolean;
}>`
  display: flex;
  align-items: center;

  display: inline-block;
  ${({ isRound }) =>
    isRound
      ? css`
          width: 20px;
          height: 20px;
          border-radius: 50%;
        `
      : css`
          width: 22px;
          height: 22px;
          border-radius: 4px;
        `}
  border: 1px solid ${({ theme: { colors } }) => colors.gray2};

  ${({ isChecked, theme: { colors } }) =>
    isChecked &&
    css`
      border: none;
      background-color: ${colors.gray5};
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        background: url("/Icons/check_ico.svg") no-repeat 0px 0px;
        content: "";
        display: inline-block;
        width: 12px;
        height: 10px;
      }
    `}

  & > input {
    display: none;
  }
`;
