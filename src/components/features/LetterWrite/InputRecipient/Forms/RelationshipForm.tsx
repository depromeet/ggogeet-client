import { letterWriteInputState } from "@/src/store/LetterWrite";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { LetterWriteTagContainer } from "../../common";
import { useBottomButton } from "../Hooks";
import * as S from "../styled";

const RelationshipForm = (): ReactElement => {
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const bottomButton = useBottomButton();

  return (
    <>
      <S.LetterWriteH1>어떤 관계인가요?</S.LetterWriteH1>
      <S.RelationShipReceiverContainer>
        <S.LetterWriteCaption1>받는 사람</S.LetterWriteCaption1>
        <S.LetterWriteBody1>
          {letterWriteInputObjectState.receiverName}
        </S.LetterWriteBody1>
      </S.RelationShipReceiverContainer>
      <LetterWriteTagContainer />
      {bottomButton}
    </>
  );
};

export default RelationshipForm;
