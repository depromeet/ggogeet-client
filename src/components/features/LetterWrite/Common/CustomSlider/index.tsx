import { ReactNode, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import * as S from "../styled";

interface CustomSliderProps {
  settings: Settings;
  children: ReactNode;
  slickGoToIndex?: number;
}

const CustomSlider = ({
  settings,
  children,
  slickGoToIndex,
}: CustomSliderProps) => {
  const sliderRef = useRef<Slider | null>(null);
  useEffect(() => {
    if (sliderRef.current && slickGoToIndex !== undefined) {
      sliderRef.current.slickGoTo(slickGoToIndex);
    }
  }, [slickGoToIndex]);
  return (
    <S.CustomSliderWrapper>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>
    </S.CustomSliderWrapper>
  );
};

export default CustomSlider;
