import Image from "next/image";
import { ReactElement } from "react";
import * as S from "../styled";

const LetterCompletedProgress = (): ReactElement => {
  return (
    <S.LetterCompletedProgress>
      <Image
        src="/gifs/gif__completed-progress.gif"
        alt="꼬깃 접는중"
        width={120}
        height={120}
        priority
      />
      <p>
        꼬깃 접는 중이에요!
        <br />
        잠시만 기다려주세요
      </p>
    </S.LetterCompletedProgress>
  );
};

export default LetterCompletedProgress;
