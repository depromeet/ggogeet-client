import Image from "next/image";
import * as S from "./styled";

export default function Background() {
  return (
    <S.Background>
      <S.TopContent>
        <Image
          src="/images/image__home-logo.svg"
          alt="꼬깃 홈 로고"
          width={224}
          height={48}
        />
        <div>꼬깃 접어 전하는 이야기</div>
      </S.TopContent>

      <S.SigninButton>
        <Image
          src="/icons/icon__kakao-btn.svg"
          alt="카카오 로그인"
          width={320}
          height={56}
        />
      </S.SigninButton>
    </S.Background>
  );
}
