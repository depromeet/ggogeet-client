import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import * as S from './styled';

const NavBack = (): ReactElement => {
  return (
    <Link href='/'>
      <S.NavItemContainer width={24} height={24}>
        <Image
          src='/icons/icon__nav-back.svg'
          alt='뒤로 가기'
          width={24}
          height={24}
        />
      </S.NavItemContainer>
    </Link>
  );
};

export default NavBack;
