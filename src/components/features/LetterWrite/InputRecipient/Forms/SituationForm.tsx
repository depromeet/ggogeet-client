import { situationTemplatesData } from "@/src/data/LetterWrite";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReactElement, useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import CustomSlider from "../../Common/CustomSlider";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";
import type { Settings } from "react-slick";
import SituationTag from "../../Common/SituationTag";
import Image from "next/image";

const SituationForm = (): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const { situationId } = letterWriteInputObjectState;
  const bottomButton = useBottomButton({
    // Consider for zero
    isDisabled: !!!situationId,
  });
  const currentIndex = !!situationId ? situationId - 1 : 0;
  const [currentTemplate, setCurrentTemplate] = useState<
    typeof situationTemplatesData[number]
  >(situationTemplatesData[currentIndex]);

  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: currentIndex,
    centerMode: true,
    centerPadding: "26px",
    prevArrow: <></>,
    nextArrow: <></>,
    beforeChange: (oldIdx: number, newIdx: number) => {
      setCurrentTemplate(situationTemplatesData[newIdx]);
    },
  };
  useEffect(() => {
    const { situationId } = currentTemplate;
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      situationId,
    }));
  }, [currentTemplate]);

  return (
    <>
      <S.LetterWriteH1>
        전하고 싶은 마음과 어울리는
        <br />
        꼬깃 친구를 선택해 보세요!
      </S.LetterWriteH1>
      <S.LetterWriteSituationSliderWrapper>
        <CustomSlider settings={sliderSettings}>
          {situationTemplatesData.map((template) => (
            <S.LetterWriteSituationSliderItem key={template.situationId}>
              <div>
                <Image
                  alt={template.title}
                  {...template.situationImage}
                  priority
                />
              </div>
              <SituationTag templateType={template.title} height={22} />
              <p>{template.description}</p>
            </S.LetterWriteSituationSliderItem>
          ))}
        </CustomSlider>
      </S.LetterWriteSituationSliderWrapper>
      {bottomButton}
    </>
  );
};

export default SituationForm;
