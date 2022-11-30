import BottomButton from '@/src/components/common/Buttons/BottomButton';
import Button from '@/src/components/common/Buttons/Button';
import TopNavigation from '@/src/components/common/TopNavigation';
import {
  NavBack,
  NavCancel,
} from '@/src/components/common/TopNavigation/atoms';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface ILetterWriteInputRecipientLayout {
  children: ReactNode;
  isBottomBottomNextDisabled: boolean;
}

const LetterWriteInputRecipientLayout = ({
  children,
  isBottomBottomNextDisabled = true,
}: ILetterWriteInputRecipientLayout) => {
  return (
    <LetterWriteInputRecipientLayoutWrapper>
      <TopNavigation leftElem={<NavBack />} rightElem={<NavCancel />} />
      {children}
      <BottomButtonContainer>
        <Button
          name='꼬깃 친구 목록에서 찾기'
          fontStyle='bold'
          isRound={true}
        />
        <Button
          name='다음'
          fontStyle='bold'
          isRound={true}
          isDark={true}
          disabled={isBottomBottomNextDisabled}
        />
      </BottomButtonContainer>
    </LetterWriteInputRecipientLayoutWrapper>
  );
};

const LetterWriteInputRecipientLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const BottomButtonContainer = styled.div`
  width: calc(100% - 32px);
  position: fixed;
  bottom: 8px;
  margin: 0 auto;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  button {
    width: 100%;
    height: 56px;
    border-radius: 30px;
  }
  button:first-child {
    border: 1px solid #767c8d;
  }
  button:last-child {
  }
`;

export default LetterWriteInputRecipientLayout;
