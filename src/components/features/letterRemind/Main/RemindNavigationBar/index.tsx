import { Dispatch, SetStateAction } from "react";
import * as S from "./styled";

interface Props {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}

export default function RemindNavigationBar({
  selectedItem,
  setSelectedItem,
}: Props) {
  let num = 7; // NOTE: 임시 숫자

  const onClickNavigation = (pageName: string) => setSelectedItem(pageName);

  return (
    <S.NavigationBarLayout>
      <S.NavigationWrapper
        isSelected={selectedItem === "모든 메모"}
        onClick={() => onClickNavigation("모든 메모")}
      >
        <S.Navigation>모든 메모</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper
        isSelected={selectedItem === "미완료"}
        onClick={() => onClickNavigation("미완료")}
      >
        <S.Navigation>미완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper
        isSelected={selectedItem === "완료"}
        onClick={() => onClickNavigation("완료")}
      >
        <S.Navigation>완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>
    </S.NavigationBarLayout>
  );
}
