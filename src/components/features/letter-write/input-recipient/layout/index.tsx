import Button from '@/src/components/common/Buttons/Button';
import TopNavigation from '@/src/components/common/TopNavigation';
import {
  NavBack,
  NavCancel,
} from '@/src/components/common/TopNavigation/atoms';
import styled from '@emotion/styled';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { RecipientCompletedObjectType, RecipientInputObjectType } from '..';

interface ILetterWriteInputRecipientLayout {
  children: ReactNode;
  inputObject: RecipientInputObjectType;
  setCompletedObject: Dispatch<SetStateAction<RecipientCompletedObjectType>>;
}

const LetterWriteInputRecipientLayout = ({
  children,
  inputObject,
  setCompletedObject,
}: ILetterWriteInputRecipientLayout) => {
  const [isBottomButtonNextDisabled, setIsBottomButtonNextDisabled] =
    useState<boolean>(true);
  useEffect(() => {
    // TODO: 최소 길이/최대 길이 지정
    if (inputObject.receiverName.length >= 3) {
      setIsBottomButtonNextDisabled(false);
    }
  }, [inputObject]);
  const onClickNextButton = () => {
    if (inputObject.receiverName.length >= 3) {
      setCompletedObject((prev) => ({ ...prev, receiverName: true }));
    }
  };
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
          disabled={isBottomButtonNextDisabled}
          onClick={onClickNextButton}
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
