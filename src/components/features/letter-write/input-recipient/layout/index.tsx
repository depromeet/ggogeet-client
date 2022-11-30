import Button from '@/src/components/common/Buttons/Button';
import TopNavigation from '@/src/components/common/TopNavigation';
import {
  NavBack,
  NavCancel,
} from '@/src/components/common/TopNavigation/atoms';
import { letterWriteInputState } from '@/src/store/LetterWrite';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as S from '../styled';

interface ILetterWriteInputRecipientLayout {
  children: ReactNode;
  type?: string | string[];
}

const LetterWriteInputRecipientLayout = ({
  children,
  type,
}: ILetterWriteInputRecipientLayout) => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const [isBottomButtonNextDisabled, setIsBottomButtonNextDisabled] =
    useState<boolean>(true);
  const router = useRouter();
  useEffect(() => {
    if (letterWriteInputObjectState.receiverName.length >= 3) {
      setIsBottomButtonNextDisabled(false);
    }
  }, [letterWriteInputObjectState]);
  const onClickNext = (type?: string | string[]) => {
    if (type === 'recipient-01') {
      router.push('/letter-write?type=recipient-02');
    }
  };
  return (
    <S.LetterWriteInputRecipientLayoutWrapper>
      <TopNavigation leftElem={<NavBack />} rightElem={<NavCancel />} />
      {children}
      <S.BottomButtonContainer type={type}>
        {type === 'recipient-01' && (
          <Button
            name='꼬깃 친구 목록에서 찾기'
            fontStyle='bold'
            isRound={true}
          />
        )}
        <Button
          name='다음'
          fontStyle='bold'
          isRound={true}
          isDark={true}
          disabled={isBottomButtonNextDisabled}
          onClick={() => onClickNext(type)}
        />
      </S.BottomButtonContainer>
    </S.LetterWriteInputRecipientLayoutWrapper>
  );
};

export default LetterWriteInputRecipientLayout;
