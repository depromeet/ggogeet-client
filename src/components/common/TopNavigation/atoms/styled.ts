import { Header5 } from '@/src/styles/commons';
import styled from '@emotion/styled';

const NavButton = styled.button`
  cursor: pointer;
`;

const NavCancelText = styled.span`
  line-height: 21px;
  letter-spacing: -0.2px;
  color: #989fb3;

  ${Header5}
`;

export { NavButton, NavCancelText };
