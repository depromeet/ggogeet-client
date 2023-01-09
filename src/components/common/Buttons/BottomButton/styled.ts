import { Body3, Display1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

export const BottomButtonWrapper = styled.button<{
  isRound: boolean;
  isDark: boolean;
}>`
  cursor: pointer;
  width: 100%;
  padding: ${({ isRound }) => (isRound ? "16px" : "14px")} 0;
  border-radius: ${({ isRound }) => (isRound ? "30px" : "12px")};
  text-align: center;
  line-height: 21px;
  background-color: ${({ isDark, theme: { colors } }) =>
    isDark ? "#767C8D" : colors.white};
  color: ${({ isDark, theme: { colors } }) =>
    isDark ? colors.white : "#767C8D"};

  ${Body3}

  &:disabled {
    background-color: #e4e7ef;
    color: ${({ theme: { colors } }) => colors.white};
    line-height: 24px;
    letter-spacing: -0.005em;
    ${Display1}
  }
`;
