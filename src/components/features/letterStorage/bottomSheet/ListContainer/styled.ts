import { Body2 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const ListLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  border-radius: 8px;

  ${Body2};
`;

export const ImageWrapper = styled.div`
  border-radius: 50%;
  overflow: auto;
  width: 24px;
  height: 24px;
  margin: 0 8px 0 0;
`;
