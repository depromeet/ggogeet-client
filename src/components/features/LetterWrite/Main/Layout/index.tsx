import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { WrapperChildren } from "@/src/types";
import { useRouter } from "next/router";
import * as S from "../styled";

const LetterWriteMainNavRight = () => {
  const router = useRouter();
  const onClickSend = () => {
    router.push("/letter-write?type=completed-01");
  };
  return (
    <S.LetterWriteMainNavRightWrapper>
      <button onClick={onClickSend}>완료</button>
    </S.LetterWriteMainNavRightWrapper>
  );
};

const LetterWriteMainLayout = ({ children }: WrapperChildren) => {
  return (
    <S.LetterWriteMainLayoutWrapper>
      <TopNavigation
        leftElem={<NavBack color="black" />}
        title={<S.LetterWriteMainNavTitle>꼬깃 작성</S.LetterWriteMainNavTitle>}
        rightElem={<LetterWriteMainNavRight />}
      />
      {children}
    </S.LetterWriteMainLayoutWrapper>
  );
};

export default LetterWriteMainLayout;
