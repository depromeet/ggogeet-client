import { NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  LetterWriteInputRecipientLayout,
  ReceiverNameForm,
  RelationshipForm,
} from '@/src/components/features/letter-write/input-recipient';
import * as S from '@/src/components/features/letter-write/input-recipient/styled';

const LetterWritePage: NextPage = () => {
  const {
    query: { type },
  } = useRouter();
  return (
    <LetterWriteInputRecipientLayout type={type}>
      <S.LetterWriteInputRecipientMain>
        {type === 'recipient-01' && <ReceiverNameForm />}
        {type === 'recipient-02' && <></>}
        {type === 'recipient-03' && <RelationshipForm />}
      </S.LetterWriteInputRecipientMain>
    </LetterWriteInputRecipientLayout>
  );
};

export default LetterWritePage;
