import Image from "next/image";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import * as S from "./styled";

const NavBack = ({
  color,
  isHome,
}: {
  color: "white" | "black";
  isHome?: boolean;
}): ReactElement => {
  const router = useRouter();
  return (
    <S.NavItemContainer
      width={24}
      height={24}
      onClick={() => {
        isHome ? router.push("/") : router.back();
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
