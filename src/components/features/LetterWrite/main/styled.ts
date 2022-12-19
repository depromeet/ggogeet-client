import { IconImage } from "@/src/styles/commons";
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
};
