import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import * as S from "./styled";

const NavLogo = (): ReactElement => {
  return (
    <Link href="/">
      <S.NavItemContainer width={58} height={32}>
        <Image
          src="/icons/icon__nav-logo.svg"
          alt="로고"
          width={58}
          height={32}
        />
      </S.NavItemContainer>
    </Link>
  );
};

export default NavLogo;
