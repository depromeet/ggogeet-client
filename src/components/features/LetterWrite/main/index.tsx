import TextEditor from "@/src/components/features/LetterWrite/main/TextEditor";
import CustomTextEditorToolbar from "@/src/components/features/LetterWrite/main/TextEditor/CustomTextEditorToolbar";
import TextTip from "@/src/components/features/LetterWrite/main/TextTip";
import { ReactElement, useRef, useState } from "react";
import Toolbar from "@/src/components/features/LetterWrite/main/Toolbar";
import { RefAny } from "@/src/types";
import * as S from "./styled";

export type ToolbarClickedStatusType =
  | "Text"
  | "Color"
  | "Align"
  | "Guideline"
  | "Remind";

type ToolbarClickedStatusObject = {
  type: ToolbarClickedStatusType;
  status: boolean;
};

const leftToolbarMenus: ToolbarClickedStatusType[] = [
  "Text",
  "Color",
  "Align",
  "Guideline",
];

const LetterWriteMain = (): ReactElement => {
  const quillRef = useRef<RefAny>();
  const [currentClickedToolbarStatus, setCurrentClickedToolbarStatus] =
    useState<ToolbarClickedStatusObject>();
  const onToggleToolbar = (type: ToolbarClickedStatusType) => {
    setCurrentClickedToolbarStatus((prev) => ({
      ...prev,
      type,
      status: prev?.type !== type ? true : !prev?.status ?? true,
    }));
  };
  return (
    <>
      <S.ToolbarContainerWrapper>
        <S.ToolbarInnerContainerWrapper>
          {leftToolbarMenus.map((type) => (
            <Toolbar
              key={type}
              type={type}
              onClick={() => onToggleToolbar(type)}
              isClicked={
                type === currentClickedToolbarStatus?.type &&
                currentClickedToolbarStatus.status
              }
            />
          ))}
        </S.ToolbarInnerContainerWrapper>
        <Toolbar type="Remind" onClick={() => onToggleToolbar("Remind")} />
      </S.ToolbarContainerWrapper>
      {currentClickedToolbarStatus?.type &&
        currentClickedToolbarStatus.status && (
          <CustomTextEditorToolbar
            quillRef={quillRef}
            type={currentClickedToolbarStatus.type}
          />
        )}
      <TextTip text="Tip : 친구에게 고마웠던 일을 적어보세요" />
      <S.TextEditorContainer>
        <TextEditor quillRef={quillRef} />
      </S.TextEditorContainer>
    </>
  );
};

export default LetterWriteMain;
