import { NextPage } from "next";
import { useRouter } from "next/router";
import * as S from "@/src/components/features/LetterWrite/InputRecipient/styled";
import LetterWriteInputRecipientLayout from "@/src/components/features/LetterWrite/InputRecipient/Layout";
import {
  ReceiverNameForm,
  RelationshipForm,
} from "@/src/components/features/LetterWrite/InputRecipient/Forms";

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
