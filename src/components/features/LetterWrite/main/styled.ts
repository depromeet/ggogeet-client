import {
  Body1,
  Body2,
  Body4,
  Body5,
  Caption1,
  Display2,
  IconImage,
} from "@/src/styles/commons";
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
    line-height: 150%;
    letter-spacing: -0.5px;
    ${Body4};
  }
  button:first-of-type {
    color: ${theme.colors.gray4};
  }
  button:last-of-type {
    color: ${theme.colors.gray5};
  }
`;

const LetterWriteMainNavTitle = styled.span`
  line-height: 150%;
  color: ${theme.colors.navy};
  ${Display2};
`;

const ToolbarContainerWrapper = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid ${theme.colors.gray1};
`;

const ToolbarInnerContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ToolbarWrapper = styled.button`
  ${IconImage}
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
    background: ${theme.colors.white};
  }

  .ql-editor {
    padding: 20px;
    line-height: 170%;
    letter-spacing: -0.005em;
    color: ${theme.colors.navy};
    ${Body2};
  }

  .ql-editor.ql-blank::before {
    font-style: normal;
    line-height: 170%;
    letter-spacing: -0.005em;
    left: unset;
    right: unset;
    color: ${theme.colors.gray3};
    ${Body2};
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
  border-bottom: 1px solid ${theme.colors.gray1};
`;

const CustomTextEditorToolbarButton = styled.button`
  cursor: pointer;
  ${IconImage}
`;

const BottomSheetHeader = styled.div`
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
`;

const GuidelineMainWrapper = styled.div<{ isListHeightChanged: boolean }>`
  position: relative;
  height: 436px;
  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    width: 100%;
    height: ${({ isListHeightChanged }) =>
      isListHeightChanged ? "328px" : "252px"};
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
`;

const GuidelineMainBottomButtonWrapper = styled.div<{ isShow: boolean }>`
  display: ${({ isShow }) => (isShow ? "flex" : "none")};
  position: absolute;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 100%;
  button {
    width: inherit;
    border-radius: 4px;
    gap: 4px;
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
    border-radius: ${theme.radius.md};
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
        line-height: 150%;
        letter-spacing: -0.005em;
        color: ${({
          currentTextLength,
          theme: {
            colors: { gray4 },
          },
        }) => !currentTextLength && gray4};
        ${Body1};
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

const RemindMainWrapper = styled.div`
  height: 376px;
`;

const RemindMemoContainer = styled.div`
  height: 272px;
  overflow-y: auto;
`;

export {
  LetterWriteMainLayoutWrapper,
  LetterWriteMainNavTitle,
  LetterWriteMainNavRightWrapper,
  ToolbarContainerWrapper,
  ToolbarInnerContainerWrapper,
  ToolbarWrapper,
  ReactQuillWrapper,
  CustomTextEditorToolbarWrapper,
  CustomTextEditorToolbarButton,
  BottomSheetHeader,
  GuidelineMainWrapper,
  GuidelineMainBottomButtonWrapper,
  GuidelineAddWrapper,
  GuidelineAddInputWrapper,
  RemindMainWrapper,
  RemindMemoContainer,
};
