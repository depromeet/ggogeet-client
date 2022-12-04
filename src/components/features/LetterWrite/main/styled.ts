import { Header5, IconImage } from "@/src/styles/commons";
import styled from "@emotion/styled";

const LetterWriteMainLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
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
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #949494;
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

const CustomTextEditorToolbarWrapper = styled.div`
  width: 100%;
  height: 34px;
  background: rgba(240, 242, 247, 0.5);
  padding: 8px 16px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 18px;
`;

const CustomTextEditorToolbarButton = styled.button`
  cursor: pointer;
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
};
