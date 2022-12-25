import { Display1 } from "@/src/styles/commons";
import styled from "@emotion/styled";

const NavItemContainer = styled.div<{ width?: number; height?: number }>`
  cursor: pointer;
  position: relative;
  ${({ width, height }) =>
    width &&
    height &&
    `
    width: ${width}px;
    height: ${height}px;
  `};
`;

const NavCancelText = styled.span`
  line-height: 21px;
  letter-spacing: -0.2px;
  color: #989fb3;
  ${Display1}
`;

const NavBellActive = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  right: 0;
  top: 0;
  background: red;
`;

export { NavItemContainer, NavCancelText, NavBellActive };
