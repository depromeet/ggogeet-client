import { Body5, Display2 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 0 16px 0;
`;

export const NavigationsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

interface NavigationProps {
  isSelected: boolean;
}

export const Navigation = styled.p<NavigationProps>`
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray3};
  padding: 0 16px 0 0;
  cursor: pointer;
  ${({ isSelected }) => (isSelected ? Display2 : Body5)};
`;
