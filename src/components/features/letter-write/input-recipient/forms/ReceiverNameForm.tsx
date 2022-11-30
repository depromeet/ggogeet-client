import Input from '@/src/components/common/Input';
import { ChangeEventHandler } from 'react';
import { RecipientInputObjectType } from '..';
import * as S from '../styled';

type ReceiverNameFormType = {
  inputObject: RecipientInputObjectType;
  onChangeInputObject: ChangeEventHandler<HTMLInputElement>;
};

const ReceiverNameForm = ({
  inputObject,
  onChangeInputObject,
}: ReceiverNameFormType) => {
  return (
    <>
      <S.LetterWriteH1>누구에게 보낼건가요?</S.LetterWriteH1>
      <S.LetterWriteInputContainer>
        <Input
          name='receiverName'
          placeholder='이름을 입력해주세요'
          value={inputObject.receiverName}
          onChange={onChangeInputObject}
        />
      </S.LetterWriteInputContainer>
    </>
  );
};

export default ReceiverNameForm;
