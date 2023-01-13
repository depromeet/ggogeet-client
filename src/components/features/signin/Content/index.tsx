import Image from "next/image";
import * as S from "./styled";
import { useOauth } from "@/src/hooks/useOauth";

export default function Background() {
  const { getKakaoUri } = useOauth();
  const redirectToKakao = () => window.location.replace(getKakaoUri());

  return (
    <S.Background>
      <S.TopContent>
        <Image
          src="/images/image__home-logo.svg"
          alt="꼬깃 홈 로고"
          width={224}
          height={48}
          priority
        />
        <div>꼬깃 접어 전하는 이야기</div>
      </S.TopContent>

      <S.SigninButton onClick={redirectToKakao}>
        <Image
          src="/icons/icon__kakao-btn.svg"
          alt="카카오 로그인"
          width={320}
          height={56}
          priority
        />
      </S.SigninButton>
    </S.Background>
  );
}
