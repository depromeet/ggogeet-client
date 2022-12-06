import {
  Body3,
  Body4,
  Body5,
  Caption1,
  Caption2,
  Header5,
  IconImage,
} from "@/src/styles/commons";
import styled from "@emotion/styled";
import { ToolbarClickedStatusType } from ".";

const LetterWriteMainLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #ffffff;
`;

const LetterWriteMainNavRightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  button {
    line-height: 150%;
    letter-spacing: -0.005em;
    ${Header5}
  }
  button:first-of-type {
    color: #989fb3;
  }
  button:last-of-type {
    color: #c5cad8;
  }
`;

const ToolbarContainerWrapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 8px 16px;
`;

const ToolbarInnerContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const ToolbarWrapper = styled.div`
  ${IconImage}
`;

const TextTipWrapper = styled.div`
  padding: 4px 16px 12px;
  span {
    line-height: 14px;
    color: #949494;
    ${Caption1}
  }
`;

const TextEditorContainer = styled.div`
  padding: 0 16px;
`;

const ReactQuillWrapper = styled.div`
  .ql-toolbar {
    display: none;
  }

  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 1px solid #e4e7ef;
  }

  .ql-container {
    width: 100%;
    height: 77vh;
    background: #fcfcfc;
    border: 1px solid #e4e7ef;
    border-radius: 12px;
  }

  .ql-editor {
    padding: 16px;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.5px;
    color: #767c8d;
  }

  .ql-editor.ql-blank::before {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    letter-spacing: -0.5px;
    color: #d8d8d8;
  }
`;

const CustomTextEditorToolbarWrapper = styled.div<{
  type: ToolbarClickedStatusType;
}>`
  width: 100%;
  height: 34px;
  background: rgba(240, 242, 247, 0.5);
  padding: 8px 16px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: ${({ type }) => (type === "Text" ? "4px" : "10px")};
`;

const CustomTextEditorToolbarButton = styled.button`
  cursor: pointer;
`;

const LetterWriteMainGuidelineWrapper = styled.div`
  padding: 12px 16px;
  height: 60vh;
  & > h4 {
    margin: 0 !important;
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #767c8d;
  }
  & > p {
    margin-top: 12px;
    line-height: 17px;
    color: #989fb3;
    ${Body5}
  }
`;

const LetterWriteMainGuidelineTabSlickWrapper = styled.div`
  margin: 16px 0;
  display: -webkit-box;
  gap: 6px;
  overflow-x: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const LetterWriteMainGuidelineTabButton = styled.button<{
  isClicked: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border: 1px solid #e4e7ef;
  border-radius: 18px;
  line-height: 132%;
  color: #767c8d;
  ${Caption2}

  ${({ isClicked }) =>
    isClicked &&
    `
      border: 1px solid #767C8D;
      color: #FFFFFF;
      background: #767C8D;
    `}
`;

const GuidelineAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  width: 100%;
  background: #f0f2f7;
  border-radius: 8px;

  line-height: 150%;
  text-align: center;
  color: #989fb3;
  ${Body3}
`;

const GuidelineContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 8px;
  gap: 8px;
  overflow-y: auto;
  height: 245px;
  button {
    display: flex;
    padding: 10px 12px;
    width: 100%;
    background: #f8f8fb;
    border-radius: 8px;

    line-height: 17px;
    color: #767c8d;
    ${Body4}
  }
`;

export {
  LetterWriteMainLayoutWrapper,
  LetterWriteMainNavRightWrapper,
  ToolbarContainerWrapper,
  ToolbarInnerContainerWrapper,
  ToolbarWrapper,
  TextTipWrapper,
  TextEditorContainer,
  ReactQuillWrapper,
  CustomTextEditorToolbarWrapper,
  CustomTextEditorToolbarButton,
  LetterWriteMainGuidelineWrapper,
  LetterWriteMainGuidelineTabSlickWrapper,
  LetterWriteMainGuidelineTabButton,
  GuidelineAddButton,
  GuidelineContentsWrapper,
};
