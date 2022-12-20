import { Body2 } from "@/src/styles/commons";
<<<<<<< HEAD
=======
<<<<<<< HEAD
import theme from "@/src/styles/theme";
=======
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
>>>>>>> b263df0 (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
import styled from "@emotion/styled";

export const ListLayout = styled.div`
  display: flex;
  justify-content: space-between;
<<<<<<< HEAD
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
=======
  padding: 12px 0;
`;

export const NameContainer = styled.div``;

export const Name = styled.p`
  ${Body2}
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
`;
