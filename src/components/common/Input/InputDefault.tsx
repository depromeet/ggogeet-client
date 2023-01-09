import React, { useState } from "react";
import * as S from "./styled";

import type { InputHTMLAttributes } from "react";
import type { Status, StyleOption } from "./styled";

export interface InputDefaultProps
  extends InputHTMLAttributes<HTMLInputElement> {
  styleOption?: StyleOption;
  tail?: React.ReactNode;
}

export const InputDefault = React.forwardRef<
  HTMLInputElement,
  InputDefaultProps
>(({ value, styleOption, tail, ...props }, ref) => {
  const [status, setStatus] = useState<Status>("inactive");
  const inputStyle = styleOption ?? "underline";

  return (
    <S.Wrap status={status} styleOption={inputStyle}>
      <S.Input
        value={value}
        ref={ref}
        onFocus={() => setStatus("active")}
        onBlur={(e) => !e.target.value && setStatus("inactive")}
        {...props}
      />
      {tail && tail}
    </S.Wrap>
  );
});

InputDefault.displayName = "InputDefault";
