import styled from '@emotion/styled';
import { Body3, Body4, Caption1 } from '@/src/styles/commons';

export const TagButtonWrapper = styled.button<{
  disabled: boolean;
  isDark: boolean;
  isSelected: boolean;
}>`
  padding: ${({ disabled, isDark }) =>
      disabled ? '4px' : isDark ? '6px' : '10px'}
    12px;
  background: ${({ isDark, theme: { colors } }) =>
    isDark ? '#f0f2f7' : colors.white};
  color: ${({ isSelected }) => (isSelected ? '#767C8D' : '#989fb3')};
  border-radius: ${({ disabled, isDark }) =>
    disabled ? '14px' : isDark ? '25px' : '18px'};
  line-height: ${({ disabled }) => (disabled ? '14px' : '17px')};
  border: ${({ isSelected, isDark }) =>
    isSelected ? '1px solid #767C8D' : isDark ? 'none' : '1px solid #E4E7EF'};

  ${({ disabled, isDark, isSelected }) =>
    disabled ? Caption1 : !isDark && isSelected ? Body3 : Body4}
`;
