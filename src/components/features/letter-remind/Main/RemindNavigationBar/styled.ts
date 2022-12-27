import { Display1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const NavigationBarLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Navigation = styled.p`
  color: ${({ theme }) => theme.colors.white};

  ${Display1}
`;

export const NavigationNumber = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding: 0 0 0 4px;

  ${Display1}
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 4px;
  border-bottom: ${({ theme }) => `2px solid ${theme.colors.white}`};
  margin: 0 16px 0 0;
`;
