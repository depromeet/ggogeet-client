import {
  guidelineContentsData,
  guidelineTemplatesData,
} from "@/src/data/LetterWrite";
import { ReactElement, useState } from "react";
import Image from "next/image";
import * as S from "../styled";

const Guideline = (): ReactElement => {
  const [currentTabButton, setCurrentTabButton] = useState<number>(0);
  const onClickTabButton = (index: number) => {
    setCurrentTabButton(index);
  };
  return (
    <S.LetterWriteMainGuidelineWrapper>
      <h4>가이드</h4>
      <p>문장을 참고해서 편지를 적어보세요.</p>
      <S.LetterWriteMainGuidelineTabSlickWrapper>
        {guidelineTemplatesData.map((data, idx) => (
          <S.LetterWriteMainGuidelineTabButton
            key={data.type}
            onClick={() => onClickTabButton(idx)}
            isClicked={currentTabButton === idx}
          >
            <Image src={data.imageUrl} alt={data.type} width={14} height={18} />
            {data.value}
          </S.LetterWriteMainGuidelineTabButton>
        ))}
      </S.LetterWriteMainGuidelineTabSlickWrapper>
      <S.GuidelineAddButton>+ 내 가이드 문장을 추가할래요</S.GuidelineAddButton>
      <S.GuidelineContentsWrapper>
        {guidelineContentsData.map((data, idx) => (
          <button key={`${data.value}--${idx}`}>{data.value}</button>
        ))}
      </S.GuidelineContentsWrapper>
    </S.LetterWriteMainGuidelineWrapper>
  );
};

export default Guideline;
