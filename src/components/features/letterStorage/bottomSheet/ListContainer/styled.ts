import { Body2 } from "@/src/styles/commons";
import theme from "@/src/styles/theme";
import styled from "@emotion/styled";

export const ListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 15px 12px 12px;
  border-radius: 8px;

  :hover {
    background-color: ${({ theme }) => theme.colors.navy30};
  }
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${Body2};
`;
