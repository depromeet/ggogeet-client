import * as S from "./styled";
import { motion } from "framer-motion";

import type { ButtonHTMLAttributes } from "react";
import type { MotionProps } from "framer-motion";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & MotionProps;

interface Props extends ButtonProps {
  isOn: boolean;
}

export default function Toggle({ isOn, ...props }: Props) {
  const switchClassName = isOn ? "on" : "off";

  return (
    <S.Wrap className={switchClassName} {...props}>
      <S.Switch layout />
    </S.Wrap>
  );
}
