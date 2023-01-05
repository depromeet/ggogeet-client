import { Body2 } from "@/src/styles/commons";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 880696c (💄 letter-storage 페이지 바텀시트 스타일 수정)
<<<<<<< HEAD
import theme from "@/src/styles/theme";
=======
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
<<<<<<< HEAD
>>>>>>> b263df0 (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
=======
=======
import theme from "@/src/styles/theme";
>>>>>>> d33a397 (💄 letter-storage 페이지 바텀시트 스타일 수정)
>>>>>>> 880696c (💄 letter-storage 페이지 바텀시트 스타일 수정)
import styled from "@emotion/styled";

export const ListLayout = styled.div`
  display: flex;
  justify-content: space-between;
<<<<<<< HEAD
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
=======
  padding: 12px 15px 12px 12px;
  border-radius: 8px;
>>>>>>> d33a397 (💄 letter-storage 페이지 바텀시트 스타일 수정)
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Name = styled.p`
<<<<<<< HEAD
  ${Body2}
>>>>>>> fa5ebff (💄 LetterBox 페이지 bottomSheet 대략적 레이아웃 구성)
=======
  color: ${({ theme }) => theme.colors.white};
  ${Body2};
>>>>>>> d33a397 (💄 letter-storage 페이지 바텀시트 스타일 수정)
`;
