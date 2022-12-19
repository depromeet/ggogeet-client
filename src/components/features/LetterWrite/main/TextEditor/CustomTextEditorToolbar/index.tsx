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
  | "right";

type ToolbarFormatsStatus = {
  [key in ToolbarFormatType]: boolean | string;
};

type CustomTextEditorToolbarMapType = {
  [key in ToolbarClickedStatusType]?: {
    [index: string]: {
      default: string;
      active: string;
    };
  };
};

const customTextEditorToolbarMap: CustomTextEditorToolbarMapType = {
  Text: {
    bold: {
      default: "/Icons/icon__text-bold.svg",
      active: "/Icons/icon__text-bold--active.svg",
    },
    italic: {
      default: "/Icons/icon__text-italic.svg",
      active: "/Icons/icon__text-italic--active.svg",
    },
    underline: {
      default: "/Icons/icon__text-underline.svg",
      active: "/Icons/icon__text-underline--active.svg",
    },
    strike: {
      default: "/Icons/icon__text-strike.svg",
      active: "/Icons/icon__text-strike--active.svg",
    },
    huge: {
      default: "/Icons/icon__text-huge.svg",
      active: "/Icons/icon__text-huge.svg",
    },
    large: {
      default: "/Icons/icon__text-large.svg",
      active: "/Icons/icon__text-large.svg",
    },
    normal: {
      default: "/Icons/icon__text-normal.svg",
      active: "/Icons/icon__text-normal.svg",
    },
  },
  Color: {
    color01: {
      default: "/Icons/icon__text-color01.svg",
      active: "/Icons/icon__text-color01--active.svg",
    },
    color02: {
      default: "/Icons/icon__text-color02.svg",
      active: "/Icons/icon__text-color02--active.svg",
    },
    color03: {
      default: "/Icons/icon__text-color03.svg",
      active: "/Icons/icon__text-color03--active.svg",
    },
    color04: {
      default: "/Icons/icon__text-color04.svg",
      active: "/Icons/icon__text-color04--active.svg",
    },
    color05: {
      default: "/Icons/icon__text-color05.svg",
      active: "/Icons/icon__text-color05--active.svg",
    },
    bgColor01: {
      default: "/Icons/icon__text-bgColor01.svg",
      active: "/Icons/icon__text-bgColor01--active.svg",
    },
    bgColor02: {
      default: "/Icons/icon__text-bgColor02.svg",
      active: "/Icons/icon__text-bgColor02--active.svg",
    },
    bgColor03: {
      default: "/Icons/icon__text-bgColor03.svg",
      active: "/Icons/icon__text-bgColor03--active.svg",
    },
    bgColor04: {
      default: "/Icons/icon__text-bgColor04.svg",
      active: "/Icons/icon__text-bgColor04--active.svg",
    },
    bgColor05: {
      default: "/Icons/icon__text-bgColor05.svg",
      active: "/Icons/icon__text-bgColor05--active.svg",
    },
  },
  Align: {
    left: {
      default: "/Icons/icon__align-left.svg",
      active: "/Icons/icon__align-left--active.svg",
    },
    center: {
      default: "/Icons/icon__align-center.svg",
      active: "/Icons/icon__align-center--active.svg",
    },
    right: {
      default: "/Icons/icon__align-right.svg",
      active: "/Icons/icon__align-right--active.svg",
    },
  },
};

interface CustomTextEditorToolbarType {
  type: ToolbarClickedStatusType;
  quillRef: RefAny;
}

const fontStyleFormatArray = ["bold", "italic", "underline", "strike"];
const fontSizeFormatObject = {
  huge: 41,
  large: 39,
  normal: 25,
};

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
    normal: "",
    left: "",
    center: "",
    right: "",
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
    } else if (Object.keys(fontSizeFormatObject).includes(toolbarDetailType)) {
      let value: ToolbarFormatType | boolean = toolbarDetailType;
      if (value === "normal") value = false;
      quill.format("size", value);
      setFormats((prev) => ({
        ...prev,
        ...{ huge: "", large: "", normal: "" },
        [toolbarDetailType]: value || "normal",
      }));
    } else {
      let value: ToolbarFormatType | boolean = toolbarDetailType;
      if (toolbarDetailType === "left") value = false;
      quill.format("align", value);
      setFormats((prev) => ({
        ...prev,
        ...{ left: "", right: "", center: "" },
        [toolbarDetailType]: value || "left",
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
                  src={
                    formats[key as ToolbarFormatType]
                      ? value.active
                      : value.default
                  }
                  alt={key}
                  width={
                    fontSizeFormatObject[
                      key as keyof typeof fontSizeFormatObject
                    ] || 24
                  }
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
