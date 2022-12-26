import { InputHTMLAttributes, ReactNode, useRef } from "react";
import * as S from "./styled";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "type"> {
  id: string;
  label?: ReactNode;
  isRound?: boolean;
  isFocused?: boolean;
}

export default function Checkbox({
  id,
  label,
  isRound = false,
  isFocused = false,
  ...args
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickLabelButton = () => {
    inputRef.current?.click();
  };

  return (
    <S.CheckboxWrapper isRound={isRound} isFocused={isFocused}>
      <input id={id} type="checkbox" ref={inputRef} {...args} />
      <label htmlFor={id} />
      {label && (
        <button type="button" onClick={handleClickLabelButton}>
          {label}
        </button>
      )}
    </S.CheckboxWrapper>
  );
}
