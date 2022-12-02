import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReactElement } from "react";
import { useRecoilState } from "recoil";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

type TemplateType = "축하" | "위로" | "사랑해요" | "응원";

const situationTemplates = [
  {
    type: "축하",
    name: "축하",
    imageUrl: "",
  },
  {
    type: "위로",
    name: "위로",
    imageUrl: "",
  },
  {
    type: "사랑해요",
    name: "사랑해요",
    imageUrl: "",
  },
  {
    type: "응원",
    name: "응원",
    imageUrl: "",
  },
];

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
        {situationTemplates.map((st) => (
          <S.SituationSlickItem
            key={st.type}
            onClick={() => onClickTemplate(st.type as TemplateType)}
            isSelected={st.type === letterWriteInputObjectState.situation}
          >
            <div></div>
            <span>{st.name}</span>
          </S.SituationSlickItem>
        ))}
      </S.SituationSlick>
      {bottomButton}
    </>
  );
};

export default SituationForm;
