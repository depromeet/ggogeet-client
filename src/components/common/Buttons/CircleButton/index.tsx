import { ReactNode } from 'react';
import * as S from './styled';

interface Props {
  name: string;
  isSelected: boolean;
  topImg?: ReactNode;
  onClick?: () => void;
}

export default function CircleButton({ name, topImg, ...args }: Props) {
  return (
    <S.CircleButtonWrapper type="button" {...args}>
      {topImg}
      {name}
    </S.CircleButtonWrapper>
  );
}
