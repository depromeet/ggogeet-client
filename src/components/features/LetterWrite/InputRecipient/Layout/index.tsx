import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
import { WrapperChildren } from "@/src/types";
import * as S from "../styled";

const LetterWriteInputRecipientLayout = ({ children }: WrapperChildren) => {
  return (
    <S.LetterWriteInputRecipientLayoutWrapper>
      <TopNavigation leftElem={<NavBack color="white" />} />
      {children}
    </S.LetterWriteInputRecipientLayoutWrapper>
  );
};

export default LetterWriteInputRecipientLayout;
