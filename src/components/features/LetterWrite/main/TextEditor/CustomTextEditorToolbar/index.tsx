import { RefAny } from "@/src/types";
import Image from "next/image";
import { ReactElement, useState } from "react";
import { ToolbarClickedStatusType } from "../..";
import * as S from "../../styled";

type ToolbarFormatType =
  | "bold"
  | "italic"
  | "underline"
  | "strike"
  | "huge"
  | "large"
  | "normal"
  | "left"
  | "center"
  | "right"
  | "justify";

type ToolbarFormatsStatus = {
  [key in ToolbarFormatType]: boolean | number | string;
};

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
    huge: "/Icons/icon__text-huge.svg",
    large: "/Icons/icon__text-large.svg",
    normal: "/Icons/icon__text-normal.svg",
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
    left: "/Icons/icon__align-left.svg",
    center: "/Icons/icon__align-center.svg",
    right: "/Icons/icon__align-right.svg",
    justify: "/Icons/icon__align-justify.svg",
  },
};

interface CustomTextEditorToolbarType {
  type: ToolbarClickedStatusType;
  quillRef: RefAny;
}

const fontStyleFormatArray = ["bold", "italic", "underline", "strike"];
const fontSizeFormatArray = ["huge", "large", "normal"];

const CustomTextEditorToolbar = ({
  type,
  quillRef,
}: CustomTextEditorToolbarType): ReactElement => {
  const [formats, setFormats] = useState<ToolbarFormatsStatus>({
    bold: false,
    italic: false,
    underline: false,
    strike: false,
    huge: "",
    large: "",
    normal: false,
    left: false,
    center: "",
    right: "",
    justify: "",
  });
  const onClickToolbar = (toolbarDetailType: ToolbarFormatType) => {
    // TODO: Color 적용
    const quill = quillRef.current.getEditor();
    if (fontStyleFormatArray.includes(toolbarDetailType)) {
      const status = !formats[toolbarDetailType];
      quill.format(toolbarDetailType, status);
      setFormats((prev) => ({
        ...prev,
        [toolbarDetailType]: status,
      }));
    } else if (fontSizeFormatArray.includes(toolbarDetailType)) {
      let value: ToolbarFormatType | boolean = toolbarDetailType;
      if (value === "normal") value = false;
      quill.format("size", value);
      setFormats((prev) => ({
        ...prev,
        [toolbarDetailType]: value,
      }));
    } else {
      let value: ToolbarFormatType | boolean = toolbarDetailType;
      if (toolbarDetailType === "left") value = false;
      quill.format("align", value);
      setFormats((prev) => ({
        ...prev,
        [toolbarDetailType]: value,
      }));
    }
  };
  return (
    <>
      {customTextEditorToolbarMap[type] && (
        <S.CustomTextEditorToolbarWrapper>
          {Object.entries(customTextEditorToolbarMap[type]!).map(
            ([key, value]) => (
              <S.CustomTextEditorToolbarButton
                key={key}
                onClick={() => onClickToolbar(key as ToolbarFormatType)}
              >
                <Image
                  src={value}
                  alt={key}
                  width={fontSizeFormatArray.includes(key) ? 36 : 24}
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
