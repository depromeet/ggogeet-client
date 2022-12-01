import Image from "next/image";
import React, { ReactElement } from "react";
import * as S from "./styled";

const NavMenu = (): ReactElement => {
  const onClickMenu = () => {};
  return (
    <S.NavItemContainer width={24} height={24} onClick={onClickMenu}>
      <Image
        src="/icons/icon__nav-menu.svg"
        alt="햄버거 메뉴 버튼"
        width={24}
        height={24}
      />
    </S.NavItemContainer>
  );
};

export default NavMenu;
