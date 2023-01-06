import { Caption1 } from "@/src/styles/commons";
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
