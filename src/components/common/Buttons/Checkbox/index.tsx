import { InputHTMLAttributes, ReactNode, useRef } from "react";
import * as S from "./styled";

interface Props
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "checked"> {
  checked: boolean;
  isRound?: boolean;
  isFocused?: boolean;
}

export default function Checkbox({
  checked,
  isRound = false,
  isFocused = false,
  ...args
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickLabelButton = () => {
    inputRef.current?.click();
  };

  return (
    <S.CheckboxWrapper>
      <S.CheckboxButton
        isRound={isRound}
        isFocused={isFocused}
        checked={checked}
        onClick={handleClickLabelButton}
        role="button"
      />
      <input type="checkbox" checked={checked} ref={inputRef} {...args} />
    </S.CheckboxWrapper>
  );
}
