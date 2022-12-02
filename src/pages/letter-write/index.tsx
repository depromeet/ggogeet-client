import { NextPage } from "next";
import { useRouter } from "next/router";
import * as S from "@/src/components/features/LetterWrite/InputRecipient/styled";
import LetterWriteInputRecipientLayout from "@/src/components/features/LetterWrite/InputRecipient/Layout";
import {
  ReceiverFriendsForm,
  ReceiverNameForm,
  SituationForm,
} from "@/src/components/features/LetterWrite/InputRecipient/Forms";

type LetterWriteTypeKey = keyof typeof letterWriteTypeMap;

const letterWriteTypeMap = {
  "recipient-01": <ReceiverNameForm />,
  "recipient-02": <SituationForm />,
};

const LetterWritePage: NextPage = () => {
  const {
    query: { type },
  } = useRouter();
  return (
    <LetterWriteInputRecipientLayout>
      <S.LetterWriteInputRecipientMain>
<<<<<<< HEAD:src/pages/letter-write/index.tsx
        {type ? (
          letterWriteTypeMap[type as LetterWriteTypeKey]
        ) : (
          <ReceiverFriendsForm />
        )}
=======
        {!type && <ReceiverNameForm />}
        {type === "recipient-01" && <RelationshipForm />}
        {type === "recipient-02" && <SituationForm />}
>>>>>>> 496b6d0 (💄 편지 작성 - 상황 설정 기본 UI setup):src/pages/LetterWrite/index.tsx
      </S.LetterWriteInputRecipientMain>
    </LetterWriteInputRecipientLayout>
  );
};

export default LetterWritePage;
