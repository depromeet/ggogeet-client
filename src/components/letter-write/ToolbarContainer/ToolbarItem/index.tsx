import { ReactElement } from 'react';
import Image from 'next/image';
import * as S from './styled';

type Props = {
  type: 'Text' | 'Remind' | 'Guideline';
};

const toolbarItemMap = {
  Text: {
    src: '/icons/icon__text.svg',
    width: 24,
    height: 24,
  },
  Remind: {
    src: '/icons/icon__remind.svg',
    width: 22,
    height: 22,
  },
  Guideline: {
    src: '/icons/icon__guideline.svg',
    width: 24,
    height: 24,
  },
} as const;

const ToolbarItem = ({ type }: Props): ReactElement => {
  return (
    <S.ToolbarItemWrapper>
      <Image alt={type} {...toolbarItemMap[type]} />
    </S.ToolbarItemWrapper>
  );
};

export default ToolbarItem;
