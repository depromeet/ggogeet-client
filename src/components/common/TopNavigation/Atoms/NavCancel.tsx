import Link from "next/link";
import { ReactElement } from "react";
import * as S from "../Atoms/styled";

const NavCancel = (): ReactElement => {
  return (
    <Link href="/">
      <S.NavCancelText>취소</S.NavCancelText>
    </Link>
  );
};

export default NavCancel;
