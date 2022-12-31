import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { letterWriteInputState } from "@/src/store/LetterWrite";
import { WrapperChildren } from "@/src/types";
import { getDeletedHTMLTagsFromString } from "@/src/utils/LetterWrite";
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
  // const onClickSave = () => {
  // };
  const onClickSend = () => {
    const { contents } = letterWriteInputObjectState;
    const contentsLength = getDeletedHTMLTagsFromString(contents).length;
    if (contentsLength < 1 || contentsLength > 350) {
      // TODO: Toast 메시지
      alert("최소 1자 이상 최소 350자 이하 입력해주세요!");
    } else {
      router.push("/letter-write?type=completed-01");
    }
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
