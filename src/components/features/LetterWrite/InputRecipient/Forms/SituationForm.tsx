import { situationTemplatesData } from "@/src/data/LetterWrite";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReactElement, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import CustomSlider from "../../Common/CustomSlider";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";
import type { Settings } from "react-slick";
import Image from "next/image";
import SituationTag from "../../Common/SituationTag";
import theme from "@/src/styles/theme";

const SituationForm = (): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const bottomButton = useBottomButton({
    isDisabled: !letterWriteInputObjectState.situation,
  });
  const [currentTemplate, setCurrentTemplate] = useState<
    typeof situationTemplatesData[0]
  >(situationTemplatesData[0]);
  const sliderSettings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "26px",
    prevArrow: <></>,
    nextArrow: <></>,
    beforeChange: (oldIdx: number, newIdx: number) => {
      setCurrentTemplate(situationTemplatesData[newIdx]);
    },
  };
  useEffect(() => {
    const {
      situationId,
      image: { src },
    } = currentTemplate;
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      situation: {
        situationId,
        templateUrl: src,
      },
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
              {/* <Image alt={template.title} {...template.image} /> */}
              <div></div>
              {/* <span>{template.title}</span> */}
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
