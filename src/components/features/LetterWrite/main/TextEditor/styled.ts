import styled from "@emotion/styled";

const ReactQuillWrapper = styled.div`
  .ql-toolbar {
    display: none;
  }

  .ql-toolbar.ql-snow + .ql-container.ql-snow {
    border-top: 1px solid #e4e7ef;
  }

  .ql-container {
    width: 100%;
    height: 88vh;
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

export { ReactQuillWrapper };
