import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import * as S from "./styled";

const NavBack = ({ action }: { action?: () => void }): ReactElement => {
  const router = useRouter();
  return (
    <S.NavItemContainer
      width={24}
      height={24}
      onClick={() => {
        if (action) {
          action();
        } else {
          router.back();
        }
      }}
    >
      <Image
        src="/icons/icon__nav-back.svg"
        alt="뒤로 가기"
        width={24}
        height={24}
      />
    </S.NavItemContainer>
  );
};

export default NavBack;
