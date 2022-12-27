import { ReactNode } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import type { Settings } from "react-slick";
import * as S from "../styled";

interface CustomSliderProps {
  settings: Settings;
  children: ReactNode;
}

const CustomSlider = ({ settings, children }: CustomSliderProps) => {
  return (
    <S.CustomSliderWrapper>
      <Slider {...settings}>{children}</Slider>
    </S.CustomSliderWrapper>
  );
};

export default CustomSlider;
