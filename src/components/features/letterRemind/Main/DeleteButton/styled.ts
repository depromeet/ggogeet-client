import { Caption1, Body4 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const ButtonLayout = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Delete = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  margin: 0 0 0 4px;
  ${Caption1}
`;

export const ModalWrap = styled.div`
  display: flex;
  flex-direction: column;
  button {
    padding: 10px !important;
  }
`;
export const ModalTitle = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding-bottom: 32px;
  ${Body4}
`;

export const YesButton = styled.button``;
export const NoButton = styled.button``;
