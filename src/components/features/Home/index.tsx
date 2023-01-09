import { IS_SERVER } from "@/src/constants";
import { COOKIE_ACCESS_TOKEN_KEY } from "@/src/constants/keys";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useResetRecoilState } from "recoil";
import * as S from "./styled";

// TODO: image responsive
const Home = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const resetRecoilLocalStorage = useResetRecoilState(letterWriteInputState);
  const getNavigateLink = (
    link: "/letter-storage" | "/letter-remind" | "/letter-write"
  ) => {
    if (!isLogin) {
      return "/signin";
    }
    return link;
  };
  useEffect(() => {
    resetRecoilLocalStorage();
  }, []);
  useEffect(() => {
    if (!IS_SERVER && getCookie(COOKIE_ACCESS_TOKEN_KEY)) {
      setIsLogin(true);
    }
  }, []);
  return (
    <S.HomeWrapper>
      <header>
        <Image
          src="/images/image__home-logo.svg"
          alt="꼬깃 홈 로고"
          width={224}
          height={48}
        />
        <h1>
          혹시 전하고 싶었던 마음이 있나요?
          <br />
          꼬깃 접어 보내보세요.
        </h1>
      </header>
      <div className="home-storage">
        <Link href={getNavigateLink("/letter-storage")}>
          <Image
            src="/images/image__home-storage.svg"
            alt="꼬깃 보관함"
            width={275}
            height={149}
          />
        </Link>
      </div>
      <div className="home-memo">
        <Link href={getNavigateLink("/letter-remind")}>
          <Image
            src="/images/image__home-memo.svg"
            alt="꼬깃 메모"
            width={148}
            height={214}
          />
        </Link>
      </div>
      <div className="home-send">
        <Link href={getNavigateLink("/letter-write")}>
          <Image
            src="/images/image__home-send.svg"
            alt="꼬깃 보내기"
            width={249}
            height={195}
          />
        </Link>
      </div>
      <div className="home-love">
        <Image
          src="/images/image__home-love.svg"
          alt="손글씨 - love ya"
          width={170}
          height={114}
        />
      </div>
      <div className="home-get">
        <Image
          src="/images/image__home-get.svg"
          alt="손글씨 - get to know"
          width={157}
          height={108}
        />
      </div>
      <div className="home-thank">
        <Image
          src="/images/image__home-thank.svg"
          alt="손글씨 - thank you"
          width={174}
          height={91}
        />
      </div>
      {/* <footer>
        <Link href="#">
          <Image
            src="/icons/icon__home-help.svg"
            alt="도움말"
            width={28}
            height={28}
          />
        </Link>
        <Link href="#">
          <Image
            src="/icons/icon__home-setting.svg"
            alt="설정"
            width={28}
            height={28}
          />
        </Link>
      </footer> */}
    </S.HomeWrapper>
  );
};

export default Home;
