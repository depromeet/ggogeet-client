import { Display1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const NavigationBarLayout = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Navigation = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  ${Display1}
`;

export const NavigationNumber = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  padding: 0 0 0 4px;
  ${Display1}
`;

interface NavigationWrapperProps {
  isSelected: boolean;
}

export const NavigationWrapper = styled.div<NavigationWrapperProps>`
  display: flex;
  flex-direction: row;
  padding: 8px 4px;
  border-bottom: ${({ theme, isSelected }) =>
    isSelected && `2px solid ${theme.colors.white}`};
  margin: 0 16px 0 0;
  cursor: pointer;

  & > ${Navigation} {
    color: ${({ theme, isSelected }) => isSelected && theme.colors.white};
  }

  & > ${NavigationNumber} {
    color: ${({ theme, isSelected }) => isSelected && theme.colors.purple};
  }
`;
