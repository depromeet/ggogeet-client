import * as S from "../styled";

interface RemindProps {
  onClose: (type: "Guideline" | "Remind") => void;
}

const Remind = ({ onClose }: RemindProps) => {
  return (
    <S.RemindMainWrapper>
      <S.BottomSheetHeader>
        <strong>꼬깃 메모</strong>
        <span>이전에 적어둔 메모를 참고해서 편지를 작성해 보세요.</span>
      </S.BottomSheetHeader>
    </S.RemindMainWrapper>
  );
};

export default Remind;
