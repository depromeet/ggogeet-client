import BottomButton from '@/src/components/common/Buttons/BottomButton';
import TopNavigation from '@/src/components/common/TopNavigation';
import {
  NavBack,
  NavCancel,
} from '@/src/components/common/TopNavigation/atoms';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface ILetterWriteInputRecipientLayout {
  children: ReactNode;
  bottomButtonStatus: 'Enabled' | 'Disabled';
}

const LetterWriteInputRecipientLayout = ({
  children,
  bottomButtonStatus = 'Enabled',
}: ILetterWriteInputRecipientLayout) => {
  return (
    <LetterWriteInputRecipientLayoutWrapper>
      <TopNavigation leftElem={<NavBack />} rightElem={<NavCancel />} />
      {children}
      <BottomButton
        name='다음'
        isRound={true}
        disabled={bottomButtonStatus === 'Disabled'}
      />
    </LetterWriteInputRecipientLayoutWrapper>
  );
};

const LetterWriteInputRecipientLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 16px 8px 16px;
`;

export default LetterWriteInputRecipientLayout;
