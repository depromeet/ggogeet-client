import { RefAny } from "@/src/types";
import Image from "next/image";
import { ReactElement } from "react";
import { ToolbarClickedStatusType } from "../..";
import * as S from "../../styled";

type CustomTextEditorToolbarMapType = {
  [key in ToolbarClickedStatusType]?: {
    [index: string]: string;
  };
};

const customTextEditorToolbarMap: CustomTextEditorToolbarMapType = {
  Text: {
    bold: "/Icons/icon__text-bold.svg",
    italic: "/Icons/icon__text-italic.svg",
    underline: "/Icons/icon__text-underline.svg",
    strike: "/Icons/icon__text-strike.svg",
    header1: "/Icons/icon__text-header1.svg",
    header2: "/Icons/icon__text-header2.svg",
    header4: "/Icons/icon__text-header4.svg",
  },
  Color: {
    color01: "/Icons/icon__text-color01.svg",
    color02: "/Icons/icon__text-color02.svg",
    color03: "/Icons/icon__text-color03.svg",
    color04: "/Icons/icon__text-color04.svg",
    color05: "/Icons/icon__text-color05.svg",
    bgColor01: "/Icons/icon__text-bgColor01.svg",
    bgColor02: "/Icons/icon__text-bgColor02.svg",
    bgColor03: "/Icons/icon__text-bgColor03.svg",
    bgColor04: "/Icons/icon__text-bgColor04.svg",
    bgColor05: "/Icons/icon__text-bgColor05.svg",
  },
  Align: {
    "align-left": "/Icons/icon__align-left.svg",
    "align-center": "/Icons/icon__align-center.svg",
    "align-right": "/Icons/icon__align-right.svg",
    "align-justify": "/Icons/icon__align-justify.svg",
  },
};

interface CustomTextEditorToolbarType {
  type: ToolbarClickedStatusType;
  quillRef: RefAny;
}

const differentWidth = ["title01", "title02", "body"];

const CustomTextEditorToolbar = ({
  type,
  quillRef,
}: CustomTextEditorToolbarType): ReactElement => {
  const onClickToolbar = (toolbarDetailType: string) => {
    const quill = quillRef.current.getEditor();
    if (["bold", "italic", "underline", "strike"].includes(toolbarDetailType)) {
      quill.format(toolbarDetailType, true);
    } else if (toolbarDetailType.startsWith("header")) {
      const value = parseInt(toolbarDetailType.slice(-1));
      quill.format("header", value);
    } else {
      let key: string;
      let value: string | boolean;
      [key, value] = toolbarDetailType.split("-");
      if (value === "left") value = false;
      quill.format(key, value);
    }
  };
  return (
    <>
      {customTextEditorToolbarMap[type] && (
        <S.CustomTextEditorToolbarWrapper type={type}>
          {Object.entries(customTextEditorToolbarMap[type]!).map(
            ([key, value]) => (
              <S.CustomTextEditorToolbarButton
                key={key}
                onClick={() => onClickToolbar(key)}
              >
                <Image
                  src={value}
                  alt={key}
                  width={differentWidth.includes(key) ? 36 : 24}
                  height={24}
                />
              </S.CustomTextEditorToolbarButton>
            )
          )}
        </S.CustomTextEditorToolbarWrapper>
      )}
    </>
  );
};

export default CustomTextEditorToolbar;
