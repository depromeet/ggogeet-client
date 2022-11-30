import Input from '@/src/components/common/Input';
import { letterWriteInputState } from '@/src/store/LetterWrite';
import { useRouter } from 'next/router';
import { ChangeEventHandler, KeyboardEvent, ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import * as S from '../styled';

const ReceiverNameForm = (): ReactElement => {
  const {
    query: { type },
  } = useRouter();
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const router = useRouter();
  const onChangeInputObject: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setLetterWriteInputObjectState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onKeyUpReceiverName = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (type && typeof type === 'string') {
        const [front, end] = type.split('-');
        router.push(`/letter-write?type=${front}-0${Number(end) + 1}`);
      } else {
        router.push(`/letter-write?type=recipient-01`);
      }
    }
  };
  return (
    <>
      <S.LetterWriteH1>누구에게 보낼건가요?</S.LetterWriteH1>
      <S.LetterWriteInputContainer>
        <Input
          name='receiverName'
          placeholder='이름을 입력해주세요'
          defaultValue={letterWriteInputObjectState.receiverName}
          value={letterWriteInputObjectState.receiverName}
          onChange={onChangeInputObject}
          onKeyUp={onKeyUpReceiverName}
        />
      </S.LetterWriteInputContainer>
    </>
  );
};

export default ReceiverNameForm;
