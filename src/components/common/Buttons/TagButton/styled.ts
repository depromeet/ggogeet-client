import styled from "@emotion/styled";
import { Body3, Body4, Caption1 } from "@/src/styles/commons";

type TabButtonProps = {
  disabled: boolean;
  isDark: boolean;
  isSelected: boolean;
};

export const TagButtonWrapper = styled.button<TabButtonProps>`
  cursor: pointer;
  position: relative;
  padding: ${({ disabled, isDark }) =>
      disabled ? "4px" : isDark ? "6px" : "10px"}
    12px;
  background: ${({ isDark, theme: { colors } }) =>
    isDark ? "#f0f2f7" : colors.white};
  color: ${({ isSelected }) => (isSelected ? "#767C8D" : "#989fb3")};
  border-radius: ${({ disabled, isDark }) =>
    disabled ? "14px" : isDark ? "25px" : "18px"};
  line-height: ${({ disabled }) => (disabled ? "14px" : "17px")};

  ${({ disabled, isDark, isSelected }) =>
    disabled ? Caption1 : !isDark && isSelected ? Body3 : Body4}
`;

export const SelectedTagBorder = styled.div<TabButtonProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: ${({ disabled, isDark }) =>
    disabled ? "14px" : isDark ? "25px" : "18px"};
  border: ${({ isSelected, isDark }) =>
    isSelected ? "1px solid #767C8D" : isDark ? "none" : "1px solid #E4E7EF"};
`;
