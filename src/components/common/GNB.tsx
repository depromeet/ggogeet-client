import { Fragment, ReactElement, ReactNode } from 'react';
import { NavContainer, NavItemContainer } from './GNB.style';
import { v4 } from 'uuid';

type NavPositionType = 'left' | 'center' | 'right';

type NavStylesOptions = {
  multiItemsGap: number;
};

type GNBType = {
  [position in NavPositionType]?: ReactNode[] | ReactNode;
} & {
  stylesOptions?: NavStylesOptions;
};

type NavItemType = {
  position: NavPositionType;
  stylesOptions?: NavStylesOptions;
};

const NavItem = ({ position, stylesOptions }: NavItemType): ReactElement => {
  return Array.isArray(position) ? (
    <NavItemContainer gap={stylesOptions?.multiItemsGap}>
      {position.map((p) => (
        <Fragment key={v4()}>{p}</Fragment>
      ))}
    </NavItemContainer>
  ) : (
    <NavItemContainer>{position}</NavItemContainer>
  );
};

const GNB = ({ left, center, right, stylesOptions }: GNBType): ReactElement => {
  return (
    <NavContainer>
      {[left, center, right].map((position) => (
        <NavItem
          key={v4()}
          position={position as NavPositionType}
          stylesOptions={stylesOptions}
        />
      ))}
    </NavContainer>
  );
};

export default GNB;
