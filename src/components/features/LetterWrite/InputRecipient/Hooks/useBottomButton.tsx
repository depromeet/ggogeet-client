import Button from "@/src/components/common/Buttons/Button";
import { getNavigateNextLink } from "@/src/utils/LetterWrite";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import * as S from "../styled";

interface UseBottomButtonProps {
  text?: string;
  isDisabled?: boolean;
  customClickHandler?: () => void;
}

const useBottomButton = (
  { text, isDisabled, customClickHandler }: UseBottomButtonProps = {
    text: "다음",
    isDisabled: false,
  }
): ReactElement => {
  const router = useRouter();
  const { type } = router.query;
  const nextLink = getNavigateNextLink(type);
  const onClickNext = () => {
    router.push(nextLink);
  };
  return (
    <S.BottomButtonContainer>
      <Button
        name={text ?? "다음"}
        size="xl"
        disabled={isDisabled}
        onClick={customClickHandler ?? onClickNext}
      />
    </S.BottomButtonContainer>
  );
};

export default useBottomButton;
