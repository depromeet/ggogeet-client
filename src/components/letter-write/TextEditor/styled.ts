import styled from '@emotion/styled';

const ReactQuillWrapper = styled.section`
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
`;

export { ReactQuillWrapper };
