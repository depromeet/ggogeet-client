import Button from "@/src/components/common/Buttons/Button";
import TopNavigation from "@/src/components/common/TopNavigation";
import {
  NavBack,
  NavCancel,
} from "@/src/components/common/TopNavigation/atoms";
import { useRouter } from "next/router";
import { ReactNode, useState } from "react";
import * as S from "../styled";

interface ILetterWriteInputRecipientLayout {
  children: ReactNode;
}

const LetterWriteInputRecipientLayout = ({
  children,
}: ILetterWriteInputRecipientLayout) => {
  const router = useRouter();
  const { type } = router.query;
  // TODO: Bottom Button disabled 로직
  const [isBottomButtonNextDisabled, setIsBottomButtonNextDisabled] =
    useState<boolean>(false);
  const onClickNext = () => {
    if (type && typeof type === "string") {
      const [front, end] = type.split("-");
      router.push(`/letter-write?type=${front}-0${Number(end) + 1}`);
    } else {
      router.push(`/letter-write?type=recipient-01`);
    }
  };
  const onClickBack = () => {
    router.back();
  };

  return (
    <S.LetterWriteInputRecipientLayoutWrapper>
      <TopNavigation
        leftElem={<NavBack action={onClickBack} />}
        rightElem={<NavCancel />}
      />
      {children}
      <S.BottomButtonContainer type={type}>
        {!type && (
          <Button
            name="꼬깃 친구 목록에서 찾기"
            fontStyle="bold"
            isRound={true}
          />
        )}
        <Button
          name="다음"
          fontStyle="bold"
          isRound={true}
          isDark={true}
          disabled={isBottomButtonNextDisabled}
          onClick={onClickNext}
        />
      </S.BottomButtonContainer>
    </S.LetterWriteInputRecipientLayoutWrapper>
  );
};

export default LetterWriteInputRecipientLayout;
