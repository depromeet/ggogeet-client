import InitializationButton from "../InitializationButton";
import * as S from "./styled";

interface Props {
  selectedItem: string;
}

export default function BottomSheetHeader({ selectedItem }: Props) {
  return (
    <S.HeaderLayout>
      <S.NavigationsContainer>
        <S.Navigation isSelected={selectedItem === "보낸사람"}>
          보낸 사람
        </S.Navigation>
        <S.Navigation isSelected={selectedItem === "태그"}>태그</S.Navigation>
        <S.Navigation isSelected={selectedItem === "날짜"}> 날짜</S.Navigation>
      </S.NavigationsContainer>

      <InitializationButton />
    </S.HeaderLayout>
  );
}
