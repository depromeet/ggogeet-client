import { Caption1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const SortKind = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding: 0 0 0 4px;
  ${Caption1}
`;
