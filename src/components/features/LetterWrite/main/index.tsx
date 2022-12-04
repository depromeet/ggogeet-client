import TextEditor from "@/src/components/features/LetterWrite/main/TextEditor";
import CustomTextEditorToolbar from "@/src/components/features/LetterWrite/main/TextEditor/CustomTextEditorToolbar";
import TextTip from "@/src/components/features/LetterWrite/main/TextTip";
import { ReactElement, useRef, useState } from "react";
import Toolbar from "@/src/components/features/LetterWrite/main/Toolbar";
import { RefAny } from "@/src/types";
import * as S from "./styled";

type ToolbarClickedStatusType =
  | "Text"
  | "Color"
  | "Align"
  | "Guideline"
  | "Remind";

type ToolbarClickedStatusObjectType = {
  [key in ToolbarClickedStatusType]: boolean;
};

const leftToolbarMenus: ToolbarClickedStatusType[] = [
  "Text",
  "Color",
  "Align",
  "Guideline",
];

const LetterWriteMain = (): ReactElement => {
  const quillRef = useRef<RefAny>();
  const [openToolbarStatusObject, setOpenToolbarStatusObject] =
    useState<ToolbarClickedStatusObjectType>({
      Text: false,
      Color: false,
      Align: false,
      Guideline: false,
      Remind: false,
    });
  const onToggleToolbar = (type: ToolbarClickedStatusType) => {
    setOpenToolbarStatusObject((prev) => ({ ...prev, [type]: !prev[type] }));
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
              isClicked={openToolbarStatusObject[type]}
            />
          ))}
        </S.ToolbarInnerContainerWrapper>
        <Toolbar type="Remind" onClick={() => onToggleToolbar("Remind")} />
      </S.ToolbarContainerWrapper>
      <CustomTextEditorToolbar quillRef={quillRef} />
      <TextTip text="Tip : 친구에게 고마웠던 일을 적어보세요" />
      <S.TextEditorContainer>
        <TextEditor quillRef={quillRef} />
      </S.TextEditorContainer>
    </>
  );
};

export default LetterWriteMain;
