import {
  guidelineContentsData,
  guidelineTemplatesData,
} from "@/src/data/LetterWrite";
import { ReactElement, useState } from "react";
import Image from "next/image";
import * as S from "../styled";
import { GuidelineDataType } from "@/src/data/LetterWrite/type";

const Guideline = (): ReactElement => {
  const [currentTabButton, setCurrentTabButton] = useState<number>(0);
  const [currentTabData, setCurrentTabData] = useState<GuidelineDataType>(
    guidelineContentsData
  );
  const onClickTabButton = (index: number) => {
    setCurrentTabButton(index);
  };
  const onClickDelete = (index: number) => {
    setCurrentTabData((prev) => prev.filter((_, idx) => idx !== index));
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
        {currentTabData.map((data, idx) => (
          <button key={`${data.value}--${idx}`}>
            <span>{data.value}</span>
            {data.type === "Custom" && (
              <button onClick={() => onClickDelete(idx)}>
                <Image
                  src="/icons/icon__guideline-delete.svg"
                  alt="가이드라인 삭제"
                  width={24}
                  height={24}
                />
              </button>
            )}
          </button>
        ))}
      </S.GuidelineContentsWrapper>
    </S.LetterWriteMainGuidelineWrapper>
  );
};

export default Guideline;
