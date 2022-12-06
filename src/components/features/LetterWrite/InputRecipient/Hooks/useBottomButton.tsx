import BottomButton from "@/src/components/common/Buttons/BottomButton";
import { getNavigateNextLink } from "@/src/utils/LetterWrite";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import * as S from "../styled";

const useBottomButton = ({
  isDisabled,
}: {
  isDisabled: boolean;
}): ReactElement => {
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
        isDark
        isRound
        disabled={isDisabled}
        onClick={onClickNext}
      />
    </S.BottomButtonContainer>
  );
};

export default useBottomButton;
