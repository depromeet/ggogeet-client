import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import * as S from "./styled";

const NavBell = (): ReactElement => {
  return (
    <Link href="/notification">
      <S.NavItemContainer width={19} height={23.5}>
        <Image
          src="/icons/icon__nav-bell.svg"
          alt="알림"
          width={19}
          height={23.5}
        />
        <S.NavBellActive />
      </S.NavItemContainer>
    </Link>
  );
};

export default NavBell;
