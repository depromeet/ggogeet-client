import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const SituationForm = (): ReactElement => {
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const bottomButton = useBottomButton();
  return (
    <>
      <S.LetterWriteH1>어떤 마음을 전하고 싶나요?</S.LetterWriteH1>
      {bottomButton}
    </>
  );
};

export default SituationForm;
