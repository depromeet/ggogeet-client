import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Header2, Header4 } from '@/src/styles/commons';

export const TopNavigationWrapper = styled.header`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TopNavigationTitle = styled.span<{
  isCenter: boolean;
}>`
  color: #767c8d;
  ${({ isCenter }) =>
    isCenter
      ? css`
          line-height: 21px;
          ${Header4}
        `
      : css`
          line-height: 24px;
          ${Header2}
        `}
`;
