import Button from "@/src/components/common/Buttons/Button";
import * as S from "./styled";

export default function BottomSheetFooter() {
  return (
    <S.ButtonContainer>
      <S.ApplyButton name="필터 적용" size="xl" outline />
    </S.ButtonContainer>
  );
}
