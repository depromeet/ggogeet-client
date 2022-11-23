import { ReactElement } from 'react';
import * as S from './styled';

type Props = {
  text: string;
};

const TextTip = ({ text }: Props): ReactElement => {
  return (
    <S.TextTipWrapper>
      <span>{text}</span>
    </S.TextTipWrapper>
  );
};

export default TextTip;
