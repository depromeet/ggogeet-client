import TopNavigation from "@/src/components/common/TopNavigation";
import { NavBack } from "@/src/components/common/TopNavigation/Atoms";
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
      <TopNavigation leftElem={<NavBack />} />
      {children}
    </S.LetterWriteInputRecipientLayoutWrapper>
  );
};

export default LetterWriteInputRecipientLayout;
