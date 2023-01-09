import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonSize } from "./types";
import * as S from "./styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  size: ButtonSize;
  leftImg?: ReactNode;
  rightImg?: ReactNode;
  outline?: boolean;
  isRound?: boolean;
  isPressed?: boolean;
  disabled?: boolean;
}

export default function Button({
  name,
  leftImg,
  rightImg,
  size,
  ...args
}: Props) {
  return (
    <S.ButtonWrapper size={size} {...args}>
      {leftImg}
      <S.ButtonName size={size}>{name}</S.ButtonName>
      {rightImg}
    </S.ButtonWrapper>
  );
}
