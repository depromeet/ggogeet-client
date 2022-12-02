import TextEditor from "@/src/components/features/letter-write/main/TextEditor";
import CustomTextEditorToolbar from "@/src/components/features/letter-write/main/TextEditor/CustomTextEditorToolbar";
import TextTip from "@/src/components/features/letter-write/main/TextTip";
import styled from "@emotion/styled";
import { ReactElement, useRef, useState } from "react";
import * as S from "@/src/components/features/letter-write/main/Toolbar/styled";
import Toolbar from "@/src/components/features/letter-write/main/Toolbar";
import { RefAny } from "@/src/types";

const LetterWriteMain = (): ReactElement => {
  const quillRef = useRef<RefAny>();
  const [openCustomTextEditorToolbar, setOpenCustomTextEditorToolbar] =
    useState<boolean>(false);
  return (
    <>
      <S.ToolbarContainerWrapper>
        <S.ToolbarInnerContainerWrapper>
          <Toolbar
            type="Text"
            onClick={() => {
              setOpenCustomTextEditorToolbar((prev) => !prev);
            }}
          />
          <Toolbar type="Remind" />
        </S.ToolbarInnerContainerWrapper>
        <Toolbar type="Guideline" />
      </S.ToolbarContainerWrapper>
      {openCustomTextEditorToolbar && (
        <CustomTextEditorToolbar quillRef={quillRef} />
      )}
      <TextTip text="Tip : 친구에게 고마웠던 일을 적어보세요" />
      <Main>
        <TextEditor quillRef={quillRef} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 0 16px 54px;
`;

export default LetterWriteMain;
