import React, { CSSProperties, Fragment, ReactElement } from "react";
import { NavContainer, NavItemContainer } from "./styled";

type NavPositionKey = "left" | "center" | "right";

type NavPositionValue = JSX.Element[] | JSX.Element;

type GnbType = Partial<{ [key in NavPositionKey]: NavPositionValue }> & {
  stylesOptions?: CSSProperties;
};

type NavItemType = {
  position: NavPositionValue;
  stylesOptions?: CSSProperties;
};

const NavItem = ({ position }: NavItemType): ReactElement => {
  return Array.isArray(position) ? (
    <NavItemContainer>
      {position.map((p, i) => (
        <Fragment key={`${p.toString()}--${i}`}>{p}</Fragment>
      ))}
    </NavItemContainer>
  ) : (
    <NavItemContainer>{position}</NavItemContainer>
  );
};

const Gnb = ({ left, center, right, stylesOptions }: GnbType): ReactElement => {
  return (
    <NavContainer style={stylesOptions}>
      {[left, center, right].map((position = <div></div>, idx) => (
        <NavItem
          key={`${position.toString()}--${idx}`}
          position={position as NavPositionValue}
          stylesOptions={stylesOptions}
        />
      ))}
    </NavContainer>
  );
};

export default Gnb;
