import { remindNavigationState } from "@/src/store/LetterRemind";
import { Dispatch, SetStateAction } from "react";
import { useRecoilState } from "recoil";
import * as S from "./styled";

export default function RemindNavigationBar() {
  let num = 7; // NOTE: 임시 숫자

  const [selectedNavigation, setSelectedNavigation] = useRecoilState(
    remindNavigationState
  );

  const onClickNavigation = (pageName: string) =>
    setSelectedNavigation(pageName);

  return (
    <S.NavigationBarLayout>
      <S.NavigationWrapper
        isSelected={selectedNavigation === "모든 메모"}
        onClick={() => onClickNavigation("모든 메모")}
      >
        <S.Navigation>모든 메모</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper
        isSelected={selectedNavigation === "미완료"}
        onClick={() => onClickNavigation("미완료")}
      >
        <S.Navigation>미완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper
        isSelected={selectedNavigation === "완료"}
        onClick={() => onClickNavigation("완료")}
      >
        <S.Navigation>완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>
    </S.NavigationBarLayout>
  );
}
