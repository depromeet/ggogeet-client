import TextEditor from '@/src/components/letter-write/TextEditor';
import CustomTextEditorToolbar from '@/src/components/letter-write/TextEditor/CustomTextEditorToolbar/CustomTextEditorToolbar';
import {
  ToolbarContainer,
  ToolbarInnerContainer,
} from '@/src/components/letter-write/ToolbarContainer';
import styled from '@emotion/styled';
import { NextPage } from 'next';
import { useState } from 'react';

const LetterWritePage: NextPage = () => {
  const [openCustomTextEditorToolbar, setOpenCustomTextEditorToolbar] =
    useState<boolean>(false);
  return (
    <>
      <ToolbarContainer>
        <ToolbarInnerContainer>
          <ToolbarContainer.ToolbarItem
            type='Text'
            onClick={() => {
              setOpenCustomTextEditorToolbar((prev) => !prev);
            }}
          />
          <ToolbarContainer.ToolbarItem type='Remind' />
        </ToolbarInnerContainer>
        <ToolbarContainer.ToolbarItem type='Guideline' />
      </ToolbarContainer>
      {openCustomTextEditorToolbar && <CustomTextEditorToolbar />}
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
