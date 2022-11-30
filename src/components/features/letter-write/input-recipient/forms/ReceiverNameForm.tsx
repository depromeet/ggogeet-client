import Input from '@/src/components/common/Input';
import { letterWriteInputState } from '@/src/store/LetterWrite';
import { ChangeEventHandler, ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import * as S from '../styled';

const ReceiverNameForm = (): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const onChangeInputObject: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <S.LetterWriteH1>누구에게 보낼건가요?</S.LetterWriteH1>
      <S.LetterWriteInputContainer>
        <Input
          name='receiverName'
          placeholder='이름을 입력해주세요'
          value={letterWriteInputObjectState.receiverName}
          onChange={onChangeInputObject}
        />
      </S.LetterWriteInputContainer>
    </>
  );
};

export default ReceiverNameForm;
