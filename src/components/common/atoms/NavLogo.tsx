import styled from '@emotion/styled';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

const NavLogo = (): ReactElement => {
  const router = useRouter();
  return (
    <NavLogoContainer
      onClick={() => {
        router.push('/');
      }}
    >
      <Image src={'/icons/nav-logo.svg'} alt={'로고'} width={58} height={32} />
    </NavLogoContainer>
  );
};

const NavLogoContainer = styled.div`
  cursor: pointer;
  width: 58px;
  height: 32px;
`;

export default NavLogo;
