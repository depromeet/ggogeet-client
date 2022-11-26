import { css } from "@emotion/react";
import styled from "@emotion/styled";

export type InputStatus = "inactive" | "active"; // Input 활성화 여부

interface InputStyleProps {
  status: InputStatus;
}

const statusStyle = {
  inactive: css`
    border-color: #e4e7ef;
  `,
  active: css`
    border-color: #a4a9b8;
  `,
} as const;

export const Wrap = styled.div``;
export const Input = styled.input<InputStyleProps>`
  color: #767c8d;

  width: 100%;
  padding-bottom: 8px;
  padding-left: 2px;

  border: none;
  border-bottom: 1px solid;
  outline: none;

  &::placeholder {
    color: #bcc1d0;
  }

  ${({ status }) => statusStyle[status]}
`;
