import theme from "@/src/styles/theme";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

export type Status = "inactive" | "active"; // Input 활성화 여부
export type StyleOption = "underline" | "fill"; // Input 스타일 옵션

interface InputStyleProps {
  status: Status;
  styleOption: StyleOption;
}

const inputUnderline = (status: Status) => css`
  border-bottom: 1px solid;
  border-color: ${status === "active" ? "#a4a9b8" : "#e4e7ef"};
  padding: 8px 2px;
`;
const inputFill = css`
  padding: 12px;
  border-radius: ${theme.radius.md};
  background-color: #f0f2f6;
`;

export const Wrap = styled.div<InputStyleProps>`
  display: flex;
  align-items: center;
  ${({ status, styleOption }) =>
    styleOption === "underline" ? inputUnderline(status) : inputFill}
`;
export const Input = styled.input`
  color: #767c8d;
  border: none;
  outline: none;
  width: 100%;
  background-color: inherit;
  border-radius: inherit;
`;

export const ClearButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
