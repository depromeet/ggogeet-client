import { IS_SERVER } from "@/src/constants";
import { COOKIE_ACCESS_TOKEN_KEY } from "@/src/constants/keys";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { getCookie } from "cookies-next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useResetRecoilState } from "recoil";
import * as S from "./styled";
import { getStorageItem, setStorageItem } from "@/src/utils/local-storage";
import WelcomeModal from "./WelcomeModal";

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

  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  useEffect(() => {
    setShowWelcomeModal(!getStorageItem("visited"));
  }, []);

  const handelClickCloseModalButton = () => {
    setStorageItem("visited", "true");
    setShowWelcomeModal(false);
  };

  return (
    <>
      <S.HomeWrapper>
        <header>
          <Image
            src="/images/home-logo.png"
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
              src="/images/home-storage.png"
              alt="꼬깃 보관함"
              width={220}
              height={149}
            />
          </Link>
        </div>
        <div className="home-memo">
          <Link href={getNavigateLink("/letter-remind")}>
            <Image
              src="/images/home-memo.png"
              alt="꼬깃 메모"
              width={123}
              height={214}
            />
          </Link>
        </div>
        <div className="home-send">
          <Link href={getNavigateLink("/letter-write")}>
            <Image
              src="/images/home-send.png"
              alt="꼬깃 보내기"
              width={249}
              height={195}
            />
          </Link>
        </div>
        <div className="home-love">
          <Image
            src="/images/home-love.png"
            alt="손글씨 - love ya"
            width={167}
            height={114}
          />
        </div>
        <div className="home-get">
          <Image
            src="/images/home-get.png"
            alt="손글씨 - get to know"
            width={141}
            height={108}
          />
        </div>
        <div className="home-thank">
          <Image
            src="/images/home-thank.png"
            alt="손글씨 - thank you"
            width={166}
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
      {showWelcomeModal && (
        <WelcomeModal onClose={handelClickCloseModalButton} />
      )}
    </>
  );
};

export default Home;
