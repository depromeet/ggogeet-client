import Image from "next/image";
import Link from "next/link";
import * as S from "./styled";

// TODO: image responsive
const Home = () => {
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
        <Link href="/letter-storage">
          <Image
            src="/images/image__home-storage.svg"
            alt="꼬깃 보관함"
            width={275}
            height={149}
          />
        </Link>
      </div>
      <div className="home-memo">
        <Link href="/letter-remind">
          <Image
            src="/images/image__home-memo.svg"
            alt="꼬깃 메모"
            width={148}
            height={214}
          />
        </Link>
      </div>
      <div className="home-send">
        <Link href="/letter-write">
          <Image
            src="/images/image__home-send.svg"
            alt="꼬깃 보내기"
            width={249}
            height={195}
          />
        </Link>
      </div>
      <footer>
        <Link href="/help">
          <Image
            src="/icons/icon__home-help.svg"
            alt="도움말"
            width={28}
            height={28}
          />
        </Link>
        <Link href="/setting">
          <Image
            src="/icons/icon__home-setting.svg"
            alt="설정"
            width={28}
            height={28}
          />
        </Link>
      </footer>
    </S.HomeWrapper>
  );
};

export default Home;
