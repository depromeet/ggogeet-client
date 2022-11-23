import { ReactElement, ReactNode } from 'react';
import * as S from './styled';
import ToolbarItem from './ToolbarItem';

type Props = {
  children: ReactNode;
};

export const ToolbarContainer = ({ children }: Props): ReactElement => {
  return <S.ToolbarContainerWrapper>{children}</S.ToolbarContainerWrapper>;
};

export const ToolbarInnerContainer = ({ children }: Props): ReactElement => {
  return (
    <S.ToolbarInnerContainerWrapper>{children}</S.ToolbarInnerContainerWrapper>
  );
};

ToolbarContainer.ToolbarItem = ToolbarItem;
