import { useState } from "react";
import * as S from "./styled";

import type { InputStatus } from "./styled";
import type { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

/**
 * Active 조건
 * 1. 값이
 */
export default function Input({ value, ...props }: Props) {
  const [status, setStatus] = useState<InputStatus>("inactive");

  return (
    <S.Wrap>
      <S.Input
        status={status}
        onFocus={() => setStatus("active")}
        onBlur={(e) => !e.target.value && setStatus("inactive")}
        {...props}
      />
    </S.Wrap>
  );
}
