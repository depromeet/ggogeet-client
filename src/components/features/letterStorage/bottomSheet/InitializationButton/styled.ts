import { Caption1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const ButtonLayout = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Initialization = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding: 0 0 0 3px;
  ${Caption1};
`;
