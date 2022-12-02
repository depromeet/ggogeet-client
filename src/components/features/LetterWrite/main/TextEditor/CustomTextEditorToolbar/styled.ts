import styled from "@emotion/styled";

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

export { CustomTextEditorToolbarWrapper, CustomTextEditorToolbarButton };
