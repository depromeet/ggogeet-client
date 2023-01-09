import {
  Body2,
  Body4,
  Caption1,
  Caption2,
  Display3,
} from "@/src/styles/commons";
import styled from "@emotion/styled";

export const LetterLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px 20px 12px;
  background-color: ${({ theme }) => theme.colors.gray6};
  border-radius: 8px;
`;

export const StatusAndSenderContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const SenderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface FromProps {
  color: string;
}

export const From = styled.p<FromProps>`
  color: ${({ color }) => color};
  ${Caption2};
`;

export const Sender = styled.p`
  color: ${({ theme }) => theme.colors.gray3};
  margin: 0 0 0 4px;
  ${Body2};
`;

export const ContentContainer = styled.div`
  padding: 0 0 4px 0;
  display: flex;
  flex-direction: row;
  margin: 20px 0 10px 0;

  ${Display3}
`;

export const Content = styled.p`
  color: ${({ theme }) => theme.colors.white};
  padding: 0 2px;
  ${Body4};
`;

interface quotationProps {
  color: string;
}

export const Quotation = styled.p<quotationProps>`
  color: ${({ color }) => color};
`;

export const Date = styled.p`
  color: ${({ theme }) => theme.colors.gray4};
  ${Caption1}
`;
