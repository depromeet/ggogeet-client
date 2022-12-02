import BottomButton from "@/src/components/common/Buttons/BottomButton";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { getNavigateNextLink } from "@/src/utils/helper/LetterWrite";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { useRecoilValue } from "recoil";
import * as S from "../styled";

const useBottomButton = (): ReactElement => {
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const router = useRouter();
  const { type } = router.query;
  const nextLink = getNavigateNextLink(type);
  const onClickNext = () => {
    router.push(nextLink);
  };
  return (
    <S.BottomButtonContainer>
      <BottomButton
        name="다음"
        isDark={true}
        isRound={true}
        disabled={!letterWriteInputObjectState.relationship}
        onClick={onClickNext}
      />
    </S.BottomButtonContainer>
  );
};

export default useBottomButton;
