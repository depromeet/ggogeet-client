import * as S from "./styled";
import { useRef } from "react";

import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ ...props }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const valueLength = textareaRef.current?.value.length ?? 0;
  return (
    <S.Wrap>
      <S.Textarea ref={textareaRef} {...props} />
      {props.maxLength && (
        <S.LengthCount>
          <S.Length length={valueLength}>{valueLength}</S.Length> /{" "}
          {props.maxLength}
        </S.LengthCount>
      )}
    </S.Wrap>
  );
}
