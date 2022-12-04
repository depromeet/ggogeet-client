import { Body3, Caption2, Header3 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const LetterLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  height: 120px;
  background-color: #e4e7ef;
  border-radius: 4px;
`;

export const LetterLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SenderContainer = styled.div`
  padding: 0 0 25px 0;

  ${Body3}
`;

export const ContentContainer = styled.div`
  padding: 0 0 4px 0;

  ${Header3}
`;

export const DateContainer = styled.div`
  ${Caption2}
`;
