import TextEditor from '@/src/components/letter-write/TextEditor';
import {
  ToolbarContainer,
  ToolbarInnerContainer,
} from '@/src/components/letter-write/ToolbarContainer';
import { NextPage } from 'next';

const LetterWritePage: NextPage = () => {
  return (
    <>
      <ToolbarContainer>
        <ToolbarInnerContainer>
          <ToolbarContainer.ToolbarItem type='TextEditor' />
          <ToolbarContainer.ToolbarItem type='Remind' />
        </ToolbarInnerContainer>
        <ToolbarContainer.ToolbarItem type='Guideline' />
      </ToolbarContainer>
      <TextEditor />
    </>
  );
};

export default LetterWritePage;
