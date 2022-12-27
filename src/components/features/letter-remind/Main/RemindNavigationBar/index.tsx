import * as S from "./styled";

interface Props {
  selectedItem: string;
}

export default function RemindNavigationBar({ selectedItem }: Props) {
  let num = 7; // NOTE: 임시 숫자

  return (
    <S.NavigationBarLayout>
      <S.NavigationWrapper isSelected={selectedItem === "모든 메모"}>
        <S.Navigation>모든 메모</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper isSelected={selectedItem === "미완료"}>
        <S.Navigation>미완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper isSelected={selectedItem === "완료"}>
        <S.Navigation>완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>
    </S.NavigationBarLayout>
  );
}
