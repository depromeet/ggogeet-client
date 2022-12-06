import React, { useState } from "react";
import * as S from "./styled";
import { InputDefault } from "./InputDefault";

import type { Dispatch, SetStateAction } from "react";
import type { InputDefaultProps } from "./InputDefault";

interface Props extends Omit<InputDefaultProps, "tail"> {
  onClear: () => void;
}

export function InputClear({ onClear, ...props }: Props) {
  return (
    <InputDefault
      tail={
        <S.ClearButton type="button" onClick={() => onClear()}>
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNiIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDE1IDE2Ij4KICA8cGF0aCBmaWxsPSIjQkNDMUQwIiBkPSJtMTQuMTY3IDMuMDk2LjcxMS0uNzAzTDEzLjQ3My45N2wtLjcxMi43MDMgMS40MDYgMS40MjNaTTEuMzQgMTIuOTU2bC0uNzEyLjcwMiAxLjQwNiAxLjQyMy43MTEtLjcwMy0xLjQwNS0xLjQyM1pNMTIuNzYgMS42NzIgMS4zNCAxMi45NTVsMS40MDUgMS40MjNMMTQuMTY3IDMuMDk2IDEyLjc2IDEuNjczWiIvPgogIDxwYXRoIGZpbGw9IiNCQ0MxRDAiIGQ9Im0xMi43NjEgMTQuMzc4LjcxMi43MDMgMS40MDUtMS40MjMtLjcxMS0uNzAzLTEuNDA2IDEuNDIzWk0yLjc0NSAxLjY3MyAyLjAzNC45Ny42MjggMi4zOTNsLjcxMi43MDMgMS40MDUtMS40MjNabTExLjQyMiAxMS4yODJMMi43NDUgMS42NzMgMS4zNCAzLjA5NmwxMS40MiAxMS4yODIgMS40MDYtMS40MjNaIi8+Cjwvc3ZnPgo=" />
        </S.ClearButton>
      }
      {...props}
    />
  );
}
