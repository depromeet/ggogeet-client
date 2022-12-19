import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { WrapperChildren } from "@/src/types";
import { useRecoilValue } from "recoil";
import * as S from "../styled";

type LetterWriteMainNavRightType = "onClickSave" | "onClickSend";

type LetterWriteMainNavWright = {
  [key in LetterWriteMainNavRightType]: () => void;
};

const LetterWriteMainNavRight = ({
  onClickSave,
  onClickSend,
}: LetterWriteMainNavWright) => {
  return (
    <S.LetterWriteMainNavRightWrapper>
      <button onClick={onClickSave}>저장</button>
      <button onClick={onClickSend}>완료</button>
    </S.LetterWriteMainNavRightWrapper>
  );
};

const LetterWriteMainLayout = ({ children }: WrapperChildren) => {
  const letterWriteInputObjectState = useRecoilValue(letterWriteInputState);
  const onClickSave = () => {};
  const onClickSend = () => {};
  return (
    <S.LetterWriteMainLayoutWrapper>
      <TopNavigation
        leftElem={<NavBack color="black" />}
        title={<S.LetterWriteMainNavTitle>꼬깃 작성</S.LetterWriteMainNavTitle>}
        rightElem={
          <LetterWriteMainNavRight
            onClickSave={onClickSave}
            onClickSend={onClickSend}
          />
        }
      />
      {children}
    </S.LetterWriteMainLayoutWrapper>
  );
};

export default LetterWriteMainLayout;
