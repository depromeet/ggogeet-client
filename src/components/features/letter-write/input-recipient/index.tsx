import { ReactElement, useState } from 'react';
import LetterWriteInputRecipientLayout from './layout';

const LetterWriteInputRecipient = (): ReactElement => {
  const [isBottomButtonNextDisabled, setIsBottomButtonNextDisabled] =
    useState<boolean>(false);
  return (
    <LetterWriteInputRecipientLayout
      isBottomBottomNextDisabled={isBottomButtonNextDisabled}
    >
      <></>
    </LetterWriteInputRecipientLayout>
  );
};

export default LetterWriteInputRecipient;
