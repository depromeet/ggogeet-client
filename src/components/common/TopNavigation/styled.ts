import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const TopNavigationWrapper = styled.header`
  padding: 10px 16px;
  height: 44px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const TopNavigationLeftElem = styled.span`
  position: absolute;
  left: 16px;
`;

export const TopNavigationTitle = styled.span<{ isCenter: boolean }>`
  ${({ isCenter }) =>
    isCenter &&
    css`
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    `}
`;

export const TopNavigationRightElem = styled.span`
  position: absolute;
  right: 16px;
`;
