import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

const NavBell = (): ReactElement => {
  return (
    <Link href={'/notification'}>
      <NavBellContainer>
        <Image
          src={'/icons/nav-bell.svg'}
          alt={'알림'}
          width={19}
          height={23.5}
        />
        <BellActive />
      </NavBellContainer>
    </Link>
  );
};

const NavBellContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: 19px;
  height: 23.5px;
`;

const BellActive = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  right: 0;
  top: 0;
  background: red;
`;

export default NavBell;
