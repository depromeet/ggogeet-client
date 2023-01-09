import React, { useState } from "react";
import * as S from "./styled";
import { InputDefault } from "./InputDefault";

import type { InputDefaultProps } from "./InputDefault";

interface Props extends Omit<InputDefaultProps, "tail"> {
  onClear: () => void;
}

const IconClear = {
  white:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEzIDMgMyAxM20xMCAwTDMgMyIvPgo8L3N2Zz4K",
  gray: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE2IDE2Ij4KICA8cGF0aCBzdHJva2U9IiM1QjVENjgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTEzIDMgMyAxM20xMCAwTDMgMyIvPgo8L3N2Zz4K",
};

export function InputClear({ onClear, ...props }: Props) {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <div onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>
      <InputDefault
        tail={
          <S.ClearButton type="button" onClick={() => onClear()}>
            <img src={isFocus ? IconClear["white"] : IconClear["gray"]} />
          </S.ClearButton>
        }
        {...props}
      />
    </div>
  );
}
