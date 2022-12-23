import { Body1, Body2, Body5, Caption1, IconImage } from "@/src/styles/commons";
import theme from "@/src/styles/theme";
import styled from "@emotion/styled";

const LetterWriteMainLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const LetterWriteMainNavRightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  button {
    /* FIXME: 공통 style 이용 */
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.5px;
  }
  button:first-of-type {
    color: #5b5d68;
  }
  button:last-of-type {
    color: #3e4049;
  }
`;

const LetterWriteMainNavTitle = styled.span`
  /* FIXME: 공통 style 이용 */
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #1c1d22;
`;

const ToolbarContainerWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid #e3e3e7;
`;

const ToolbarInnerContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ToolbarWrapper = styled.button`
  ${IconImage}
`;

const TextTipWrapper = styled.div`
  padding: 4px 16px 12px;
  span {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #949494;
  }
`;

const ReactQuillWrapper = styled.div`
  .ql-toolbar {
    display: none;
  }

  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border: none;
  }

  .ql-container {
    width: 100%;
    max-height: calc(100vh - 104px);
    overflow-y: auto;
    background: #ffffff;
  }

  .ql-editor {
    padding: 20px;
    /* FIXME: 공통 style 이용 */
    font-weight: 500;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: -0.005em;
    color: #1c1d22;
  }

  .ql-editor.ql-blank::before {
    /* FIXME: 공통 style 이용 */
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 170%;
    letter-spacing: -0.005em;
    color: #878994;
    left: unset;
    right: unset;
  }
`;

const CustomTextEditorToolbarWrapper = styled.div`
  width: 100%;
  height: 40px;
  padding: 8px 20px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  gap: 16px;
  border-bottom: 1px solid #e3e3e7;
`;

const CustomTextEditorToolbarButton = styled.button`
  cursor: pointer;
  ${IconImage}
`;

const GuidelineMainWrapper = styled.div`
  position: relative;
  height: 448px;
  & > div:first-of-type {
    width: 100%;
    padding: 28px 0 16px 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    strong {
      line-height: 150%;
      letter-spacing: -0.005em;
      color: ${theme.colors.white};
      ${Body5}
    }
    span {
      line-height: 150%;
      letter-spacing: -0.005em;
      color: ${theme.colors.gray3};
      ${Body1}
    }
  }
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: 248px;
    background-color: ${theme.colors.gray5};
    overflow-y: auto;
    li {
      width: inherit;
      button {
        justify-content: space-between;
        width: inherit;
        background-color: ${theme.colors.navy30};
        border-radius: ${theme.radius.md};
      }
    }
  }
  & > div:last-of-type {
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 100%;
    button {
      width: inherit;
      border-radius: 4px;
      gap: 4px;
    }
  }
`;

const GuidelineAddWrapper = styled.div`
  height: 235px;
  & > div:first-of-type {
    width: 100%;
    padding: 28px 0 16px 0;
    display: flex;
    justify-content: space-between;
    strong {
      line-height: 150%;
      letter-spacing: -0.005em;
      color: ${theme.colors.white};
      ${Body5}
    }
  }

  & > ul {
    width: 100%;
    padding: 8px 2px;
    margin: 20px 0 8px 0;
    li {
      line-height: 150%;
      letter-spacing: -0.005em;
      color: ${theme.colors.gray3};
      ${Caption1}
    }
  }
`;

const GuidelineAddInputWrapper = styled.div<{
  currentTextLength: number;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  & > div:first-of-type {
    justify-content: space-between;
    padding: 8px 8px 8px 16px;
    height: 48px;
    border-radius: 8px;
    background-color: ${theme.colors.navy50};
    input {
      width: 84%;
      height: 14px;
      line-height: 150%;
      letter-spacing: -0.005em;
      background-color: transparent;
      color: ${theme.colors.white};
      ${Body2}
      &::placeholder {
        line-height: 150%;
        letter-spacing: -0.005em;
        color: ${theme.colors.gray4};
        ${Body2};
      }
    }
    button {
      width: 49px;
      height: 32px;
      padding: 0px 12px;
      border-radius: 16px;
      background-color: ${({
        currentTextLength,
        theme: {
          colors: { gray5, gray6 },
        },
      }) => (currentTextLength ? gray5 : gray6)};
      span {
        ${Body1}
        line-height: 150%;
        letter-spacing: -0.005em;
        color: ${({
          currentTextLength,
          theme: {
            colors: { gray4 },
          },
        }) => !currentTextLength && gray4};
      }
    }
  }
  & > div:last-of-type {
    margin-top: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & > div {
      display: flex;
      gap: 4px;
      align-items: center;
      & > label {
        line-height: 150%;
        letter-spacing: -0.005em;
        color: ${theme.colors.gray2};
        ${Body2}
      }
    }
  }
`;

export {
  LetterWriteMainLayoutWrapper,
  LetterWriteMainNavTitle,
  LetterWriteMainNavRightWrapper,
  ToolbarContainerWrapper,
  ToolbarInnerContainerWrapper,
  ToolbarWrapper,
  TextTipWrapper,
  ReactQuillWrapper,
  CustomTextEditorToolbarWrapper,
  CustomTextEditorToolbarButton,
  GuidelineMainWrapper,
  GuidelineAddWrapper,
  GuidelineAddInputWrapper,
};
