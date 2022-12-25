import { situationTemplatesData } from "@/src/data/LetterWrite";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const SituationForm = (): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const bottomButton = useBottomButton({
    isDisabled: !letterWriteInputObjectState.situation,
  });
  const onClickTemplate = (situationId: number, templateUrl: string) => {
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      situation: {
        situationId,
        templateUrl,
      },
    }));
  };
  return (
    <>
      <S.LetterWriteH1>
        전하고 싶은 마음과 어울리는
        <br />
        꼬깃 친구를 선택해 보세요!
      </S.LetterWriteH1>
      {bottomButton}
    </>
  );
};

export default SituationForm;
