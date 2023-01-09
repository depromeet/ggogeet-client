import { css } from "@emotion/react";
import styled from "@emotion/styled";

import type { Theme } from "@emotion/react";

export type Status = "inactive" | "active"; // Input 활성화 여부
export type StyleOption = "underline" | "fill"; // Input 스타일 옵션

interface InputStyleProps {
  status: Status;
  styleOption: StyleOption;
}

const inputUnderline = (theme: Theme) => css`
  border-bottom: 1px solid;
  border-color: ${theme.colors.gray4};
  padding: 8px 2px;
`;

const inputFill = (theme: Theme) => css`
  padding: 12px;
  border-radius: ${theme.radius.md};
`;

export const Wrap = styled.div<InputStyleProps>`
  display: flex;
  align-items: center;
  ${({ styleOption, theme }) =>
    styleOption === "underline" ? inputUnderline(theme) : inputFill(theme)}
`;
export const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  caret-color: ${({ theme }) => theme.colors.white};

  border: none;
  outline: none;
  background-color: inherit;
  border-radius: inherit;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray4};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.gray5};
  }
`;

export const ClearButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;

  img {
    width: 16px;
    height: 16px;
  }
`;
