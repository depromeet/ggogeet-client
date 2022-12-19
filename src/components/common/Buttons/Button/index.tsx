import { ButtonHTMLAttributes, ReactNode } from "react";
import * as S from "./styled";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  leftImg?: ReactNode;
  rightImg?: ReactNode;
  outline?: boolean;
  isRound?: boolean;
  isPressed?: boolean;
  disabled?: boolean;
}

export default function Button({ name, leftImg, rightImg, ...args }: Props) {
  return (
    <S.ButtonWrapper {...args}>
      {leftImg}
      <S.ButtonName>{name}</S.ButtonName>
      {rightImg}
    </S.ButtonWrapper>
  );
}
