import { NextPage } from "next";
import { useRouter } from "next/router";
import * as S from "@/src/components/features/LetterWrite/InputRecipient/styled";
import LetterWriteInputRecipientLayout from "@/src/components/features/LetterWrite/InputRecipient/Layout";
import {
  ReceiverNameForm,
  RelationshipForm,
  SituationForm,
} from "@/src/components/features/LetterWrite/InputRecipient/Forms";
import LetterWriteMainLayout from "@/src/components/features/LetterWrite/main/Layout";

type LetterWriteTypeKey = keyof typeof letterWriteTypeMap;

const letterWriteTypeMap = {
  "recipient-01": <RelationshipForm />,
  "recipient-02": <SituationForm />,
};

const LetterWritePage: NextPage = () => {
  const {
    query: { type },
  } = useRouter();
  return !type || type === "recipient-01" || type === "recipient-02" ? (
    <LetterWriteInputRecipientLayout>
      <S.LetterWriteInputRecipientMain>
        {type ? (
          letterWriteTypeMap[type as LetterWriteTypeKey]
        ) : (
          <ReceiverNameForm />
        )}
      </S.LetterWriteInputRecipientMain>
    </LetterWriteInputRecipientLayout>
  ) : (
    <LetterWriteMainLayout>
      <></>
    </LetterWriteMainLayout>
  );
};

export default LetterWritePage;
