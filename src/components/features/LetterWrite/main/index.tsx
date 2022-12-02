import TextEditor from "@/src/components/features/LetterWrite/main/TextEditor";
import CustomTextEditorToolbar from "@/src/components/features/LetterWrite/main/TextEditor/CustomTextEditorToolbar";
import TextTip from "@/src/components/features/LetterWrite/main/TextTip";
import styled from "@emotion/styled";
import { ReactElement, useRef, useState } from "react";
import Toolbar from "@/src/components/features/LetterWrite/main/Toolbar";
import { RefAny } from "@/src/types";
import * as S from "./styled";

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
          <Toolbar type="Color" />
          <Toolbar type="Align" />
          <Toolbar type="Guideline" />
        </S.ToolbarInnerContainerWrapper>
        <Toolbar type="Remind" />
      </S.ToolbarContainerWrapper>
      {openCustomTextEditorToolbar && (
        <CustomTextEditorToolbar quillRef={quillRef} />
      )}
      <TextTip text="Tip : 친구에게 고마웠던 일을 적어보세요" />
      <S.TextEditorContainer>
        <TextEditor quillRef={quillRef} />
      </S.TextEditorContainer>
    </>
  );
};

export default LetterWriteMain;
