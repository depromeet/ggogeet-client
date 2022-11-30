import { ChangeEventHandler, ReactElement, useState } from 'react';
import ReceiverNameForm from './forms/ReceiverNameForm';
import LetterWriteInputRecipientLayout from './layout';
import * as S from './styled';

type RecipientInputType =
  | 'receiverName'
  | 'relationship'
  | 'situation'
  | 'contents';

export type RecipientInputObjectType = {
  [key in RecipientInputType]: string;
};

export type RecipientCompletedObjectType = {
  [key in RecipientInputType]: boolean;
};

const LetterWriteInputRecipient = (): ReactElement => {
  const [inputObject, setInputObject] = useState<RecipientInputObjectType>({
    receiverName: '',
    relationship: '',
    situation: '',
    contents: '',
  });
  const [completedObject, setCompletedObject] =
    useState<RecipientCompletedObjectType>({
      receiverName: false,
      relationship: false,
      situation: false,
      contents: false,
    });
  const onChangeInputObject: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setInputObject((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <LetterWriteInputRecipientLayout
      inputObject={inputObject}
      setCompletedObject={setCompletedObject}
    >
      <S.LetterWriteInputRecipientMain>
        {!completedObject.receiverName && (
          <ReceiverNameForm
            inputObject={inputObject}
            onChangeInputObject={onChangeInputObject}
          />
        )}
        {completedObject.receiverName && !completedObject.relationship && <>관계</>}
      </S.LetterWriteInputRecipientMain>
    </LetterWriteInputRecipientLayout>
  );
};

export default LetterWriteInputRecipient;
