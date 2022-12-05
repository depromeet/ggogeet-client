import { situationTemplatesData } from "@/src/data/LetterWrite";
import { TemplateType } from "@/src/data/LetterWrite/type";
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
  const onClickTemplate = (templateType: TemplateType) => {
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      situation: templateType,
    }));
  };
  return (
    <>
      <S.LetterWriteH1>어떤 마음을 전하고 싶나요?</S.LetterWriteH1>
      <S.SituationTemplateContainer></S.SituationTemplateContainer>
      <S.SituationSlick>
        {situationTemplatesData.map((st) => (
          <S.SituationSlickItem
            key={st.type}
            onClick={() => onClickTemplate(st.type)}
            isSelected={st.type === letterWriteInputObjectState.situation}
          >
            <div></div>
            <span>{st.value}</span>
          </S.SituationSlickItem>
        ))}
      </S.SituationSlick>
      {bottomButton}
    </>
  );
};

export default SituationForm;
