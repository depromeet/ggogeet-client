import Input from '@/src/components/common/Input';
import { Header1 } from '@/src/styles/commons';
import styled from '@emotion/styled';
import { ChangeEventHandler, ReactElement, useEffect, useState } from 'react';
import LetterWriteInputRecipientLayout from './layout';

type RecipientInputObjectType = {
  receiverName: string;
  relationship: string;
  situation: string;
  contents: string;
};

const LetterWriteInputRecipient = (): ReactElement => {
  const [isBottomButtonNextDisabled, setIsBottomButtonNextDisabled] =
    useState<boolean>(true);
  const [inputObject, setInputObject] = useState<RecipientInputObjectType>({
    receiverName: '',
    relationship: '',
    situation: '',
    contents: '',
  });
  const onChangeInputObject: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;
    setInputObject((prev) => ({
      ...prev,
      receiverName: value,
    }));
  };
  useEffect(() => {
    // TODO: 최소 길이/최대 길이 지정
    if (inputObject.receiverName.length >= 3) {
      setIsBottomButtonNextDisabled(false);
    }
  }, [inputObject.receiverName.length]);
  return (
    <LetterWriteInputRecipientLayout
      isBottomBottomNextDisabled={isBottomButtonNextDisabled}
    >
      <LetterWriteInputRecipientMain>
        <LetterWriteH1>누구에게 보낼건가요?</LetterWriteH1>
        <LetterWriteInputContainer>
          <Input
            placeholder='이름을 입력해주세요'
            value={inputObject.receiverName}
            onChange={onChangeInputObject}
          />
        </LetterWriteInputContainer>
      </LetterWriteInputRecipientMain>
    </LetterWriteInputRecipientLayout>
  );
};

const LetterWriteInputRecipientMain = styled.main`
  padding: 12px 16px;
  height: calc(100vh - 44px);
`;

const LetterWriteH1 = styled.h1`
  line-height: 150%;
  color: #767c8d;
  ${Header1}
`;

const LetterWriteInputContainer = styled.div`
  margin-top: 32px;
  height: 30px;
  input {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    &::placeholder {
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
    }
  }
`;

export default LetterWriteInputRecipient;
