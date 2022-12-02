import BottomButton from "@/src/components/common/Buttons/BottomButton";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { getNavigateNextLink } from "@/src/utils/helper/LetterWrite";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import { LetterWriteTagContainer } from "../../common";
import * as S from "../styled";

const RelationshipForm = (): ReactElement => {
  const router = useRouter();
  const { type } = router.query;
  const nextLink = getNavigateNextLink(type);
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const onClickNext = () => {
    router.push(nextLink);
  };
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
      <S.BottomButtonContainer>
        <BottomButton
          name="다음"
          isDark={true}
          isRound={true}
          disabled={!letterWriteInputObjectState.relationship}
          onClick={onClickNext}
        />
      </S.BottomButtonContainer>
    </>
  );
};

export default RelationshipForm;
