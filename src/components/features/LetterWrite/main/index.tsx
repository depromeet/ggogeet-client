import TextEditor from "@/src/components/features/LetterWrite/Main/TextEditor";
import CustomTextEditorToolbar from "@/src/components/features/LetterWrite/Main/TextEditor/CustomTextEditorToolbar";
import { ReactElement, useEffect, useRef, useState } from "react";
import Toolbar from "@/src/components/features/LetterWrite/Main/Toolbar";
import { RefAny } from "@/src/types";
import * as S from "./styled";
import BottomSheet from "@/src/components/common/BottomSheet";
import Guideline from "./Guideline";
import Remind from "./Remind";

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

const leftToolbarMenus: ToolbarClickedStatusType[] = ["Text", "Color", "Align"];
const rightToolbarMenus: ToolbarClickedStatusType[] = ["Guideline", "Remind"];

// TODO: 바텀 시트 열렸을 때 바깥 모든 버튼 이벤트 prevent 하기
const LetterWriteMain = (): ReactElement => {
  const quillRef = useRef<RefAny>(null);
  const [currentClickedToolbarStatus, setCurrentClickedToolbarStatus] =
    useState<ToolbarClickedStatusObject>();
  const onToggleToolbar = (type: ToolbarClickedStatusType) => {
    setCurrentClickedToolbarStatus((prev) => ({
      ...prev,
      type,
      status: prev?.type !== type ? true : !prev?.status ?? true,
    }));
  };
  const onClose = (type: "Guideline" | "Remind") => {
    setCurrentClickedToolbarStatus((prev) => ({
      type,
      status: false,
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
        <S.ToolbarInnerContainerWrapper>
          {rightToolbarMenus.map((type) => (
            <Toolbar
              key={type}
              type={type}
              onClick={() => onToggleToolbar(type)}
            />
          ))}
        </S.ToolbarInnerContainerWrapper>
      </S.ToolbarContainerWrapper>
      {currentClickedToolbarStatus?.type &&
        currentClickedToolbarStatus.status && (
          <CustomTextEditorToolbar
            quillRef={quillRef}
            type={currentClickedToolbarStatus.type}
          />
        )}
      <TextEditor quillRef={quillRef} />
      <BottomSheet
        isOpened={
          currentClickedToolbarStatus?.type === "Guideline" &&
          currentClickedToolbarStatus.status
        }
        onClose={() => onClose("Guideline")}
      >
        <Guideline onClose={onClose} />
      </BottomSheet>
      <BottomSheet
        isOpened={
          currentClickedToolbarStatus?.type === "Remind" &&
          currentClickedToolbarStatus.status
        }
        onClose={() => onClose("Remind")}
      >
        <Remind />
      </BottomSheet>
    </>
  );
};

export default LetterWriteMain;
