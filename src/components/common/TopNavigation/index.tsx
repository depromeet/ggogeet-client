import { ReactNode } from "react";
import * as S from "./styled";

type Props = {
  leftElem?: ReactNode;
  title?: ReactNode;
  rightElem?: ReactNode;
};

export default function TopNavigation({ leftElem, title, rightElem }: Props) {
  return (
    <S.TopNavigationWrapper>
      <S.TopNavigationLeftElem>{leftElem}</S.TopNavigationLeftElem>
      <S.TopNavigationTitle>{title}</S.TopNavigationTitle>
      <S.TopNavigationRightElem>{rightElem}</S.TopNavigationRightElem>
    </S.TopNavigationWrapper>
  );
}
