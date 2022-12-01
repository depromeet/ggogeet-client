import { ReactElement, useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import CustomTextEditorToolbar from "./CustomTextEditorToolbar";
import * as S from "./styled";
import { RefAny } from "@/src/types";

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
      { size: ["small", false, "large", "huge"] },
      { color: [] },
      { background: [] },
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
  "color",
  "background",
  "align",
  "bold",
  "italic",
  "underline",
  "strike",
];

const TextEditor = ({ quillRef }: { quillRef: RefAny }): ReactElement => {
  const [content, setContent] = useState<string>("");
  return (
    <S.ReactQuillWrapper>
      <ReactQuill
        forwardedRef={quillRef}
        id="ggogeet-text-editor"
        placeholder="이곳에 마음을 적어보세요."
        theme="snow"
        modules={modules}
        formats={formats}
        value={content}
        onChange={setContent}
      />
    </S.ReactQuillWrapper>
  );
};

TextEditor.CustomTextEditorToolbar = CustomTextEditorToolbar;

export default TextEditor;
