import * as S from "./styled";
import type { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { [key: string]: string };
  placeholder?: string;
}

export default function Select({ options, placeholder = "", ...props }: Props) {
  const optionKeys = Object.keys(options);
  return (
    <S.Select {...props}>
      <S.Item selected disabled value={undefined}>
        {placeholder}
      </S.Item>
      {optionKeys.map((key) => (
        <S.Item key={key} value={key}>
          {options[key]}
        </S.Item>
      ))}
    </S.Select>
  );
}
