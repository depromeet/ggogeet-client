import TopNavigation from "@/src/components/common/TopNavigation";
import {
  NavBack,
  NavCancel,
} from "@/src/components/common/TopNavigation/atoms";
import { ReactNode } from "react";
import * as S from "../styled";

interface ILetterWriteInputRecipientLayout {
  children: ReactNode;
}

const LetterWriteInputRecipientLayout = ({
  children,
}: ILetterWriteInputRecipientLayout) => {
  return (
    <S.LetterWriteInputRecipientLayoutWrapper>
      <TopNavigation leftElem={<NavBack />} rightElem={<NavCancel />} />
      {children}
    </S.LetterWriteInputRecipientLayoutWrapper>
  );
};

export default LetterWriteInputRecipientLayout;
