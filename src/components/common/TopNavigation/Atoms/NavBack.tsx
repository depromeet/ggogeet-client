import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import * as S from "./styled";

const NavBack = ({
  color,
  isHome,
  isStorage,
}: {
  color: "white" | "black";
  isHome?: boolean;
  isStorage?: boolean;
}): ReactElement => {
  const router = useRouter();
  return (
    <S.NavItemContainer
      width={24}
      height={24}
      onClick={() => {
        if (isStorage) return router.push("/letter-storage");
        if (isHome) return router.push("/");
        router.back();
      }}
    >
      <Image
        src={`/icons/icon__nav-back--${color}.svg`}
        alt="뒤로 가기"
        width={24}
        height={24}
        priority
      />
    </S.NavItemContainer>
  );
};

export default NavBack;
