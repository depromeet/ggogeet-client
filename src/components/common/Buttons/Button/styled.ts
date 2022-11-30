import { SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import { Body3, Body4, Header5 } from '@/src/styles/commons';
import { FontStyle } from './types';

const fontStyleMap: {
  [key in FontStyle]: SerializedStyles;
} = {
  light: Body4,
  medium: Body3,
  bold: Header5,
} as const;

export const ButtonWrapper = styled.button<{
  fontStyle: FontStyle;
  isDark: boolean;
  isRound: boolean;
}>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 16px;
  background-color: ${({ isDark, theme: { colors } }) =>
    isDark ? '#767C8D' : colors.white};
  color: ${({ isDark, theme: { colors } }) =>
    isDark ? colors.white : '#767C8D'};
  border-radius: ${({ isRound }) => (isRound ? '24px' : '8px')};
  line-height: 21px;
  letter-spacing: -0.005em;

  ${({ fontStyle }) => fontStyleMap[fontStyle]}

  &:disabled {
    background-color: #e4e7ef;
    color: ${({ theme: { colors } }) => colors.white};
    line-height: 24px;
    letter-spacing: -0.005em;
    ${Header5}
  }
`;
