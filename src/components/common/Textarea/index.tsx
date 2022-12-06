import * as S from "./styled";
import type { TextareaHTMLAttributes } from "react";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function Textarea({ ...props }: Props) {
  return <S.Textarea {...props} />;
}
