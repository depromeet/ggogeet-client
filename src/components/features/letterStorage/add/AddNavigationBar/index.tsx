import * as S from "./styled";
interface Props {
  selectedItem: string;
}
export default function AddNavigationBar({ selectedItem }: Props) {
  return (
    <S.NavigationBarLayout>
      <S.Navigation isSelected={selectedItem === "텍스트로 추가"}>
        텍스트로 추가
      </S.Navigation>
      <S.Navigation isSelected={selectedItem === "이미지로 추가"}>
        이미지로 추가
      </S.Navigation>
    </S.NavigationBarLayout>
  );
}
