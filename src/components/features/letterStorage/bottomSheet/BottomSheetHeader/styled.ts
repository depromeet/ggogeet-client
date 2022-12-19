<<<<<<< HEAD
import { Body5, Display2 } from "@/src/styles/commons";
=======
import { Body5, Header2 } from "@/src/styles/commons";
>>>>>>> 9529d38 (🚚  파일 이름 변경 및 이동)
import styled from "@emotion/styled";

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
<<<<<<< HEAD
  padding: 28px 0 16px 0;
=======
>>>>>>> 9529d38 (🚚  파일 이름 변경 및 이동)
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
<<<<<<< HEAD
  cursor: pointer;
  ${({ isSelected }) => (isSelected ? Display2 : Body5)};
=======

  // Header2 Body5
>>>>>>> 9529d38 (🚚  파일 이름 변경 및 이동)
`;
