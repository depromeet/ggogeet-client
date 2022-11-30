import { atom } from 'recoil';

type RecipientInputType =
  | 'receiverName'
  | 'relationship'
  | 'situation'
  | 'contents';

export type RecipientInputObjectType = {
  [key in RecipientInputType]: string;
};

export const letterWriteInputState = atom<RecipientInputObjectType>({
  key: 'LetterWriteInputState',
  default: { receiverName: '', relationship: '', situation: '', contents: '' },
});
