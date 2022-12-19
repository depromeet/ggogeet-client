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
        {type ? (
          letterWriteTypeMap[type as LetterWriteTypeKey]
        ) : (
          <ReceiverFriendsForm />
        )}
      </S.LetterWriteInputRecipientMain>
    </LetterWriteInputRecipientLayout>
  );
};

export default LetterWritePage;
