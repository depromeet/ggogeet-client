import { ReactElement, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import CustomTextEditorToolbar from "./CustomTextEditorToolbar";
import * as S from "../styled";
import { RefAny } from "@/src/types";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  letterWriteGuidelineState,
  letterWriteInputState,
} from "@/src/store/LetterWrite";

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    return function comp({ forwardedRef, ...props }: any) {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const modules = {
  toolbar: [
    [
      { size: [false, "large", "huge"] },
      {
        color: [
          "#1C1D22",
          "#5B5D68",
          "#F6523D",
          "#FFF53E",
          "#37BFA8",
          "#648DF5",
          "#9E8AFF",
        ],
      },
      {
        background: [
          "#1C1D22",
          "#5B5D68",
          "#F6523D",
          "#FFF53E",
          "#37BFA8",
          "#648DF5",
          "#9E8AFF",
        ],
      },
      { align: ["justify", "", "center", "right"] },
      "bold",
      "italic",
      "underline",
      "strike",
    ],
  ],
};

const formats = [
  "size",
  "header",
  "color",
  "background",
  "align",
  "bold",
  "italic",
  "underline",
  "strike",
];

// TODO: maxLength 350자 설정, AutoFocus 추가
// TODO: 앞에서 적용한 스타일을 가이드라인 문장에 그대로 적용?
const TextEditor = ({ quillRef }: { quillRef: RefAny }): ReactElement => {
  const [letterWriteInputObjectState, setLetterWriteInputObjectState] =
    useRecoilState(letterWriteInputState);
  const [letterWriteGuidelineText, setLetterWriteGuidelineText] =
    useRecoilState(letterWriteGuidelineState);
  const [contents, setContents] = useState<string>(
    letterWriteInputObjectState.contents
  );
  useEffect(() => {
    if (letterWriteGuidelineText) {
      setContents((prev) => prev + letterWriteGuidelineText);
      setLetterWriteGuidelineText("");
    }
  }, [letterWriteGuidelineText]);
  useEffect(() => {
    setLetterWriteInputObjectState((prev) => ({ ...prev, contents }));
  }, [contents]);
  setTimeout(() => {
    quillRef.current?.focus();
  }, 0);
  return (
    <S.ReactQuillWrapper>
      <ReactQuill
        forwardedRef={quillRef}
        id="ggogeet-text-editor"
        placeholder="이곳에 마음을 적어보세요."
        theme="snow"
        modules={modules}
        formats={formats}
        value={contents}
        onChange={setContents}
      />
    </S.ReactQuillWrapper>
  );
};

TextEditor.CustomTextEditorToolbar = CustomTextEditorToolbar;

export default TextEditor;
