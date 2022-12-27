import styled from "@emotion/styled";

const NavContainer = styled.nav`
  position: sticky;
  background-color: #fff;
  top: 0;
  width: 100%;
  max-width: 470px;
  height: 44px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

const NavItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 33%;
  &:first-of-type {
    justify-content: flex-start;
  }
  &:nth-of-type(2) {
    justify-content: center;
  }
  &:last-of-type {
    justify-content: flex-end;
  }
`;

export { NavContainer, NavItemContainer };
