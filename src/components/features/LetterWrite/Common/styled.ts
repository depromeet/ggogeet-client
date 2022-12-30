import { Body1, Body2, Body4 } from "@/src/styles/commons";
import theme from "@/src/styles/theme";
import styled from "@emotion/styled";

const LetterWriteAccordionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  li {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px 16px;
    gap: 8px;
    background-color: ${theme.colors.navy30};
    border-radius: ${theme.radius.md};
  }
`;

const AccordionHeader = styled.button<{ isClicked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div:first-of-type {
    max-width: 70%;
    display: flex;
    align-items: center;
    gap: 4px;
    span {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 150%;
      letter-spacing: -0.5px;
      color: ${theme.colors.white};
      ${Body4}
    }
  }
  & > div:last-of-type {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      line-height: 14px;
      letter-spacing: -0.2px;
      color: ${theme.colors.gray3};
      ${Body1}
    }
    img {
      transition: transform 0.2s ease;
      ${({ isClicked }) =>
        isClicked &&
        `
          transform: rotate(-180deg);
          transition: transform 0.2s ease;
      `}
    }
  }
`;

const AccordionContents = styled.p`
  line-height: 150%;
  letter-spacing: -0.2px;
  color: ${theme.colors.gray2};
  ${Body2};
`;

export { LetterWriteAccordionWrapper, AccordionHeader, AccordionContents };