import { Body1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const NavigationBarLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 264px;
  height: 40px;
  padding: 4px;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.gray5};
`;

interface NavigationProps {
  isSelected: boolean;
}

export const Navigation = styled.p<NavigationProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 126px;
  height: 32px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.navy : theme.colors.gray3};
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.gray5};
  border-radius: 20px;
  cursor: pointer;

  ${Body1};
`;
