import { ReactNode } from 'react';
import * as S from './styled';

type Props = {
  leftElem?: ReactNode;
  title?: string;
  rightElem?: ReactNode;
};

export default function TopNavigation({ leftElem, title, rightElem }: Props) {
  return (
    <S.TopNavigationWrapper>
      {leftElem}
      {title && (
        <S.TopNavigationTitle isCenter={!!leftElem}>
          {title}
        </S.TopNavigationTitle>
      )}
      {rightElem}
    </S.TopNavigationWrapper>
  );
}
