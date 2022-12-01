import Link from "next/link";
import { ReactElement } from "react";
import * as S from "./styled";

const NavCancel = (): ReactElement => {
  return (
    <Link href="/">
      <S.NavCancelText>취소</S.NavCancelText>
    </Link>
  );
};

export default NavCancel;
