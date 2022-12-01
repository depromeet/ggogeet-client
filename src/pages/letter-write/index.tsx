import { NextPage } from "next";
import { useRouter } from "next/router";
import * as S from "@/src/components/features/letter-write/input-recipient/styled";
import LetterWriteInputRecipientLayout from "@/src/components/features/letter-write/input-recipient/layout";
import {
  ReceiverNameForm,
  RelationshipForm,
} from "@/src/components/features/letter-write/input-recipient/forms";

const LetterWritePage: NextPage = () => {
  const {
    query: { type },
  } = useRouter();
  return (
    <LetterWriteInputRecipientLayout>
      <S.LetterWriteInputRecipientMain>
        {!type && <ReceiverNameForm />}
        {type === "recipient-01" && <RelationshipForm />}
      </S.LetterWriteInputRecipientMain>
    </LetterWriteInputRecipientLayout>
  );
};

export default LetterWritePage;
