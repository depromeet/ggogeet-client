import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

const NavLogo = (): ReactElement => {
  return (
    <Link href={'/'}>
      <NavLogoContainer>
        <Image
          src={'/icons/nav-logo.svg'}
          alt={'로고'}
          width={58}
          height={32}
        />
      </NavLogoContainer>
    </Link>
  );
};

const NavLogoContainer = styled.div`
  cursor: pointer;
  width: 58px;
  height: 32px;
`;

export default NavLogo;
