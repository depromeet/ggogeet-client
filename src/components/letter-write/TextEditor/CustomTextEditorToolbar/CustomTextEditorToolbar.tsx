import Image from 'next/image';
import { ReactElement } from 'react';
import * as S from './styled';

const customTextEditorToolbarMap = {
  'align-default': '/icons/icon__align-default.svg',
  'align-left': '/icons/icon__align-left.svg',
  'align-center': '/icons/icon__align-center.svg',
  'align-right': '/icons/icon__align-right.svg',
  'text-bold': '/icons/icon__text-bold.svg',
  'text-italic': '/icons/icon__text-italic.svg',
  'text-underline': '/icons/icon__text-underline.svg',
  'text-strike': '/icons/icon__text-strike.svg',
};

const CustomTextEditorToolbar = (): ReactElement => {
  return (
    <S.CustomTextEditorToolbarWrapper>
      {Object.entries(customTextEditorToolbarMap).map(([key, value]) => (
        <S.CustomTextEditorToolbarButton key={key}>
          <Image alt={key} src={value} width={18} height={18} />
        </S.CustomTextEditorToolbarButton>
      ))}
    </S.CustomTextEditorToolbarWrapper>
  );
};

export default CustomTextEditorToolbar;
