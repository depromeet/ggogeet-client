import TextEditor from '@/src/components/letter-write/TextEditor';
import CustomTextEditorToolbar from '@/src/components/letter-write/TextEditor/CustomTextEditorToolbar/CustomTextEditorToolbar';
import TextTip from '@/src/components/letter-write/TextTip';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useState } from 'react';
import * as S from '@/src/components/letter-write/Toolbar/styled';
import Toolbar from '@/src/components/letter-write/Toolbar';

const LetterWritePage: NextPage = () => {
  const [openCustomTextEditorToolbar, setOpenCustomTextEditorToolbar] =
    useState<boolean>(false);
  return (
    <>
      <S.ToolbarContainerWrapper>
        <S.ToolbarInnerContainerWrapper>
          <Toolbar
            type='Text'
            onClick={() => {
              setOpenCustomTextEditorToolbar((prev) => !prev);
            }}
          />
          <Toolbar type='Remind' />
        </S.ToolbarInnerContainerWrapper>
        <Toolbar type='Guideline' />
      </S.ToolbarContainerWrapper>
      {openCustomTextEditorToolbar && <CustomTextEditorToolbar />}
      <TextTip text='Tip : 친구에게 고마웠던 일을 적어보세요' />
      <LetterWriteMain>
        <TextEditor />
      </LetterWriteMain>
    </>
  );
};

const LetterWriteMain = styled.main`
  padding: 0 16px 54px;
`;

export default LetterWritePage;
