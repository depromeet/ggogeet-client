import { ButtonHTMLAttributes, ReactNode } from 'react';
import { FontStyle } from './types';
import * as S from './styled';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  fontStyle: FontStyle;
  rightImg?: ReactNode;
  isRound?: boolean;
  isDark?: boolean;
  onClick?: () => void;
}

export default function Button({
  name,
  rightImg,
  fontStyle,
  isRound = false,
  isDark = false,
  onClick,
  ...args
}: Props) {
  return (
    <S.ButtonWrapper
      type='button'
      isDark={isDark}
      fontStyle={fontStyle}
      isRound={isRound}
      onClick={onClick}
      {...args}
    >
      {name}
      {rightImg}
    </S.ButtonWrapper>
  );
}
