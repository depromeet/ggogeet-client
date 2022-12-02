import TopNavigation from "@/src/components/common/TopNavigation";
import {
  NavBack,
  NavCancel,
} from "@/src/components/common/TopNavigation/Atoms";
import { WrapperChildren } from "@/src/types";
import * as S from "../styled";

const LetterWriteInputRecipientLayout = ({ children }: WrapperChildren) => {
  return (
    <S.LetterWriteInputRecipientLayoutWrapper>
      <TopNavigation leftElem={<NavBack />} rightElem={<NavCancel />} />
      {children}
    </S.LetterWriteInputRecipientLayoutWrapper>
  );
};

export default LetterWriteInputRecipientLayout;
