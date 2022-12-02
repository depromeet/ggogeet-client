import { ButtonHTMLAttributes } from "react";
import * as S from "./styled";

type Props = {
  name: string;
  isRound?: boolean;
  isDark?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function BottomButton({
  name,
  isRound = false,
  isDark = false,
  ...args
}: Props) {
  return (
    <S.BottomButtonWrapper isDark={isDark} isRound={isRound} {...args}>
      {name}
    </S.BottomButtonWrapper>
  );
}
