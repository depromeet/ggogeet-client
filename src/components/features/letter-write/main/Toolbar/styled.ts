import { IconImage } from "@/src/styles/commons";
import styled from "@emotion/styled";

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

export {
  ToolbarContainerWrapper,
  ToolbarInnerContainerWrapper,
  ToolbarWrapper,
};
