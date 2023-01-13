import * as S from "./styled";

interface Props {
  onClick: () => void;
}

export default function BottomSheetFooter({ onClick }: Props) {
  return (
    <S.ButtonContainer>
      <S.ApplyButton name="필터 적용" size="xl" outline onClick={onClick} />
    </S.ButtonContainer>
  );
}
