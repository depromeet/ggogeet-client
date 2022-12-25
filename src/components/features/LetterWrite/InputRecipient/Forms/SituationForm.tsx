import { situationTemplatesData } from "@/src/data/LetterWrite";
import { SituationTemplateDataType } from "@/src/data/LetterWrite/type";
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
      <S.LetterWriteH1>어떤 마음을 전하고 싶나요?</S.LetterWriteH1>
      <S.SituationTemplateContainer></S.SituationTemplateContainer>
      <S.SituationSlick>
        {situationTemplatesData.map((st) => (
          <S.SituationSlickItem
            key={st.situationId}
            onClick={() => onClickTemplate(st.situationId, st.templateUrl)}
            isSelected={
              st.situationId ===
              (
                letterWriteInputObjectState.situation as {
                  situationId: number;
                  templateUrl: string;
                }
              ).situationId
            }
          >
            <div>{st.title}</div>
            <span>{st.description}</span>
          </S.SituationSlickItem>
        ))}
      </S.SituationSlick>
      {bottomButton}
    </>
  );
};

export default SituationForm;
