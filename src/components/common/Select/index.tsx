import * as S from "./styled";
import { SelectHTMLAttributes, useEffect, useState } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  options: { [key: string]: string };
  placeholder?: string;
}

export default function Select({ options, placeholder = "", ...props }: Props) {
  const [selectOptions, setSelectOptions] = useState<string[]>([]);

  useEffect(() => {
    setSelectOptions(() => {
      const key = Object.keys(options);
      return key;
    });
  }, []);

  return (
    <S.Select defaultValue={undefined} {...props}>
      <option disabled value={undefined}>
        {placeholder}
      </option>
      {selectOptions.map((key) => (
        <option key={key} value={key}>
          {options[key]}
        </option>
      ))}
    </S.Select>
  );
}
