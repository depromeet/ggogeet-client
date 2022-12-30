import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { WrapperChildren } from "@/src/types";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import * as S from "../styled";

type LetterWriteMainNavRightType = "onClickSend";

type LetterWriteMainNavWright = {
  [key in LetterWriteMainNavRightType]: () => void;
};

const LetterWriteMainNavRight = ({ onClickSend }: LetterWriteMainNavWright) => {
  return (
    <S.LetterWriteMainNavRightWrapper>
      <button onClick={onClickSend}>완료</button>
    </S.LetterWriteMainNavRightWrapper>
  );
};

const LetterWriteMainLayout = ({ children }: WrapperChildren) => {
  const router = useRouter();
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const onClickSave = () => {
    // TODO: 편지 임시저장 API
  };
  const onClickSend = () => {
    router.push("/letter-write?type=completed");
  };
  return (
    <S.LetterWriteMainLayoutWrapper>
      <TopNavigation
        leftElem={<NavBack color="black" />}
        title={<S.LetterWriteMainNavTitle>꼬깃 작성</S.LetterWriteMainNavTitle>}
        rightElem={<LetterWriteMainNavRight onClickSend={onClickSend} />}
      />
      {children}
    </S.LetterWriteMainLayoutWrapper>
  );
};

export default LetterWriteMainLayout;
