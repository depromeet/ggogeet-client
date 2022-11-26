import { ReactNode } from 'react';
import { FontStyle } from './types';
import * as S from './styled';

interface Props {
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
}: Props) {
  return (
    <S.ButtonWrapper
      type="button"
      isDark={isDark}
      fontStyle={fontStyle}
      isRound={isRound}
      onClick={onClick}
    >
      {name}
      {rightImg}
    </S.ButtonWrapper>
  );
}
