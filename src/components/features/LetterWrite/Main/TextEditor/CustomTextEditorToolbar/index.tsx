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
  | "color#1C1D22"
  | "color#5B5D68"
  | "color#F6523D"
  | "color#FFF53E"
  | "color#37BFA8"
  | "color#648DF5"
  | "color#9E8AFF"
  | "background#1C1D22"
  | "background#5B5D68"
  | "background#F6523D"
  | "background#FFF53E"
  | "background#37BFA8"
  | "background#648DF5"
  | "background#9E8AFF";

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
      default: "/icons/icon__text-bold.svg",
      active: "/icons/icon__text-bold--active.svg",
    },
    italic: {
      default: "/icons/icon__text-italic.svg",
      active: "/icons/icon__text-italic--active.svg",
    },
    underline: {
      default: "/icons/icon__text-underline.svg",
      active: "/icons/icon__text-underline--active.svg",
    },
    strike: {
      default: "/icons/icon__text-strike.svg",
      active: "/icons/icon__text-strike--active.svg",
    },
    huge: {
      default: "/icons/icon__text-huge.svg",
      active: "/icons/icon__text-huge.svg",
    },
    large: {
      default: "/icons/icon__text-large.svg",
      active: "/icons/icon__text-large.svg",
    },
    normal: {
      default: "/icons/icon__text-normal.svg",
      active: "/icons/icon__text-normal.svg",
    },
  },
  Color: {
    "color#1C1D22": {
      default: "/icons/icon__text-color-navy.svg",
      active: "/icons/icon__text-color-navy--active.svg",
    },
    "color#5B5D68": {
      default: "/icons/icon__text-color-gray.svg",
      active: "/icons/icon__text-color-gray--active.svg",
    },
    "color#F6523D": {
      default: "/icons/icon__text-color-red.svg",
      active: "/icons/icon__text-color-red--active.svg",
    },
    "color#FFF53E": {
      default: "/icons/icon__text-color-yellow.svg",
      active: "/icons/icon__text-color-yellow--active.svg",
    },
    "color#37BFA8": {
      default: "/icons/icon__text-color-green.svg",
      active: "/icons/icon__text-color-green--active.svg",
    },
    "color#648DF5": {
      default: "/icons/icon__text-color-blue.svg",
      active: "/icons/icon__text-color-blue--active.svg",
    },
    "color#9E8AFF": {
      default: "/icons/icon__text-color-purple.svg",
      active: "/icons/icon__text-color-purple--active.svg",
    },
    "background#1C1D22": {
      default: "/icons/icon__text-background-navy.svg",
      active: "/icons/icon__text-background-navy--active.svg",
    },
    "background#5B5D68": {
      default: "/icons/icon__text-background-gray.svg",
      active: "/icons/icon__text-background-gray--active.svg",
    },
    "background#F6523D": {
      default: "/icons/icon__text-background-red.svg",
      active: "/icons/icon__text-background-red--active.svg",
    },
    "background#FFF53E": {
      default: "/icons/icon__text-background-yellow.svg",
      active: "/icons/icon__text-background-yellow--active.svg",
    },
    "background#37BFA8": {
      default: "/icons/icon__text-background-green.svg",
      active: "/icons/icon__text-background-green--active.svg",
    },
    "background#648DF5": {
      default: "/icons/icon__text-background-blue.svg",
      active: "/icons/icon__text-background-blue--active.svg",
    },
    "background#9E8AFF": {
      default: "/icons/icon__text-background-purple.svg",
      active: "/icons/icon__text-background-purple--active.svg",
    },
  },
  Align: {
    left: {
      default: "/icons/icon__align-left.svg",
      active: "/icons/icon__align-left--active.svg",
    },
    center: {
      default: "/icons/icon__align-center.svg",
      active: "/icons/icon__align-center--active.svg",
    },
    right: {
      default: "/icons/icon__align-right.svg",
      active: "/icons/icon__align-right--active.svg",
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
const alignFormatArray = ["left", "center", "right"];
const INITIAL_FONT_SIZE_FORMAT_OBJECT = { huge: "", large: "", normal: "" };
const INITIAL_ALIGN_FORMAT_OBJECT = { left: "", right: "", center: "" };
const INITIAL_FONT_COLOR_OBJECT = {
  "color#1C1D22": "",
  "color#5B5D68": "",
  "color#F6523D": "",
  "color#FFF53E": "",
  "color#37BFA8": "",
  "color#648DF5": "",
  "color#9E8AFF": "",
};
const INITIAL_FONT_BACKGROUND_OBJECT = {
  "background#1C1D22": "",
  "background#5B5D68": "",
  "background#F6523D": "",
  "background#FFF53E": "",
  "background#37BFA8": "",
  "background#648DF5": "",
  "background#9E8AFF": "",
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
    "color#1C1D22": "",
    "color#5B5D68": "",
    "color#F6523D": "",
    "color#FFF53E": "",
    "color#37BFA8": "",
    "color#648DF5": "",
    "color#9E8AFF": "",
    "background#1C1D22": "",
    "background#5B5D68": "",
    "background#F6523D": "",
    "background#FFF53E": "",
    "background#37BFA8": "",
    "background#648DF5": "",
    "background#9E8AFF": "",
  });
  const onClickToolbar = (toolbarDetailType: ToolbarFormatType) => {
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
        ...INITIAL_FONT_SIZE_FORMAT_OBJECT,
        [toolbarDetailType]: value || "normal",
      }));
    } else if (alignFormatArray.includes(toolbarDetailType)) {
      let value: ToolbarFormatType | boolean = toolbarDetailType;
      if (toolbarDetailType === "left") value = false;
      quill.format("align", value);
      setFormats((prev) => ({
        ...prev,
        ...INITIAL_ALIGN_FORMAT_OBJECT,
        [toolbarDetailType]: value || "left",
      }));
    } else {
      const [type, hexColor] = toolbarDetailType.split("#");
      quill.format(type, `#${hexColor}`);
      setFormats((prev) => ({
        ...prev,
        ...(type.startsWith("color")
          ? INITIAL_FONT_COLOR_OBJECT
          : INITIAL_FONT_BACKGROUND_OBJECT),
        [toolbarDetailType]: `#${hexColor}`,
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
