import { RefAny } from "@/src/types";
import Image from "next/image";
import { ReactElement } from "react";
import * as S from "./styled";

const customTextEditorToolbarMap = {
  "align-justify": "/icons/icon__align-justify.svg",
  "align-left": "/icons/icon__align-left.svg",
  "align-center": "/icons/icon__align-center.svg",
  "align-right": "/icons/icon__align-right.svg",
  bold: "/icons/icon__text-bold.svg",
  italic: "/icons/icon__text-italic.svg",
  underline: "/icons/icon__text-underline.svg",
  strike: "/icons/icon__text-strike.svg",
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
