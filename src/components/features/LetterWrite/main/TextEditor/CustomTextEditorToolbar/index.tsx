import { RefAny } from "@/src/types";
import Image from "next/image";
import { ReactElement } from "react";
import * as S from "./styled";

const customTextEditorToolbarMap = {
  "align-justify": "/Icons/icon__align-justify.svg",
  "align-left": "/Icons/icon__align-left.svg",
  "align-center": "/Icons/icon__align-center.svg",
  "align-right": "/Icons/icon__align-right.svg",
  bold: "/Icons/icon__text-bold.svg",
  italic: "/Icons/icon__text-italic.svg",
  underline: "/Icons/icon__text-underline.svg",
  strike: "/Icons/icon__text-strike.svg",
} as const;

const CustomTextEditorToolbar = ({
  quillRef,
}: {
  quillRef: RefAny;
}): ReactElement => {
  const onClickToolbar = (type: keyof typeof customTextEditorToolbarMap) => {
    const quill = quillRef.current.getEditor();
    if (["bold", "italic", "underline", "strike"].includes(type)) {
      quill.format(type, true);
    } else {
      let key: string;
      let value: string | boolean;
      [key, value] = type.split("-");
      if (value === "left") value = false;
      quill.format(key, value);
    }
  };
  return (
    <S.CustomTextEditorToolbarWrapper>
      {Object.entries(customTextEditorToolbarMap).map(([key, value]) => (
        <S.CustomTextEditorToolbarButton
          key={key}
          onClick={() =>
            onClickToolbar(key as keyof typeof customTextEditorToolbarMap)
          }
        >
          <Image alt={key} src={value} width={18} height={18} />
        </S.CustomTextEditorToolbarButton>
      ))}
    </S.CustomTextEditorToolbarWrapper>
  );
};

export default CustomTextEditorToolbar;
