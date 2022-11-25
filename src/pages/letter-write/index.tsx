import TextEditor from '@/src/components/letter-write/TextEditor';
import CustomTextEditorToolbar from '@/src/components/letter-write/TextEditor/CustomTextEditorToolbar/CustomTextEditorToolbar';
import TextTip from '@/src/components/letter-write/TextTip';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useRef, useState } from 'react';
import * as S from '@/src/components/letter-write/Toolbar/styled';
import Toolbar from '@/src/components/letter-write/Toolbar';
import { RefAny } from '@/src/types';

const LetterWritePage: NextPage = () => {
  const quillRef = useRef<RefAny>();
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
      {openCustomTextEditorToolbar && (
        <CustomTextEditorToolbar quillRef={quillRef} />
      )}
      <TextTip text='Tip : 친구에게 고마웠던 일을 적어보세요' />
      <LetterWriteMain>
        <TextEditor quillRef={quillRef} />
      </LetterWriteMain>
    </>
  );
};

const LetterWriteMain = styled.main`
  padding: 0 16px 54px;
`;

export default LetterWritePage;
