import * as S from "./styled";

interface Props {}

export default function RemindNavigationBar({}: Props) {
  let num = 7; // NOTE: 임시 숫자

  return (
    <S.NavigationBarLayout>
      <S.NavigationWrapper>
        <S.Navigation>모든 메모</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper>
        <S.Navigation>미완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>

      <S.NavigationWrapper>
        <S.Navigation>완료</S.Navigation>
        <S.NavigationNumber>{num}</S.NavigationNumber>
      </S.NavigationWrapper>
    </S.NavigationBarLayout>
  );
}
